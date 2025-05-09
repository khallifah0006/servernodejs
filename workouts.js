// workouts.js
// Database gerakan calisthenics untuk Node.js

const workouts = {
    "endurance": {
      "endurance_aerobic": [
        { 
          "name": "Jogging", 
          "jenis": "endurance", 
          "subkategori": "endurance_aerobic", 
          "kesulitan": "Easy", 
          "target": "Cardiovascular system, legs",
          "description": "Lari dengan kecepatan sedang untuk meningkatkan kesehatan jantung."
        },
        { 
          "name": "Lari Jarak Jauh", 
          "jenis": "endurance", 
          "subkategori": "endurance_aerobic", 
          "kesulitan": "Medium", 
          "target": "Cardiovascular system, legs",
          "description": "Lari dengan jarak lebih panjang untuk meningkatkan stamina."
        },
        { 
          "name": "Bersepeda Santai", 
          "jenis": "endurance", 
          "subkategori": "endurance_aerobic", 
          "kesulitan": "Medium", 
          "target": "Cardiovascular system, legs, glutes",
          "description": "Bersepeda dengan intensitas ringan hingga sedang."
        },
        { 
          "name": "Berenang Santai", 
          "jenis": "endurance", 
          "subkategori": "endurance_aerobic", 
          "kesulitan": "Medium", 
          "target": "Cardiovascular system, full body",
          "description": "Berenang dengan kecepatan sedang untuk melatih seluruh tubuh."
        },
        { 
          "name": "Brisk Walking", 
          "jenis": "endurance", 
          "subkategori": "endurance_aerobic", 
          "kesulitan": "Easy", 
          "target": "Cardiovascular system, legs",
          "description": "Jalan cepat dengan tempo konstan."
        },
        { 
          "name": "Stair Climbing", 
          "jenis": "endurance", 
          "subkategori": "endurance_aerobic", 
          "kesulitan": "Easy", 
          "target": "Cardiovascular system, legs, glutes",
          "description": "Naik turun tangga dengan kecepatan sedang."
        },
        { 
          "name": "Dancing", 
          "jenis": "endurance", 
          "subkategori": "endurance_aerobic", 
          "kesulitan": "Easy", 
          "target": "Cardiovascular system, full body",
          "description": "Menari bebas dengan musik selama 15-30 menit."
        },
        { 
          "name": "Elliptical Trainer", 
          "jenis": "endurance", 
          "subkategori": "endurance_aerobic", 
          "kesulitan": "Easy", 
          "target": "Cardiovascular system, legs, arms",
          "description": "Latihan dengan mesin elliptical pada intensitas rendah hingga sedang."
        }
      ],
      "endurance_anaerobic": [
        { 
          "name": "Burpees", 
          "jenis": "endurance", 
          "subkategori": "endurance_anaerobic", 
          "kesulitan": "Hard", 
          "target": "Chest, thighs, glutes, core",
          "description": "Gerakan kombinasi squat thrust dan vertical jump."
        },
        { 
          "name": "Mountain Climbers", 
          "jenis": "endurance", 
          "subkategori": "endurance_anaerobic", 
          "kesulitan": "Medium", 
          "target": "Core, legs, chest, shoulders",
          "description": "Gerakan mirip berlari di tempat dengan posisi plank."
        },
        { 
          "name": "High Knees", 
          "jenis": "endurance", 
          "subkategori": "endurance_anaerobic", 
          "kesulitan": "Medium", 
          "target": "Legs, glutes, cardiovascular system",
          "description": "Gerakan mengangkat lutut tinggi secara bergantian."
        },
        { 
          "name": "Jumping Jacks", 
          "jenis": "endurance", 
          "subkategori": "endurance_anaerobic", 
          "kesulitan": "Medium", 
          "target": "Full body, cardiovascular system",
          "description": "Gerakan melompat dengan membuka dan menutup kaki."
        },
        { 
          "name": "Tuck Jumps", 
          "jenis": "endurance", 
          "subkategori": "endurance_anaerobic", 
          "kesulitan": "Hard", 
          "target": "Legs, glutes, cardiovascular system",
          "description": "Melompat dengan menarik lutut ke dada."
        },
        { 
          "name": "Marching in Place", 
          "jenis": "endurance", 
          "subkategori": "endurance_anaerobic", 
          "kesulitan": "Easy", 
          "target": "Legs, cardiovascular system",
          "description": "Gerakan berjalan di tempat dengan mengangkat lutut."
        },
        { 
          "name": "Step Touches", 
          "jenis": "endurance", 
          "subkategori": "endurance_anaerobic", 
          "kesulitan": "Easy", 
          "target": "Legs, hips, cardiovascular system",
          "description": "Melangkah ke samping dan kembali dengan ritme cepat."
        },
        { 
          "name": "Modified Jumping Jacks", 
          "jenis": "endurance", 
          "subkategori": "endurance_anaerobic", 
          "kesulitan": "Easy", 
          "target": "Arms, shoulders, legs, cardiovascular system",
          "description": "Jumping jack tanpa lompatan, hanya gerakan tangan dan langkah kaki ke samping."
        }
      ],
      "muscular_endurance": [
        { 
          "name": "Squats (Repetisi Tinggi)", 
          "jenis": "endurance", 
          "subkategori": "muscular_endurance", 
          "kesulitan": "Medium", 
          "target": "Legs, glutes",
          "description": "Gerakan jongkok dengan repetisi tinggi untuk ketahanan otot."
        },
        { 
          "name": "Lunges", 
          "jenis": "endurance", 
          "subkategori": "muscular_endurance", 
          "kesulitan": "Medium", 
          "target": "Legs, glutes",
          "description": "Gerakan melangkah dengan satu kaki ke depan lalu jongkok."
        },
        { 
          "name": "Plank", 
          "jenis": "endurance", 
          "subkategori": "muscular_endurance", 
          "kesulitan": "Medium", 
          "target": "Core, lower back",
          "description": "Menahan posisi push-up tanpa menekuk siku."
        },
        { 
          "name": "Leg Raises", 
          "jenis": "endurance", 
          "subkategori": "muscular_endurance", 
          "kesulitan": "Medium", 
          "target": "Core, hips",
          "description": "Mengangkat kaki lurus ke atas sambil berbaring telentang."
        },
        { 
          "name": "Wall Sit", 
          "jenis": "endurance", 
          "subkategori": "muscular_endurance", 
          "kesulitan": "Easy", 
          "target": "Quadriceps, glutes",
          "description": "Menahan posisi duduk dengan punggung bersandar di dinding."
        },
        { 
          "name": "Modified Push-ups", 
          "jenis": "endurance", 
          "subkategori": "muscular_endurance", 
          "kesulitan": "Easy", 
          "target": "Chest, shoulders, triceps",
          "description": "Push-up dengan lutut sebagai tumpuan (knee push-ups)."
        },
        { 
          "name": "Seated Leg Extensions", 
          "jenis": "endurance", 
          "subkategori": "muscular_endurance", 
          "kesulitan": "Easy", 
          "target": "Quadriceps",
          "description": "Duduk di kursi dan meluruskan kaki secara bergantian."
        },
        { 
          "name": "Forearm Side Plank", 
          "jenis": "endurance", 
          "subkategori": "muscular_endurance", 
          "kesulitan": "Easy", 
          "target": "Obliques, shoulders",
          "description": "Plank menyamping dengan bertumpu pada lengan bawah dan kaki."
        }
      ]
    },
   // Lanjutan workouts.js

  "strength": {
    "maximal_strength": [
      {
        "name": "Decline Push-ups",
        "jenis": "strength",
        "subkategori": "maximal_strength",
        "kesulitan": "Hard",
        "target": "Upper chest, shoulders, triceps",
        "description": "Push-up dengan posisi kaki lebih tinggi dari kepala."
      },
      {
        "name": "One-Leg Squats",
        "jenis": "strength",
        "subkategori": "maximal_strength",
        "kesulitan": "Hard",
        "target": "Legs, glutes",
        "description": "Squat dengan menggunakan satu kaki."
      },
      {
        "name": "Handstand Push-ups",
        "jenis": "strength",
        "subkategori": "maximal_strength",
        "kesulitan": "Very Hard",
        "target": "Shoulders, chest, triceps",
        "description": "Push-up dalam posisi handstand."
      },
      {
        "name": "Dips",
        "jenis": "strength",
        "subkategori": "maximal_strength",
        "kesulitan": "Hard",
        "target": "Triceps, shoulders, chest",
        "description": "Gerakan menurunkan dan mengangkat tubuh dengan tangan bertumpu."
      },
      {
        "name": "Pull-ups",
        "jenis": "strength",
        "subkategori": "maximal_strength",
        "kesulitan": "Hard",
        "target": "Back, biceps, shoulders",
        "description": "Menarik tubuh ke atas dengan pegangan di atas kepala."
      },
      {
        "name": "Wall Push-ups",
        "jenis": "strength",
        "subkategori": "maximal_strength",
        "kesulitan": "Easy",
        "target": "Chest, shoulders, triceps",
        "description": "Push-up dengan bersandar pada dinding, cocok untuk pemula."
      },
      {
        "name": "Chair Dips",
        "jenis": "strength",
        "subkategori": "maximal_strength",
        "kesulitan": "Easy",
        "target": "Triceps, shoulders",
        "description": "Dips menggunakan kursi dengan kaki tetap di lantai."
      },
      {
        "name": "Assisted Squats",
        "jenis": "strength",
        "subkategori": "maximal_strength",
        "kesulitan": "Easy",
        "target": "Legs, glutes",
        "description": "Squat dengan bantuan pegangan atau bersandar pada dinding."
      }
    ],
    "explosive_strength": [
      {
        "name": "Jump Squats",
        "jenis": "strength",
        "subkategori": "explosive_strength",
        "kesulitan": "Hard",
        "target": "Legs, glutes",
        "description": "Squat diikuti dengan lompatan eksplosif."
      },
      {
        "name": "Clapping Push-ups",
        "jenis": "strength",
        "subkategori": "explosive_strength",
        "kesulitan": "Hard",
        "target": "Chest, shoulders, triceps",
        "description": "Push-up eksplosif dengan tepuk tangan di tengahnya."
      },
      {
        "name": "Box Jumps",
        "jenis": "strength",
        "subkategori": "explosive_strength",
        "kesulitan": "Hard",
        "target": "Legs, glutes",
        "description": "Melompat ke atas box atau platform."
      },
      {
        "name": "Broad Jumps",
        "jenis": "strength",
        "subkategori": "explosive_strength",
        "kesulitan": "Hard",
        "target": "Legs, glutes",
        "description": "Melompat ke depan sejauh mungkin."
      },
      {
        "name": "Ankle Hops",
        "jenis": "strength",
        "subkategori": "explosive_strength",
        "kesulitan": "Easy",
        "target": "Calves, ankles",
        "description": "Lompatan kecil dengan hanya menggunakan pergelangan kaki."
      },
      {
        "name": "Step Jumps",
        "jenis": "strength",
        "subkategori": "explosive_strength",
        "kesulitan": "Easy",
        "target": "Legs, glutes",
        "description": "Melompat ke atas step atau platform rendah."
      },
      {
        "name": "Medicine Ball Slams (Light)",
        "jenis": "strength",
        "subkategori": "explosive_strength",
        "kesulitan": "Easy",
        "target": "Core, shoulders, arms",
        "description": "Melempar bola medicine ringan ke bawah dengan tenaga."
      }
    ],
    "strength_endurance": [
      {
        "name": "Push-ups (High Reps)",
        "jenis": "strength",
        "subkategori": "strength_endurance",
        "kesulitan": "Medium",
        "target": "Chest, shoulders, triceps, core",
        "description": "Push-up dengan repetisi tinggi untuk ketahanan otot."
      },
      {
        "name": "Plank (Long Duration)",
        "jenis": "strength",
        "subkategori": "strength_endurance",
        "kesulitan": "Medium",
        "target": "Core, lower back",
        "description": "Plank dengan durasi yang lebih lama."
      },
      {
        "name": "Walking Lunges",
        "jenis": "strength",
        "subkategori": "strength_endurance",
        "kesulitan": "Medium",
        "target": "Legs, glutes",
        "description": "Lunges sambil berjalan ke depan."
      },
      {
        "name": "Dips (High Reps)",
        "jenis": "strength",
        "subkategori": "strength_endurance",
        "kesulitan": "Medium",
        "target": "Triceps, chest, shoulders",
        "description": "Dips dengan repetisi tinggi untuk ketahanan otot."
      },
      {
        "name": "Countertop Push-ups",
        "jenis": "strength",
        "subkategori": "strength_endurance",
        "kesulitan": "Easy",
        "target": "Chest, shoulders, triceps",
        "description": "Push-up dengan bersandar pada countertop atau meja."
      },
      {
        "name": "Glute Bridges",
        "jenis": "strength",
        "subkategori": "strength_endurance",
        "kesulitan": "Easy",
        "target": "Glutes, lower back",
        "description": "Mengangkat pinggul ke atas dari posisi berbaring telentang."
      },
      {
        "name": "Supermans",
        "jenis": "strength",
        "subkategori": "strength_endurance",
        "kesulitan": "Easy",
        "target": "Lower back, glutes",
        "description": "Mengangkat tangan dan kaki secara bersamaan dari posisi tengkurap."
      },
      {
        "name": "Bird Dogs",
        "jenis": "strength",
        "subkategori": "strength_endurance",
        "kesulitan": "Easy",
        "target": "Core, lower back",
        "description": "Mengangkat tangan dan kaki berlawanan dari posisi merangkak."
      }
    ],
    "relative_strength": [
      {
        "name": "Pistol Squats",
        "jenis": "strength",
        "subkategori": "relative_strength",
        "kesulitan": "Hard",
        "target": "Legs, glutes",
        "description": "Squat satu kaki dengan kaki lainnya diluruskan ke depan."
      },
      {
        "name": "Muscle-ups",
        "jenis": "strength",
        "subkategori": "relative_strength",
        "kesulitan": "Very Hard",
        "target": "Chest, shoulders, back, arms",
        "description": "Kombinasi pull-up dan dip dalam satu gerakan."
      },
      {
        "name": "Human Flag",
        "jenis": "strength",
        "subkategori": "relative_strength",
        "kesulitan": "Very Hard",
        "target": "Core, shoulders, lats",
        "description": "Memegang tiang secara horizontal dengan tubuh sejajar dengan tanah."
      },
      {
        "name": "Dragon Flags",
        "jenis": "strength",
        "subkategori": "relative_strength",
        "kesulitan": "Very Hard",
        "target": "Core, upper body",
        "description": "Mengangkat seluruh tubuh dengan hanya bertumpu pada bahu."
      },
      {
        "name": "Assisted Pull-ups",
        "jenis": "strength",
        "subkategori": "relative_strength",
        "kesulitan": "Easy",
        "target": "Back, biceps, shoulders",
        "description": "Pull-up dengan bantuan karet resistance atau dengan kaki di kursi."
      },
      {
        "name": "Negative Pull-ups",
        "jenis": "strength",
        "subkategori": "relative_strength",
        "kesulitan": "Easy",
        "target": "Back, biceps",
        "description": "Fokus pada fase turun dari pull-up dengan melompat ke posisi atas."
      },
      {
        "name": "Modified Pistol Squats",
        "jenis": "strength",
        "subkategori": "relative_strength",
        "kesulitan": "Easy",
        "target": "Legs, glutes, balance",
        "description": "Pistol squat dengan bantuan pegangan atau kursi."
      },
      {
        "name": "Incline Rows",
        "jenis": "strength",
        "subkategori": "relative_strength",
        "kesulitan": "Easy",
        "target": "Back, biceps",
        "description": "Row dengan tubuh miring bersandar ke meja atau bar rendah."
      }
    ]
  }
};

  
  module.exports = workouts;
  