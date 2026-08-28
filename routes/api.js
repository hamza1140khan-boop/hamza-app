const express = require('express');
const router = express.Router();

// Workout Database for Muscle Up — Fat Down
const workoutsDb = {
    beginner: [
        { id: 'b1', name: 'Jumping Jacks', type: 'time', duration: 30, reps: null, calories: 25, rest: 10, target: 'Full Body Cardio', instruction: 'Jump feet wide while raising hands overhead. Keep light on feet.' },
        { id: 'b2', name: 'Incline Push-ups', type: 'reps', duration: 35, reps: 12, calories: 30, rest: 15, target: 'Chest & Triceps', instruction: 'Hands on elevated surface. Lower chest and press up smoothly.' },
        { id: 'b3', name: 'Bodyweight Squats', type: 'reps', duration: 40, reps: 15, calories: 35, rest: 15, target: 'Quads & Glutes', instruction: 'Feet shoulder-width apart. Sit back down to parallel and stand tall.' },
        { id: 'b4', name: 'Knee Plank Hold', type: 'time', duration: 30, reps: null, calories: 20, rest: 10, target: 'Core Abs', instruction: 'Forearms on floor, knees grounded, hold straight line from shoulders to knees.' },
        { id: 'b5', name: 'Glute Bridges', type: 'reps', duration: 30, reps: 15, calories: 25, rest: 10, target: 'Glutes & Lower Back', instruction: 'Lie on back with knees bent. Drive hips upward and squeeze glutes.' },
        { id: 'b6', name: 'High Knee Taps', type: 'time', duration: 30, reps: null, calories: 30, rest: 15, target: 'Fat Burning HIIT', instruction: 'March or jog in place bringing knees up toward chest level.' }
    ],
    intermediate: [
        { id: 'i1', name: 'Standard Push-ups', type: 'reps', duration: 40, reps: 18, calories: 45, rest: 15, target: 'Upper Chest & Triceps', instruction: 'Straight body plank line. Lower chest 1 inch from floor and drive up.' },
        { id: 'i2', name: 'Jump Squats', type: 'reps', duration: 40, reps: 16, calories: 55, rest: 15, target: 'Explosive Legs & Glutes', instruction: 'Squat deep then explosively leap upwards, landing softly into next squat.' },
        { id: 'i3', name: 'Mountain Climbers', type: 'time', duration: 35, reps: null, calories: 45, rest: 10, target: 'Core & High Burn', instruction: 'Push-up plank position. Rapidly drive alternating knees toward chest.' },
        { id: 'i4', name: 'Tricep Dips (Chair)', type: 'reps', duration: 35, reps: 15, calories: 35, rest: 15, target: 'Triceps & Arms', instruction: 'Hands on chair edge. Lower hips by bending elbows to 90 degrees and push up.' },
        { id: 'i5', name: 'Reverse Lunges', type: 'reps', duration: 40, reps: 20, calories: 45, rest: 15, target: 'Quads & Hamstrings', instruction: 'Step backward into 90-degree lunges, alternating legs rhythmically.' },
        { id: 'i6', name: 'Full Forearm Plank', type: 'time', duration: 45, reps: null, calories: 35, rest: 15, target: 'Isometric Core', instruction: 'Hold rigid hollow-body plank without sagging lower back.' }
    ],
    advanced: [
        { id: 'a1', name: 'Diamond Push-ups', type: 'reps', duration: 45, reps: 16, calories: 50, rest: 15, target: 'Triceps & Inner Chest', instruction: 'Form a diamond triangle with index fingers and thumbs under chest.' },
        { id: 'a2', name: 'Burpees with Push-up', type: 'reps', duration: 50, reps: 14, calories: 75, rest: 20, target: 'Maximum Fat Shred', instruction: 'Drop into pushup, hop feet forward, and leap overhead with explosive jump.' },
        { id: 'a3', name: 'Bulgarian Split Squats', type: 'reps', duration: 45, reps: 14, calories: 55, rest: 15, target: 'Single Leg Hypertrophy', instruction: 'Rear foot elevated on couch/chair. Lower front thigh parallel to floor.' },
        { id: 'a4', name: 'Pike Push-ups', type: 'reps', duration: 45, reps: 12, calories: 45, rest: 15, target: 'Shoulders & Upper Chest', instruction: 'Hips high in V-shape. Lower head towards ground between hands.' },
        { id: 'a5', name: 'Bicycle Crunches', type: 'time', duration: 45, reps: null, calories: 40, rest: 10, target: 'Obliques & Lower Abs', instruction: 'Opposite elbow to opposite knee in continuous fluid cycling motion.' },
        { id: 'a6', name: 'Tuck Jumps', type: 'time', duration: 35, reps: null, calories: 60, rest: 20, target: 'Plyometric Burn', instruction: 'Jump high pulling both knees into chest. Land softly on balls of feet.' },
        { id: 'a7', name: 'Hollow Body Hold', type: 'time', duration: 45, reps: null, calories: 35, rest: 15, target: 'Core Tightening', instruction: 'Lower back glued to floor, arms and legs extended 6 inches off ground.' }
    ],
    beast: [
        { id: 'x1', name: 'Explosive Clap Push-ups', type: 'reps', duration: 45, reps: 12, calories: 60, rest: 20, target: 'Chest Power', instruction: 'Push off floor with enough power to clap hands before landing softly.' },
        { id: 'x2', name: 'Pistol Squats (Assisted)', type: 'reps', duration: 50, reps: 10, calories: 60, rest: 20, target: 'Leg Strength', instruction: 'Single leg deep squat while extending opposite leg straight forward.' },
        { id: 'x3', name: 'Spiderman Plank Push-ups', type: 'reps', duration: 45, reps: 14, calories: 55, rest: 15, target: 'Chest & Core', instruction: 'Bring knee to elbow at bottom of each push-up.' },
        { id: 'x4', name: 'High-Speed Mountain Climbers', type: 'time', duration: 45, reps: null, calories: 65, rest: 15, target: 'Metabolic Max', instruction: 'Sprint knees into chest non-stop at highest safe tempo.' },
        { id: 'x5', name: 'Decline Push-ups', type: 'reps', duration: 45, reps: 16, calories: 50, rest: 15, target: 'Upper Chest Bulk', instruction: 'Feet elevated on chair/sofa, hands on floor. Lower chest.' },
        { id: 'x6', name: '1-Minute Iron Plank', type: 'time', duration: 60, reps: null, calories: 45, rest: 20, target: 'Core Tenacity', instruction: 'Lock glutes, quads, and abs for 60 uninterrupted seconds.' }
    ]
};

