// public/js/firebase-config.js
/**
 * Firebase Configuration & Resilient Fallback Layer for Muscle Up — Fat Down
 * Handles both real Firebase keys and offline local simulation storage seamlessly.
 */

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};

// Check if Firebase Compat is loaded and initialize
let isRealFirebase = false;

try {
    if (typeof firebase !== 'undefined' && firebase.initializeApp) {
        // Only initialize if valid or placeholder without throw
        try {
            firebase.initializeApp(firebaseConfig);
            isRealFirebase = true;
        } catch (e) {
            console.warn("Firebase initialized in simulated local mode:", e.message);
        }
    }
} catch (err) {
    console.warn("Firebase SDK fallback mode active");
}

// Resilient Offline-First Data & Auth Store for reliable instant preview
const LocalStore = {
    KEY_USER: 'muscle_up_current_user',
    KEY_USERS_DB: 'muscle_up_users_data',
    
    getUsers() {
        try {
            const data = localStorage.getItem(this.KEY_USERS_DB);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            return {};
        }
    },
    
    saveUser(uid, userData) {
        const users = this.getUsers();
        users[uid] = { ...users[uid], ...userData };
        localStorage.setItem(this.KEY_USERS_DB, JSON.stringify(users));
        if (this.getCurrentUser()?.uid === uid) {
            localStorage.setItem(this.KEY_USER, JSON.stringify({ ...this.getCurrentUser(), ...userData }));
        }
    },

    getUser(uid) {
        const users = this.getUsers();
        if (users[uid]) return users[uid];
        // Default seed data for guest/demo user
        return {
            uid: uid,
            fullName: 'Alex Stone',
            email: 'athlete@muscleup.fit',
            initialWeight: 185.0,
            currentWeight: 178.6,
            goalWeight: 165.0,
            streak: 4,
            workoutsCompleted: 8,
            totalCaloriesBurned: 1840,
            completedDays: [1, 2, 3, 4, 5, 8, 9, 10],
            badges: ['first_sweat', 'streak_3', 'fat_destroyer'],
            weightHistory: [
                { date: '2026-08-15', weight: 185.0 },
                { date: '2026-08-18', weight: 183.4 },
                { date: '2026-08-21', weight: 181.2 },
                { date: '2026-08-24', weight: 179.8 },
                { date: '2026-08-27', weight: 178.6 }
            ]
        };
    },

    setCurrentUser(user) {
        if (user) {
            localStorage.setItem(this.KEY_USER, JSON.stringify(user));
        } else {
            localStorage.removeItem(this.KEY_USER);
        }
    },

    getCurrentUser() {
        try {
            const data = localStorage.getItem(this.KEY_USER);
            if (data) return JSON.parse(data);
            // Default active demo user so user can explore right away
            const defaultUser = {
                uid: 'demo_user_101',
                email: 'athlete@muscleup.fit',
                displayName: 'Alex Stone'
            };
            this.setCurrentUser(defaultUser);
            return defaultUser;
        } catch (e) {
            return null;
        }
    }
};

// Global Firebase Adapter that guarantees continuous app operation
window.FitnessDB = {
    async getUserData(uid) {
        if (isRealFirebase && firebase.database) {
            try {
                const snap = await firebase.database().ref(`users/${uid}`).once('value');
                if (snap.exists()) return snap.val();
            } catch (err) {
                console.warn("RTDB fetch failed, using local sync:", err);
            }
        }
        return LocalStore.getUser(uid);
    },

    async saveUserData(uid, data) {
        LocalStore.saveUser(uid, data);
        if (isRealFirebase && firebase.database) {
            try {
                await firebase.database().ref(`users/${uid}`).update(data);
            } catch (err) {
                console.warn("RTDB update failed, stored locally:", err);
            }
        }
    },

    async recordCompletedWorkout(uid, workoutDetails) {
        const user = await this.getUserData(uid);
        const newWorkoutsCount = (user.workoutsCompleted || 0) + 1;
        const currentWeight = parseFloat((user.currentWeight || user.initialWeight || 180) - 0.2).toFixed(1);
        const newStreak = (user.streak || 0) + 1;
        const burnedCals = (user.totalCaloriesBurned || 0) + (workoutDetails.calories || 180);
        
        const completedDays = user.completedDays || [];
        if (workoutDetails.day && !completedDays.includes(workoutDetails.day)) {
            completedDays.push(workoutDetails.day);
        }

        const weightHistory = user.weightHistory || [];
        weightHistory.push({
            date: new Date().toISOString().split('T')[0],
            weight: parseFloat(currentWeight)
        });

        // Check badge unlocks
        const badges = user.badges || [];
        if (!badges.includes('first_sweat')) badges.push('first_sweat');
        if (newStreak >= 3 && !badges.includes('streak_3')) badges.push('streak_3');
        if (newStreak >= 7 && !badges.includes('streak_7')) badges.push('streak_7');
        if (newWorkoutsCount >= 10 && !badges.includes('iron_will')) badges.push('iron_will');
        if (parseFloat(currentWeight) <= (user.initialWeight - 5) && !badges.includes('fat_destroyer')) badges.push('fat_destroyer');

        const updatedData = {
            ...user,
            workoutsCompleted: newWorkoutsCount,
            currentWeight: parseFloat(currentWeight),
            streak: newStreak,
            totalCaloriesBurned: burnedCals,
            completedDays,
            weightHistory,
            badges,
            lastWorkoutDate: new Date().toISOString()
        };

        await this.saveUserData(uid, updatedData);
        return updatedData;
    }
};
