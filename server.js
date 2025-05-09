const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios'); // Add axios for HTTP requests
const workouts = require('./workouts');
const app = express();
const PORT = process.env.PORT || 8080;
const PYTHON_API_URL = 'https://backendpy-production.up.railway.app/'; // Python server address

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

function errorResponse(res, status, message) {
  return res.status(status).json({ 
    success: false, 
    error: message 
  });
}

// Consistent difficulty mapping function
function mapDifficultyLevel(difficultyLevel) {
  const difficultyMap = {
    'beginner': 'Easy',
    'intermediate': 'Medium',
    'advanced': 'Hard'
  };
  return difficultyMap[difficultyLevel] || difficultyLevel;
}

// Keep the existing endpoint for workout type recommendations
app.post('/api/recommend', (req, res) => {
  try {
    const { workoutType, difficultyLevel } = req.body;
    
    // Validate input
    if (!workoutType) {
      return errorResponse(res, 400, 'Workout type is required');
    }
    
    // If selecting "all" workout types
    if (workoutType === 'semua') {
      // Combine all exercises from all categories
      let allWorkouts = [];
      for (const type in workouts) {
        for (const sub in workouts[type]) {
          allWorkouts = [...allWorkouts, ...workouts[type][sub]];
        }
      }
      
      // Filter based on difficulty if specified
      if (difficultyLevel && difficultyLevel !== 'all') {
        const mappedDifficulty = mapDifficultyLevel(difficultyLevel);
        allWorkouts = allWorkouts.filter(w => w.kesulitan === mappedDifficulty);
      }
      
      return res.json({ success: true, recommendations: allWorkouts });
    } else if (workouts[workoutType]) {
      // If selecting a specific type (strength or endurance)
      // Combine all exercises from the selected type
      let typeWorkouts = [];
      for (const sub in workouts[workoutType]) {
        typeWorkouts = [...typeWorkouts, ...workouts[workoutType][sub]];
      }
      
      // Filter based on difficulty if specified
      if (difficultyLevel && difficultyLevel !== 'all') {
        const mappedDifficulty = mapDifficultyLevel(difficultyLevel);
        typeWorkouts = typeWorkouts.filter(w => w.kesulitan === mappedDifficulty);
      }
      
      return res.json({ success: true, recommendations: typeWorkouts });
    } else {
      // If type not found
      return errorResponse(res, 400, 'Invalid workout type');
    }
  } catch (error) {
    console.error('Error in recommend endpoint:', error);
    return errorResponse(res, 500, 'Server error while processing recommendation');
  }
});

// Keeping the old endpoint for backward compatibility
app.post('/recommend', (req, res) => {
  // Forward to the new standardized endpoint
  req.url = '/api/recommend';
  app._router.handle(req, res);
});

// Modified to proxy to Python server instead of running the Python script directly
app.post('/api/recommendations', async (req, res) => {
  const { age, height, weight } = req.body;
  
  // Validate inputs are numbers
  if (!age || !height || !weight || isNaN(age) || isNaN(height) || isNaN(weight)) {
    return errorResponse(res, 400, 'Missing required fields or invalid data types');
  }
  
  try {
    // Forward the request to Python server
    const pythonResponse = await axios.post(`${PYTHON_API_URL}/api/recommend`, {
      age: parseFloat(age),
      height: parseFloat(height),
      weight: parseFloat(weight)
    });
    
    // Return the Python server's response
    res.json(pythonResponse.data);
  } catch (error) {
    console.error('Error connecting to Python server:', error.message);
    
    // Return appropriate error based on what happened
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return errorResponse(res, 503, 'Python server is not available. Please try again later.');
    }
    
    if (error.response) {
      // The Python server responded with an error
      return errorResponse(res, error.response.status, 
        `Python server error: ${error.response.data.error || 'Unknown error'}`);
    }
    
    return errorResponse(res, 500, 'Failed to process request with Python server');
  }
});

// Add health check endpoint that checks if Python server is available
app.get('/api/health', async (req, res) => {
  try {
    // Check Python server health
    const pythonHealth = await axios.get(`${PYTHON_API_URL}/api/health`, { timeout: 5000 });
    res.json({
      expressServer: 'ok',
      pythonServer: pythonHealth.data.status || 'ok'
    });
  } catch (error) {
    res.json({
      expressServer: 'ok',
      pythonServer: 'offline',
      error: error.message
    });
  }
});

// Serve index.html for all routes to support SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
  console.log(`Forwarding API requests to Python server at ${PYTHON_API_URL}`);
  console.log('Using in-memory storage for programs (data will be lost on server restart)');
});