// 28-Day Plan Generator
const planDays = Array.from({ length: 28 }, (_, index) => {
    const day = index + 1;
    const isRest = day % 7 === 0;
    let focus = 'Full Body Blast';
    let level = 'beginner';
    let duration = '15 mins';
    let estCalories = 160;

    if (isRest) {
        focus = 'Active Recovery & Stretching';
        duration = '10 mins';
        estCalories = 50;
    } else if (day <= 7) {
        level = 'beginner';
        focus = day % 2 === 1 ? 'Chest & Core Foundation' : 'Legs & Cardio Ignite';
        duration = '15 mins';
        estCalories = 150 + day * 4;
    } else if (day <= 14) {
        level = 'intermediate';
        focus = day % 2 === 1 ? 'Upper Body Power & Arms' : 'HIIT Fat Shredder';
        duration = '20 mins';
        estCalories = 200 + (day - 7) * 5;
    } else if (day <= 21) {
        level = 'advanced';
        focus = day % 2 === 1 ? 'Muscle Hypertrophy Split' : 'Tabata Cardio Torch';
        duration = '25 mins';
        estCalories = 260 + (day - 14) * 6;
    } else {
        level = 'beast';
        focus = day % 2 === 1 ? 'Maximum Muscle Sculpt' : 'Ultimate Fat Melt Inferno';
        duration = '30 mins';
        estCalories = 320 + (day - 21) * 8;
    }

    return {
        day,
        title: `Day ${day}: ${focus}`,
        focus,
        isRest,
        level,
        duration,
        estCalories,
        weightLossLb: isRest ? 0 : 0.2
    };
});

// API Routes
router.get('/health', (req, res) => {
    res.json({
        status: 'Muscle Up — Fat Down API Active',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// Get workouts by level
router.get('/workouts/:level', (req, res) => {
    const level = (req.params.level || 'beginner').toLowerCase();
    const workouts = workoutsDb[level] || workoutsDb.beginner;
    res.json({
        level,
        count: workouts.length,
        workouts
    });
});

// Get 28-day challenge plan
router.get('/plan', (req, res) => {
    res.json({
        totalDays: 28,
        plan: planDays
    });
});

// Get single day info
router.get('/plan/:day', (req, res) => {
    const dayNum = parseInt(req.params.day, 10);
    const dayData = planDays.find(d => d.day === dayNum);
    if (!dayData) {
        return res.status(404).json({ error: 'Day not found in 28-day plan' });
    }
    const workouts = dayData.isRest ? [] : (workoutsDb[dayData.level] || workoutsDb.beginner);
    res.json({
        ...dayData,
        workouts
    });
});

// Stats calculation helper
router.post('/calculate-progress', (req, res) => {
    const { initialWeight, workoutsCompleted } = req.body;
    const startW = parseFloat(initialWeight) || 180;
    const completed = parseInt(workoutsCompleted, 10) || 0;
    const totalLost = (completed * 0.2).toFixed(1);
    const currentWeight = (startW - (completed * 0.2)).toFixed(1);
    
    res.json({
        initialWeight: startW,
        workoutsCompleted: completed,
        totalWeightLost: parseFloat(totalLost),
        currentWeight: parseFloat(currentWeight),
        targetWeeklyBurn: completed * 220
    });
});

module.exports = router;
