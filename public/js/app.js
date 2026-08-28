// public/js/app.js
/**
 * Main Single Page Application (SPA) Controller for Muscle Up — Fat Down
 */

const App = {
    user: null,
    userData: null,
    currentScreen: 'home',
    soundEnabled: true,
    audioCtx: null,

    // Active Workout State
    activeSession: null,
    sessionTimer: null,
    isPaused: false,

    // Fallback workout DB
    defaultWorkouts: {
        beginner: [
            { id: 'b1', name: 'Jumping Jacks', type: 'time', duration: 30, calories: 25, rest: 10, target: 'Full Body Cardio', instruction: 'Jump feet wide while raising hands overhead. Keep light on feet.' },
            { id: 'b2', name: 'Incline Push-ups', type: 'reps', duration: 35, calories: 30, rest: 15, target: 'Chest & Triceps', instruction: 'Hands on elevated surface. Lower chest and press up smoothly.' },
            { id: 'b3', name: 'Bodyweight Squats', type: 'reps', duration: 40, calories: 35, rest: 15, target: 'Quads & Glutes', instruction: 'Feet shoulder-width apart. Sit back down to parallel and stand tall.' },
            { id: 'b4', name: 'Knee Plank Hold', type: 'time', duration: 30, calories: 20, rest: 10, target: 'Core Abs', instruction: 'Forearms on floor, knees grounded, hold straight line.' },
            { id: 'b5', name: 'Glute Bridges', type: 'reps', duration: 30, calories: 25, rest: 10, target: 'Glutes & Lower Back', instruction: 'Lie on back with knees bent. Drive hips upward and squeeze.' },
            { id: 'b6', name: 'High Knee Taps', type: 'time', duration: 30, calories: 30, rest: 15, target: 'Fat Burning HIIT', instruction: 'March or jog in place bringing knees up toward chest level.' }
        ],
        intermediate: [
            { id: 'i1', name: 'Standard Push-ups', type: 'reps', duration: 40, calories: 45, rest: 15, target: 'Upper Chest & Triceps', instruction: 'Straight plank body. Lower chest 1 inch from floor and drive up.' },
            { id: 'i2', name: 'Jump Squats', type: 'reps', duration: 40, calories: 55, rest: 15, target: 'Explosive Legs & Glutes', instruction: 'Squat deep then explosively leap upwards, landing softly.' },
            { id: 'i3', name: 'Mountain Climbers', type: 'time', duration: 35, calories: 45, rest: 10, target: 'Core & High Burn', instruction: 'Plank position. Rapidly drive alternating knees toward chest.' },
            { id: 'i4', name: 'Tricep Chair Dips', type: 'reps', duration: 35, calories: 35, rest: 15, target: 'Triceps & Arms', instruction: 'Hands on chair edge. Lower hips by bending elbows to 90 degrees.' },
            { id: 'i5', name: 'Reverse Lunges', type: 'reps', duration: 40, calories: 45, rest: 15, target: 'Quads & Hamstrings', instruction: 'Step backward into 90-degree lunges, alternating legs.' },
            { id: 'i6', name: 'Full Forearm Plank', type: 'time', duration: 45, calories: 35, rest: 15, target: 'Isometric Core', instruction: 'Hold rigid hollow-body plank without sagging lower back.' }
        ],
        advanced: [
            { id: 'a1', name: 'Diamond Push-ups', type: 'reps', duration: 45, calories: 50, rest: 15, target: 'Triceps & Inner Chest', instruction: 'Form a diamond triangle with index fingers and thumbs under chest.' },
            { id: 'a2', name: 'Burpees with Push-up', type: 'reps', duration: 50, calories: 75, rest: 20, target: 'Maximum Fat Shred', instruction: 'Drop into pushup, hop feet forward, and leap overhead with explosive jump.' },
            { id: 'a3', name: 'Bulgarian Split Squats', type: 'reps', duration: 45, calories: 55, rest: 15, target: 'Single Leg Hypertrophy', instruction: 'Rear foot elevated on chair/couch. Lower front thigh.' },
            { id: 'a4', name: 'Pike Push-ups', type: 'reps', duration: 45, calories: 45, rest: 15, target: 'Shoulders & Upper Chest', instruction: 'Hips high in V-shape. Lower head towards ground between hands.' },
            { id: 'a5', name: 'Bicycle Crunches', type: 'time', duration: 45, calories: 40, rest: 10, target: 'Obliques & Lower Abs', instruction: 'Opposite elbow to opposite knee in continuous fluid cycling motion.' },
            { id: 'a6', name: 'Tuck Jumps', type: 'time', duration: 35, calories: 60, rest: 20, target: 'Plyometric Burn', instruction: 'Jump high pulling both knees into chest. Land softly on balls of feet.' }
        ],
        beast: [
            { id: 'x1', name: 'Explosive Clap Push-ups', type: 'reps', duration: 45, calories: 60, rest: 20, target: 'Chest Power', instruction: 'Push off floor with enough power to clap hands before landing softly.' },
            { id: 'x2', name: 'Pistol Squats', type: 'reps', duration: 50, calories: 60, rest: 20, target: 'Leg Strength', instruction: 'Single leg deep squat while extending opposite leg straight forward.' },
            { id: 'x3', name: 'Spiderman Push-ups', type: 'reps', duration: 45, calories: 55, rest: 15, target: 'Chest & Core', instruction: 'Bring knee to elbow at bottom of each push-up.' },
            { id: 'x4', name: 'High-Speed Mountain Climbers', type: 'time', duration: 45, calories: 65, rest: 15, target: 'Metabolic Max', instruction: 'Sprint knees into chest non-stop at highest safe tempo.' },
            { id: 'x5', name: 'Decline Push-ups', type: 'reps', duration: 45, calories: 50, rest: 15, target: 'Upper Chest Bulk', instruction: 'Feet elevated on chair/sofa, hands on floor. Lower chest.' },
            { id: 'x6', name: '1-Minute Iron Plank', type: 'time', duration: 60, calories: 45, rest: 20, target: 'Core Tenacity', instruction: 'Lock glutes, quads, and abs for 60 uninterrupted seconds.' }
        ]
    },

    async init() {
        this.bindEvents();
        await this.checkAuthState();
        setTimeout(() => this.handleSplashScreen(), 2000);
    },

    bindEvents() {
        // Bottom nav switching
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const screen = e.currentTarget.dataset.screen;
                this.navigateTo(screen);
            });
        });

        // Close Modal Handlers
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.onclick = () => {
                const modal = btn.closest('.modal');
                if (modal) modal.classList.remove('active');
            };
        });

        // Password visibility toggle
        const togglePass = document.querySelector('.toggle-password');
        if (togglePass) {
            togglePass.onclick = () => {
                const passInput = document.getElementById('auth-password');
                if (passInput) {
                    if (passInput.type === 'password') {
                        passInput.type = 'text';
                        togglePass.classList.replace('fa-eye', 'fa-eye-slash');
                    } else {
                        passInput.type = 'password';
                        togglePass.classList.replace('fa-eye-slash', 'fa-eye');
                    }
                }
            };
        }

        // Auth Tabs toggle
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.onclick = () => {
                document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const isReg = tab.dataset.tab === 'register';
                const regFields = document.getElementById('register-fields');
                if (regFields) {
                    if (isReg) regFields.classList.remove('hidden');
                    else regFields.classList.add('hidden');
                }
                const submitBtn = document.getElementById('auth-submit-btn');
                if (submitBtn) submitBtn.textContent = isReg ? 'Create Account' : 'Login';
            };
        });

        // Auth Form submit
        const authForm = document.getElementById('auth-form');
        if (authForm) {
            authForm.onsubmit = (e) => {
                e.preventDefault();
                this.handleAuthSubmit();
            };
        }
    },

    async checkAuthState() {
        // Firebase listener with fallback
        if (typeof firebase !== 'undefined' && firebase.auth) {
            try {
                firebase.auth().onAuthStateChanged(async (user) => {
                    this.user = user;
                    const uid = user ? user.uid : 'demo_user_101';
                    await this.loadUserData(uid);
                });
                return;
            } catch (e) {
                console.log('Firebase auth listener skipped, using local fallback');
            }
        }
        
        // Local fallback
        const localUser = LocalStore.getCurrentUser();
        this.user = localUser;
        await this.loadUserData(localUser ? localUser.uid : 'demo_user_101');
    },

    async loadUserData(uid) {
        this.userData = await window.FitnessDB.getUserData(uid);
        this.updateSidebarProfile();
        this.updateUI();
    },

    updateSidebarProfile() {
        if (!this.userData) return;
        const name = this.userData.fullName || 'Alex Thorne';
        const avatarEl = document.getElementById('sidebar-avatar');
        const nameEl = document.getElementById('sidebar-user-name');
        const levelEl = document.getElementById('sidebar-user-level');
        if (avatarEl) avatarEl.textContent = name.charAt(0).toUpperCase();
        if (nameEl) nameEl.textContent = name;
        if (levelEl) {
            const completed = (this.userData.completedDays || []).length;
            const levelName = completed >= 21 ? 'Beast Level' : completed >= 14 ? 'Advanced Level' : completed >= 7 ? 'Intermediate Level' : 'Beginner Level';
            levelEl.textContent = levelName;
        }
    },

    updateUI() {
        if (this.currentScreen && this.currentScreen !== 'splash' && this.currentScreen !== 'workout-player') {
            this.renderScreen(this.currentScreen);
        }
    },

    handleSplashScreen() {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.classList.remove('active');
        const main = document.getElementById('main-content');
        if (main) main.classList.remove('hidden');
        const nav = document.getElementById('bottom-nav');
        if (nav) nav.classList.remove('hidden');
        this.navigateTo('home');
    },

    navigateTo(screenId) {
        if (this.activeSession && screenId !== 'workout-player') {
            if (!confirm("A workout is in progress. Are you sure you want to leave?")) {
                return;
            }
            this.clearWorkoutSession();
        }

        this.currentScreen = screenId;
        this.renderScreen(screenId);

        // Update Nav UI (Both Sidebar & Bottom Nav)
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll(`[data-screen="${screenId}"]`).forEach(el => el.classList.add('active'));

        // Show/hide bottom nav and sidebar during active workout
        const nav = document.getElementById('bottom-nav');
        if (nav) {
            if (screenId === 'workout-player') nav.classList.add('hidden');
            else nav.classList.remove('hidden');
        }
    },

    renderScreen(id) {
        const container = document.getElementById('screen-container');
        if (!container) return;
        container.innerHTML = UI.getTemplate(id, this.userData);
        UI.initScreenScripts(id, this);
    },

    openAuthModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) modal.classList.add('active');
    },

    async handleAuthSubmit() {
        const activeTab = document.querySelector('.auth-tab.active')?.dataset.tab || 'login';
        const email = document.getElementById('auth-email')?.value;
        const password = document.getElementById('auth-password')?.value;
        const name = document.getElementById('auth-name')?.value || 'Athlete';
        const weight = parseFloat(document.getElementById('auth-weight')?.value) || 180.0;

        const uid = 'user_' + Math.random().toString(36).substr(2, 9);
        const newUser = {
            uid,
            email,
            fullName: activeTab === 'register' ? name : (this.userData?.fullName || 'Athlete'),
            initialWeight: weight,
            currentWeight: weight,
            goalWeight: weight - 15,
            streak: 1,
            workoutsCompleted: 0,
            totalCaloriesBurned: 0,
            completedDays: [],
            badges: ['first_sweat'],
            weightHistory: [{ date: new Date().toISOString().split('T')[0], weight }]
        };

        await window.FitnessDB.saveUserData(uid, newUser);
        LocalStore.setCurrentUser({ uid, email, displayName: newUser.fullName });
        this.user = { uid, email };
        this.userData = newUser;

        const modal = document.getElementById('auth-modal');
        if (modal) modal.classList.remove('active');

        this.updateUI();
        alert(`Welcome, ${newUser.fullName}! Ready to Muscle Up & Drop Fat!`);
    },

    // 28-Day Plan Day click
    handleDayClick(day, level, isRest) {
        if (isRest) {
            alert(`Day ${day} is an Active Recovery & Stretching Day! Do 10 minutes of light mobility and hydrate.`);
            return;
        }
        this.startWorkout(level, `Day ${day} Challenge`, day);
    },

    // Start a workout
    async startWorkout(level = 'beginner', title = 'Workout Session', dayNum = null) {
        // Play click tone
        this.playBeep(440, 'sine', 0.1);

        // Fetch workout list from server or fallback
        let exercises = this.defaultWorkouts[level] || this.defaultWorkouts.beginner;
        try {
            const res = await fetch(`/api/workouts/${level}`);
            if (res.ok) {
                const data = await res.json();
                if (data.workouts && data.workouts.length > 0) {
                    exercises = data.workouts;
                }
            }
        } catch (e) {
            console.log('Using local workout data');
        }

        this.activeSession = {
            title,
            level,
            day: dayNum,
            exercises,
            currentIndex: 0,
            timeLeft: exercises[0].duration || 30,
            isRestPeriod: false,
            totalBurned: 0
        };

        this.currentScreen = 'workout-player';
        const container = document.getElementById('screen-container');
        if (container) {
            container.innerHTML = UI.getWorkoutPlayerTemplate(title, exercises);
        }

        const nav = document.getElementById('bottom-nav');
        if (nav) nav.classList.add('hidden');

        this.isPaused = false;
        this.renderCurrentExercise();
        this.startExerciseTimer();
    },

    renderCurrentExercise() {
        if (!this.activeSession) return;
        const { exercises, currentIndex, isRestPeriod, timeLeft } = this.activeSession;
        const current = exercises[currentIndex];

        const titleEl = document.getElementById('player-exercise-title');
        const targetEl = document.getElementById('player-exercise-target');
        const svgBox = document.getElementById('exercise-svg-display');
        const stepEl = document.getElementById('player-step-count');
        const instructionEl = document.getElementById('player-instruction');
        const timeEl = document.getElementById('player-big-time');

        if (isRestPeriod) {
            if (titleEl) titleEl.textContent = 'Rest & Breathe';
            if (targetEl) targetEl.textContent = `Next: ${exercises[currentIndex + 1]?.name || 'Final Stretch'}`;
            if (svgBox) {
                svgBox.innerHTML = `
                    <div style="font-size: 3rem; color: var(--accent-green); animation: bounce 1s infinite alternate;">
                        <i class="fas fa-heartbeat"></i>
                    </div>
                `;
            }
            if (instructionEl) instructionEl.textContent = 'Take deep breaths. Shake out your muscles.';
        } else {
            if (titleEl) titleEl.textContent = current.name;
            if (targetEl) targetEl.textContent = current.target;
            if (svgBox) svgBox.innerHTML = UI.getExerciseSVG(current.name);
            if (instructionEl) instructionEl.textContent = current.instruction;
        }

        if (stepEl) stepEl.textContent = `Exercise ${currentIndex + 1} of ${exercises.length}`;
        if (timeEl) {
            const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
            const secs = String(timeLeft % 60).padStart(2, '0');
            timeEl.textContent = `${mins}:${secs}`;
        }

        this.updateProgressBar();
    },

    startExerciseTimer() {
        if (this.sessionTimer) clearInterval(this.sessionTimer);

        this.sessionTimer = setInterval(() => {
            if (this.isPaused || !this.activeSession) return;

            if (this.activeSession.timeLeft > 0) {
                this.activeSession.timeLeft--;
                
                // Sound countdown for final 3 seconds
                if (this.activeSession.timeLeft <= 3 && this.activeSession.timeLeft > 0) {
                    this.playBeep(600, 'sine', 0.12);
                } else if (this.activeSession.timeLeft === 0) {
                    this.playBeep(880, 'sine', 0.3);
                }

                const timeEl = document.getElementById('player-big-time');
                if (timeEl) {
                    const mins = String(Math.floor(this.activeSession.timeLeft / 60)).padStart(2, '0');
                    const secs = String(this.activeSession.timeLeft % 60).padStart(2, '0');
                    timeEl.textContent = `${mins}:${secs}`;
                }
                this.updateProgressBar();
            } else {
                // Time up
                this.handleExerciseComplete();
            }
        }, 1000);
    },

    updateProgressBar() {
        if (!this.activeSession) return;
        const { exercises, currentIndex, timeLeft, isRestPeriod } = this.activeSession;
        const totalEx = exercises.length;
        const current = exercises[currentIndex];
        const maxDuration = isRestPeriod ? (current.rest || 15) : (current.duration || 30);
        
        const fractionInCurrent = 1 - (timeLeft / maxDuration);
        const overallFraction = (currentIndex + fractionInCurrent) / totalEx;
        const pct = Math.min(100, Math.max(0, Math.round(overallFraction * 100)));

        const fill = document.getElementById('player-progress-fill');
        if (fill) fill.style.width = `${pct}%`;
    },

    handleExerciseComplete() {
        if (!this.activeSession) return;
        const { exercises, currentIndex, isRestPeriod } = this.activeSession;
        const current = exercises[currentIndex];

        if (!isRestPeriod && current.rest && currentIndex < exercises.length - 1) {
            // Enter rest period
            this.activeSession.isRestPeriod = true;
            this.activeSession.timeLeft = current.rest || 10;
            this.renderCurrentExercise();
        } else {
            // Move to next exercise or finish
            this.activeSession.isRestPeriod = false;
            this.activeSession.totalBurned += (current.calories || 25);

            if (currentIndex < exercises.length - 1) {
                this.activeSession.currentIndex++;
                this.activeSession.timeLeft = exercises[this.activeSession.currentIndex].duration || 30;
                this.renderCurrentExercise();
            } else {
                // Workout Completed!
                this.finishWorkout();
            }
        }
    },

    toggleWorkoutTimer() {
        this.isPaused = !this.isPaused;
        const icon = document.getElementById('play-pause-icon');
        if (icon) {
            icon.className = this.isPaused ? 'fas fa-play' : 'fas fa-pause';
        }
    },

    nextExercise() {
        if (!this.activeSession) return;
        if (this.activeSession.currentIndex < this.activeSession.exercises.length - 1) {
            this.activeSession.isRestPeriod = false;
            this.activeSession.currentIndex++;
            this.activeSession.timeLeft = this.activeSession.exercises[this.activeSession.currentIndex].duration || 30;
            this.renderCurrentExercise();
        } else {
            this.finishWorkout();
        }
    },

    prevExercise() {
        if (!this.activeSession) return;
        if (this.activeSession.currentIndex > 0) {
            this.activeSession.isRestPeriod = false;
            this.activeSession.currentIndex--;
            this.activeSession.timeLeft = this.activeSession.exercises[this.activeSession.currentIndex].duration || 30;
            this.renderCurrentExercise();
        }
    },

    confirmExitWorkout() {
        if (confirm("Are you sure you want to stop this workout?")) {
            this.clearWorkoutSession();
            this.navigateTo('home');
        }
    },

    clearWorkoutSession() {
        if (this.sessionTimer) clearInterval(this.sessionTimer);
        this.activeSession = null;
        this.isPaused = false;
    },

    async finishWorkout() {
        if (this.sessionTimer) clearInterval(this.sessionTimer);

        // Fanfare beeps
        this.playBeep(523.25, 'triangle', 0.15);
        setTimeout(() => this.playBeep(659.25, 'triangle', 0.15), 150);
        setTimeout(() => this.playBeep(783.99, 'triangle', 0.3), 300);

        const summary = {
            title: this.activeSession.title,
            calories: this.activeSession.totalBurned || 190,
            day: this.activeSession.day,
            streak: (this.userData?.streak || 0) + 1
        };

        // Show Celebration Modal
        const modalContainer = document.getElementById('auth-modal');
        if (modalContainer) {
            modalContainer.innerHTML = UI.getWorkoutCompleteTemplate(summary);
            modalContainer.classList.add('active');
        }
    },

    async finishWorkoutAndSave() {
        const uid = this.user?.uid || 'demo_user_101';
        const summary = {
            calories: this.activeSession?.totalBurned || 190,
            day: this.activeSession?.day
        };

        this.userData = await window.FitnessDB.recordCompletedWorkout(uid, summary);
        this.clearWorkoutSession();

        const modalContainer = document.getElementById('auth-modal');
        if (modalContainer) modalContainer.classList.remove('active');

        this.navigateTo('tracker');
    },

    openLogWeightModal() {
        const modalContainer = document.getElementById('auth-modal');
        if (!modalContainer) return;
        const cur = this.userData?.currentWeight || 180;
        const goal = this.userData?.goalWeight || 165;

        modalContainer.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="document.getElementById('auth-modal').classList.remove('active')">&times;</span>
                <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Log Weight Entry</h3>
                <p style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 16px;">Update your scale reading or change your target weight.</p>
                <form id="weight-log-form">
                    <label style="font-size: 0.75rem; color: var(--text-dim);">Current Scale Weight (lb)</label>
                    <input type="number" step="0.1" id="log-weight-input" value="${cur}" required>
                    
                    <label style="font-size: 0.75rem; color: var(--text-dim);">Target Goal Weight (lb)</label>
                    <input type="number" step="0.1" id="log-goal-input" value="${goal}" required>

                    <button type="submit" class="btn-primary" style="margin-top: 8px;">Save Weight</button>
                </form>
            </div>
        `;
        modalContainer.classList.add('active');

        document.getElementById('weight-log-form').onsubmit = async (e) => {
            e.preventDefault();
            const newWeight = parseFloat(document.getElementById('log-weight-input').value) || cur;
            const newGoal = parseFloat(document.getElementById('log-goal-input').value) || goal;
            
            const history = this.userData?.weightHistory || [];
            history.push({
                date: new Date().toISOString().split('T')[0],
                weight: newWeight
            });

            const uid = this.user?.uid || 'demo_user_101';
            await window.FitnessDB.saveUserData(uid, {
                currentWeight: newWeight,
                goalWeight: newGoal,
                weightHistory: history
            });

            this.userData.currentWeight = newWeight;
            this.userData.goalWeight = newGoal;
            this.userData.weightHistory = history;

            modalContainer.classList.remove('active');
            this.updateUI();
        };
    },

    resetDemoData() {
        if (confirm("Reset to sample demo data?")) {
            localStorage.removeItem('muscle_up_users_data');
            localStorage.removeItem('muscle_up_current_user');
            window.location.reload();
        }
    },

    playBeep(freq = 440, type = 'sine', duration = 0.15) {
        if (!this.soundEnabled) return;
        try {
            if (!this.audioCtx) {
                this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
            gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
        } catch (e) {
            // Audio context not allowed before user interaction
        }
    }
};

window.onload = () => App.init();
