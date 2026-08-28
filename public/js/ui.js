// public/js/ui.js
/**
 * UI Component & Screen Templates for Muscle Up — Fat Down (Immersive UI Theme)
 */

const UI = {
    // Dynamic Exercise SVG Illustrations
    getExerciseSVG(name) {
        const lower = (name || '').toLowerCase();
        if (lower.includes('push-up') || lower.includes('pushup') || lower.includes('spiderman') || lower.includes('decline')) {
            return `
                <svg viewBox="0 0 200 120" class="exercise-svg">
                    <defs>
                        <linearGradient id="gradPush" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#f23a53" />
                            <stop offset="100%" stop-color="#ffd60a" />
                        </linearGradient>
                    </defs>
                    <line x1="10" y1="105" x2="190" y2="105" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-dasharray="4 4" />
                    <circle cx="155" cy="45" r="12" fill="#ffd60a" />
                    <line x1="145" y1="52" x2="60" y2="85" stroke="url(#gradPush)" stroke-width="10" stroke-linecap="round" />
                    <line x1="60" y1="85" x2="25" y2="102" stroke="#f23a53" stroke-width="9" stroke-linecap="round" />
                    <polyline points="135,56 142,80 148,104" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
            `;
        } else if (lower.includes('squat') || lower.includes('lunge') || lower.includes('pistol')) {
            return `
                <svg viewBox="0 0 200 130" class="exercise-svg">
                    <defs>
                        <linearGradient id="gradSquat" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#ffd60a" />
                            <stop offset="100%" stop-color="#f23a53" />
                        </linearGradient>
                    </defs>
                    <line x1="20" y1="120" x2="180" y2="120" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-dasharray="4 4" />
                    <circle cx="95" cy="25" r="12" fill="#ffd60a" />
                    <line x1="95" y1="37" x2="88" y2="72" stroke="url(#gradSquat)" stroke-width="10" stroke-linecap="round" />
                    <line x1="88" y1="72" x2="125" y2="76" stroke="#f23a53" stroke-width="9" stroke-linecap="round" />
                    <line x1="125" y1="76" x2="118" y2="118" stroke="#f23a53" stroke-width="9" stroke-linecap="round" />
                    <line x1="93" y1="46" x2="145" y2="48" stroke="#ffffff" stroke-width="7" stroke-linecap="round" />
                </svg>
            `;
        } else if (lower.includes('plank') || lower.includes('bridge') || lower.includes('hollow')) {
            return `
                <svg viewBox="0 0 200 120" class="exercise-svg">
                    <defs>
                        <linearGradient id="gradPlank" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#25d366" />
                            <stop offset="100%" stop-color="#3a86ff" />
                        </linearGradient>
                    </defs>
                    <line x1="10" y1="105" x2="190" y2="105" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-dasharray="4 4" />
                    <circle cx="160" cy="55" r="11" fill="#ffd60a" />
                    <line x1="150" y1="62" x2="35" y2="92" stroke="url(#gradPlank)" stroke-width="10" stroke-linecap="round" />
                    <line x1="140" y1="65" x2="145" y2="104" stroke="#ffffff" stroke-width="7" stroke-linecap="round" />
                    <line x1="145" y1="104" x2="165" y2="104" stroke="#ffffff" stroke-width="7" stroke-linecap="round" />
                </svg>
            `;
        } else if (lower.includes('jack') || lower.includes('jump') || lower.includes('tuck')) {
            return `
                <svg viewBox="0 0 200 130" class="exercise-svg">
                    <defs>
                        <linearGradient id="gradJack" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#f23a53" />
                            <stop offset="100%" stop-color="#ff9e00" />
                        </linearGradient>
                    </defs>
                    <line x1="20" y1="122" x2="180" y2="122" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-dasharray="4 4" />
                    <circle cx="100" cy="22" r="11" fill="#ffd60a" />
                    <line x1="100" y1="33" x2="100" y2="75" stroke="url(#gradJack)" stroke-width="9" stroke-linecap="round" />
                    <line x1="100" y1="42" x2="60" y2="15" stroke="#ffffff" stroke-width="7" stroke-linecap="round" />
                    <line x1="100" y1="42" x2="140" y2="15" stroke="#ffffff" stroke-width="7" stroke-linecap="round" />
                    <line x1="100" y1="75" x2="65" y2="118" stroke="#f23a53" stroke-width="8" stroke-linecap="round" />
                    <line x1="100" y1="75" x2="135" y2="118" stroke="#f23a53" stroke-width="8" stroke-linecap="round" />
                </svg>
            `;
        } else {
            return `
                <svg viewBox="0 0 200 130" class="exercise-svg">
                    <defs>
                        <linearGradient id="gradGen" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#3a86ff" />
                            <stop offset="100%" stop-color="#f23a53" />
                        </linearGradient>
                    </defs>
                    <line x1="20" y1="120" x2="180" y2="120" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-dasharray="4 4" />
                    <circle cx="95" cy="22" r="11" fill="#ffd60a" />
                    <line x1="95" y1="33" x2="95" y2="70" stroke="url(#gradGen)" stroke-width="9" stroke-linecap="round" />
                    <polyline points="95,44 125,52 140,40" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none" />
                    <polyline points="95,70 120,62 120,95" stroke="#f23a53" stroke-width="8" stroke-linecap="round" fill="none" />
                    <line x1="95" y1="70" x2="80" y2="118" stroke="#f23a53" stroke-width="8" stroke-linecap="round" />
                </svg>
            `;
        }
    },

    getTemplate(id, data) {
        const user = data || {
            fullName: 'Alex Thorne',
            currentWeight: 184.2,
            initialWeight: 192.6,
            goalWeight: 175.0,
            streak: 12,
            workoutsCompleted: 14,
            totalCaloriesBurned: 3360,
            completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        };
        const userName = user.fullName || 'Alex Thorne';
        const curW = parseFloat(user.currentWeight || 184.2).toFixed(1);
        const initW = parseFloat(user.initialWeight || 192.6).toFixed(1);
        const goalW = parseFloat(user.goalWeight || 175.0).toFixed(1);
        const weightLost = Math.max(0, (initW - curW)).toFixed(1);

        switch(id) {
            case 'home':
                const streakCount = user.streak || 12;
                const streakModulo = streakCount % 5;
                const filledSegments = streakModulo === 0 ? 5 : streakModulo;

                return `
                    <div class="screen active" id="screen-home">
                        <header class="header-top">
                            <div>
                                <h2 class="greeting-title">Welcome back, ${userName} 👋</h2>
                                <p class="greeting-sub">Let's shred fat and build lean muscle today.</p>
                            </div>
                            <div class="avatar-badge" onclick="App.navigateTo('profile')">
                                ${userName.charAt(0).toUpperCase()}
                            </div>
                        </header>

                        <!-- Hero Card (Immersive UI Design) -->
                        <div class="hero-card">
                            <div class="hero-overlay">UP</div>
                            <div class="badge">Daily Burn</div>
                            <h1 class="hero-title">Full Body Blast</h1>
                            <p class="hero-desc">15 Minutes • No Equipment • 240 Calories</p>
                            <button class="btn-primary" style="width: fit-content;" onclick="App.startWorkout('beginner', 'Full Body Blast')">
                                <i class="fas fa-play" style="margin-right: 4px;"></i> Start Workout Now
                            </button>
                        </div>

                        <!-- 3-Column Immersive Stat Grid -->
                        <div class="grid-3-stat">
                            <div class="glass-card stat-card">
                                <div class="stat-label">Current Weight</div>
                                <div class="stat-value">${curW} <span class="stat-unit">LB</span></div>
                                <div class="stat-diff">↓ 0.2lb from last session</div>
                            </div>
                            <div class="glass-card stat-card">
                                <div class="stat-label">Training Streak</div>
                                <div class="stat-value">${streakCount} <span class="stat-unit">DAYS</span></div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${Math.min(100, Math.max(15, (streakCount / 28) * 100))}%;"></div>
                                </div>
                            </div>
                            <div class="glass-card stat-card">
                                <div class="stat-label">Total Lost</div>
                                <div class="stat-value">-${weightLost} <span class="stat-unit">LB</span></div>
                                <div style="font-size: 12px; color: var(--text-dim);">Target: ${goalW} LB</div>
                            </div>
                        </div>

                        <!-- Dashboard Split: Difficulty Levels & Next Achievement -->
                        <div class="dashboard-split">
                            <div class="glass-card">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                                    <h3 style="font-size: 18px; font-weight: 700;">Difficulty Levels</h3>
                                    <span style="font-size: 12px; color: var(--text-dim); cursor: pointer;" onclick="App.navigateTo('levels')">View All →</span>
                                </div>
                                <div class="levels-grid">
                                    <div class="level-item" onclick="App.startWorkout('beginner', 'Absolute Beginner Foundation')">
                                        <div>
                                            <div style="font-weight: 700; font-size: 14px;">Absolute Beginner</div>
                                            <div style="font-size: 12px; color: var(--text-dim); margin-top: 2px;">Basic movements & stretching</div>
                                        </div>
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" style="color: var(--text-dim);"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                                    </div>
                                    <div class="level-item active-level" onclick="App.startWorkout('intermediate', 'Weight Loss Focus')">
                                        <div>
                                            <div style="font-weight: 700; font-size: 14px;">Weight Loss Focus</div>
                                            <div style="font-size: 12px; color: var(--text-dim); margin-top: 2px;">High-intensity interval training</div>
                                        </div>
                                        <span class="level-badge">ACTIVE</span>
                                    </div>
                                    <div class="level-item" onclick="App.startWorkout('advanced', 'Muscle Builder')">
                                        <div>
                                            <div style="font-weight: 700; font-size: 14px;">Muscle Builder</div>
                                            <div style="font-size: 12px; color: var(--text-dim); margin-top: 2px;">Hypertrophy & bodyweight strength</div>
                                        </div>
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" style="color: var(--text-dim);"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                                    </div>
                                    <div class="level-item" onclick="App.startWorkout('beast', 'Pro Athlete Beast Mode')">
                                        <div>
                                            <div style="font-weight: 700; font-size: 14px;">Pro Athlete</div>
                                            <div style="font-size: 12px; color: var(--text-dim); margin-top: 2px;">Advanced endurance & power</div>
                                        </div>
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" style="color: var(--text-dim);"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <!-- Next Achievement Showcase Card -->
                            <div class="glass-card">
                                <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 16px;">Next Achievement</h3>
                                <div style="text-align: center; padding: 14px 0;">
                                    <div style="font-size: 44px; margin-bottom: 8px; filter: drop-shadow(0 4px 12px rgba(255, 214, 10, 0.4));">🔥</div>
                                    <div style="font-weight: 800; font-size: 17px;">14-Day Inferno</div>
                                    <div style="font-size: 12px; color: var(--text-dim); margin-top: 4px; line-height: 1.4;">
                                        Complete ${Math.max(1, 14 - streakCount)} more workout${Math.max(1, 14 - streakCount) === 1 ? '' : 's'} to unlock the master badge.
                                    </div>
                                </div>
                                <div class="streak-segments">
                                    <div class="streak-segment ${filledSegments >= 1 ? 'filled' : ''}"></div>
                                    <div class="streak-segment ${filledSegments >= 2 ? 'filled' : ''}"></div>
                                    <div class="streak-segment ${filledSegments >= 3 ? 'filled' : ''}"></div>
                                    <div class="streak-segment ${filledSegments >= 4 ? 'filled' : ''}"></div>
                                    <div class="streak-segment ${filledSegments >= 5 ? 'filled' : ''}"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Targeted Muscle Splits -->
                        <div style="margin-top: 24px; margin-bottom: 14px;">
                            <h3 style="font-size: 18px; font-weight: 700;">Targeted Muscle Splits</h3>
                        </div>

                        <div class="workout-item-card" onclick="App.startWorkout('beginner', 'Chest & Triceps Ignite')">
                            <div class="workout-left">
                                <div class="workout-icon"><i class="fas fa-dumbbell"></i></div>
                                <div class="workout-info">
                                    <h5>Chest & Triceps Ignite</h5>
                                    <p>6 Exercises • 15 Mins • 180 kcal</p>
                                </div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-muted);"></i>
                        </div>

                        <div class="workout-item-card" onclick="App.startWorkout('intermediate', 'Core & Six-Pack Shred')">
                            <div class="workout-left">
                                <div class="workout-icon" style="background: rgba(255, 214, 10, 0.15); color: var(--accent-yellow);"><i class="fas fa-fire"></i></div>
                                <div class="workout-info">
                                    <h5>Core & Six-Pack Shred</h5>
                                    <p>6 Exercises • 18 Mins • 210 kcal</p>
                                </div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-muted);"></i>
                        </div>

                        <div class="workout-item-card" onclick="App.startWorkout('advanced', 'Legs & Glutes Hypertrophy')">
                            <div class="workout-left">
                                <div class="workout-icon" style="background: rgba(37, 211, 102, 0.15); color: var(--accent-green);"><i class="fas fa-bolt"></i></div>
                                <div class="workout-info">
                                    <h5>Legs & Glutes Hypertrophy</h5>
                                    <p>7 Exercises • 25 Mins • 290 kcal</p>
                                </div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: var(--text-muted);"></i>
                        </div>
                    </div>
                `;

            case 'levels':
                return `
                    <div class="screen active" id="screen-levels">
                        <header style="margin-bottom: 24px;">
                            <h2 style="font-size: 1.6rem; font-weight: 800;">Difficulty Levels</h2>
                            <p style="font-size: 0.9rem; color: var(--text-dim);">Select your intensity to sculpt lean muscle & incinerate fat.</p>
                        </header>

                        <!-- Beginner -->
                        <div class="card card-clickable" onclick="App.startWorkout('beginner', 'Beginner Foundation')">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                                <span style="background: rgba(37, 211, 102, 0.2); color: var(--accent-green); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; letter-spacing: 0.5px;">
                                    TIER 1 • BEGINNER
                                </span>
                                <span style="font-size: 0.85rem; color: var(--text-dim);"><i class="far fa-clock"></i> 10-15 Mins</span>
                            </div>
                            <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 6px;">Foundation & Fat Burn</h4>
                            <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 16px; line-height: 1.5;">Perfect for getting started. Jumping Jacks, Incline Push-ups, Squats, Glute Bridges.</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--glass-border); padding-top: 14px;">
                                <span style="font-size: 0.85rem; color: var(--accent-yellow); font-weight: 700;">🔥 ~160 kcal burn</span>
                                <button class="btn-primary" style="width: auto; padding: 8px 20px; font-size: 0.85rem;">Start Workout</button>
                            </div>
                        </div>

                        <!-- Intermediate -->
                        <div class="card card-clickable" onclick="App.startWorkout('intermediate', 'Intermediate Power')">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                                <span style="background: rgba(255, 214, 10, 0.2); color: var(--accent-yellow); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; letter-spacing: 0.5px;">
                                    TIER 2 • INTERMEDIATE
                                </span>
                                <span style="font-size: 0.85rem; color: var(--text-dim);"><i class="far fa-clock"></i> 20-25 Mins</span>
                            </div>
                            <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 6px;">Muscle Shred & Stamina</h4>
                            <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 16px; line-height: 1.5;">Standard Push-ups, Jump Squats, Mountain Climbers, Chair Dips, Lunges.</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--glass-border); padding-top: 14px;">
                                <span style="font-size: 0.85rem; color: var(--accent-yellow); font-weight: 700;">🔥 ~240 kcal burn</span>
                                <button class="btn-primary" style="width: auto; padding: 8px 20px; font-size: 0.85rem;">Start Workout</button>
                            </div>
                        </div>

                        <!-- Advanced -->
                        <div class="card card-clickable" onclick="App.startWorkout('advanced', 'Advanced Athletic')">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                                <span style="background: rgba(242, 58, 83, 0.2); color: var(--accent-red); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; letter-spacing: 0.5px;">
                                    TIER 3 • ADVANCED
                                </span>
                                <span style="font-size: 0.85rem; color: var(--text-dim);"><i class="far fa-clock"></i> 25-35 Mins</span>
                            </div>
                            <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 6px;">Hypertrophy & Tabata Torch</h4>
                            <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 16px; line-height: 1.5;">Diamond Push-ups, Burpees, Bulgarian Split Squats, Pike Push-ups, Tuck Jumps.</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--glass-border); padding-top: 14px;">
                                <span style="font-size: 0.85rem; color: var(--accent-yellow); font-weight: 700;">🔥 ~320 kcal burn</span>
                                <button class="btn-primary" style="width: auto; padding: 8px 20px; font-size: 0.85rem;">Start Workout</button>
                            </div>
                        </div>

                        <!-- Beast Mode -->
                        <div class="card card-clickable" onclick="App.startWorkout('beast', 'Beast Mode Inferno')">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                                <span style="background: rgba(114, 9, 183, 0.25); color: #d68cff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; letter-spacing: 0.5px;">
                                    TIER 4 • BEAST MODE
                                </span>
                                <span style="font-size: 0.85rem; color: var(--text-dim);"><i class="far fa-clock"></i> 35-45 Mins</span>
                            </div>
                            <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 6px;">Ultimate Calisthenic Power</h4>
                            <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 16px; line-height: 1.5;">Clap Push-ups, Pistol Squats, Spiderman Push-ups, 60s Iron Plank.</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--glass-border); padding-top: 14px;">
                                <span style="font-size: 0.85rem; color: var(--accent-yellow); font-weight: 700;">🔥 ~420 kcal burn</span>
                                <button class="btn-red" style="width: auto; padding: 8px 20px; font-size: 0.85rem;">Start Workout</button>
                            </div>
                        </div>
                    </div>
                `;

            case 'plan':
                const completed = user.completedDays || [];
                const planPercent = Math.round((completed.length / 28) * 100);

                let calendarHtml = '';
                const weeks = [
                    { name: 'Week 1 • Activation & Base', start: 1, end: 7, level: 'beginner' },
                    { name: 'Week 2 • Conditioning & Burn', start: 8, end: 14, level: 'intermediate' },
                    { name: 'Week 3 • Hypertrophy & Split', start: 15, end: 21, level: 'advanced' },
                    { name: 'Week 4 • Final Sculpt & Shred', start: 22, end: 28, level: 'beast' }
                ];

                weeks.forEach(w => {
                    calendarHtml += `
                        <div class="plan-week-header">
                            <span>${w.name}</span>
                        </div>
                        <div class="plan-grid">
                    `;
                    for (let d = w.start; d <= w.end; d++) {
                        const isDone = completed.includes(d);
                        const isRest = d % 7 === 0;
                        const isCurrent = !isDone && (completed.length + 1 === d);
                        const cellClass = isDone ? 'completed' : isCurrent ? 'current' : isRest ? 'rest-day' : '';
                        
                        calendarHtml += `
                            <div class="day-cell ${cellClass}" onclick="App.handleDayClick(${d}, '${w.level}', ${isRest})">
                                <span class="day-num">D${d}</span>
                                <span class="day-status">${isRest ? 'Rest' : isDone ? 'Done' : 'Go'}</span>
                            </div>
                        `;
                    }
                    calendarHtml += `</div>`;
                });

                return `
                    <div class="screen active" id="screen-plan">
                        <header style="margin-bottom: 24px;">
                            <h2 style="font-size: 1.6rem; font-weight: 800;">28-Day Challenge</h2>
                            <p style="font-size: 0.9rem; color: var(--text-dim);">Build full-body muscle & drop 5.6+ lbs at home.</p>
                        </header>

                        <!-- Progress Summary -->
                        <div class="card" style="padding: 24px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.95rem;">
                                <span style="font-weight: 700;">Challenge Completion</span>
                                <span style="color: var(--accent-yellow); font-weight: 800;">${completed.length}/28 Days (${planPercent}%)</span>
                            </div>
                            <div class="player-progress-bar-wrap" style="margin-bottom: 12px; height: 10px;">
                                <div class="player-progress-bar" style="width: ${planPercent}%;"></div>
                            </div>
                            <div style="font-size: 0.8rem; color: var(--text-dim); display: flex; justify-content: space-between;">
                                <span>Estimated Loss: -${(completed.length * 0.2).toFixed(1)} lb</span>
                                <span>Target: 28 Workouts</span>
                            </div>
                        </div>

                        ${calendarHtml}

                        <div class="card" style="margin-top: 20px; text-align: center; padding: 26px;">
                            <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">Ready for Today's Workout?</h4>
                            <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 16px;">Consistency is the secret to building muscle while shedding fat.</p>
                            <button class="btn-primary" onclick="App.startWorkout('beginner', 'Day ' + (${completed.length + 1}) + ' Workout', ${completed.length + 1})">
                                <i class="fas fa-play" style="margin-right: 6px;"></i> Start Day ${Math.min(28, completed.length + 1)}
                            </button>
                        </div>
                    </div>
                `;

            case 'tracker':
                const targetDiff = Math.max(0.1, initW - goalW);
                const progressFraction = Math.min(1, Math.max(0, (initW - curW) / targetDiff));
                const progressPct = Math.round(progressFraction * 100);

                // SVG Circular circumference for r=45 -> 2 * PI * 45 = 282.74
                const circumference = 282.74;
                const strokeDashoffset = circumference - (progressFraction * circumference);

                return `
                    <div class="screen active" id="screen-tracker">
                        <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                            <div>
                                <h2 style="font-size: 1.6rem; font-weight: 800;">Analytics & Tracker</h2>
                                <p style="font-size: 0.9rem; color: var(--text-dim);">Real-time weight & calorie progression.</p>
                            </div>
                            <button class="btn-outline" onclick="App.openLogWeightModal()" style="font-size: 0.8rem; padding: 8px 16px;">
                                <i class="fas fa-plus" style="margin-right: 4px;"></i> Log Scale
                            </button>
                        </header>

                        <!-- Main Weight & SVG Progress Ring Card -->
                        <div class="card tracker-main">
                            <div>
                                <span class="stat-label">Current Weight</span>
                                <h1 class="accent-text">${curW} <span style="font-size: 1.1rem; color: #fff; font-weight: 500;">LB</span></h1>
                                <div class="accent-sub">
                                    <i class="fas fa-arrow-down"></i> -${weightLost} lb total lost
                                </div>
                                <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 6px;">
                                    Target Goal: ${goalW} LB
                                </div>
                            </div>
                            <div class="progress-ring-container">
                                <svg class="progress-ring" width="120" height="120">
                                    <circle class="progress-ring-circle-bg" stroke-width="8" fill="transparent" r="45" cx="60" cy="60" />
                                    <circle class="progress-ring-circle" stroke-width="8" stroke-dasharray="${circumference}" stroke-dashoffset="${strokeDashoffset}" fill="transparent" r="45" cx="60" cy="60" />
                                </svg>
                                <div class="progress-ring-text">
                                    <span class="percent">${progressPct}%</span>
                                    <span class="subtext">To Goal</span>
                                </div>
                            </div>
                        </div>

                        <!-- 3-Col Metric Grid -->
                        <div class="grid-3">
                            <div class="card" style="padding: 16px 10px; text-align: center; margin-bottom: 0;">
                                <div class="stat-label" style="font-size: 0.7rem;">Streak</div>
                                <div style="font-size: 1.3rem; font-weight: 800; color: #ff9e00;">🔥 ${user.streak || 0}d</div>
                            </div>
                            <div class="card" style="padding: 16px 10px; text-align: center; margin-bottom: 0;">
                                <div class="stat-label" style="font-size: 0.7rem;">Workouts</div>
                                <div style="font-size: 1.3rem; font-weight: 800; color: var(--accent-red);">${user.workoutsCompleted || 0}</div>
                            </div>
                            <div class="card" style="padding: 16px 10px; text-align: center; margin-bottom: 0;">
                                <div class="stat-label" style="font-size: 0.7rem;">Calories</div>
                                <div style="font-size: 1.3rem; font-weight: 800; color: var(--accent-yellow);">${user.totalCaloriesBurned || 0}</div>
                            </div>
                        </div>

                        <!-- Dynamic Weight History Chart / Timeline -->
                        <div class="card" style="margin-top: 20px;">
                            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                                <span>Recent Weight Log</span>
                                <span style="font-size: 0.8rem; color: var(--accent-green);">-0.2 lb / workout</span>
                            </h4>
                            <div id="weight-history-list">
                                ${(user.weightHistory || []).slice(-5).reverse().map(h => `
                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--glass-border); font-size: 0.9rem;">
                                        <span style="color: var(--text-dim);"><i class="far fa-calendar-alt" style="margin-right: 8px;"></i> ${h.date}</span>
                                        <span style="font-weight: 800; color: #fff;">${h.weight} lb</span>
                                    </div>
                                `).join('') || '<p style="font-size: 0.85rem; color: var(--text-dim); text-align: center; padding: 10px 0;">Complete workouts to log weight drops!</p>'}
                            </div>
                        </div>

                        <!-- Metabolism & Calorie Projection -->
                        <div class="card">
                            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 10px;">Metabolic Burn Projection</h4>
                            <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 14px; line-height: 1.5;">
                                Regular resistance sessions preserve muscle mass while targeting visceral fat stores.
                            </p>
                            <div style="display: flex; justify-content: space-between; background: rgba(0,0,0,0.3); padding: 12px 18px; border-radius: 14px; font-size: 0.9rem;">
                                <span>Session Energy Burn</span>
                                <span style="font-weight: 800; color: var(--accent-yellow);">~240 kcal / session</span>
                            </div>
                        </div>
                    </div>
                `;

            case 'profile':
                const badges = user.badges || ['first_sweat', 'streak_3'];
                return `
                    <div class="screen active" id="screen-profile">
                        <header style="margin-bottom: 24px; text-align: center;">
                            <div class="avatar" style="width: 76px; height: 76px; font-size: 2rem; margin: 0 auto 14px auto;">
                                ${userName.charAt(0).toUpperCase()}
                            </div>
                            <h2 style="font-size: 1.5rem; font-weight: 800;">${userName}</h2>
                            <p style="font-size: 0.85rem; color: var(--text-dim);">${user.email || 'alex.thorne@muscleup.fit'}</p>
                        </header>

                        <!-- Goal Settings Card -->
                        <div class="card">
                            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 16px;">Bodyweight Targets</h4>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.9rem;">
                                <span style="color: var(--text-dim);">Initial Weight:</span>
                                <span style="font-weight: 700;">${user.initialWeight || 192.6} lb</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.9rem;">
                                <span style="color: var(--text-dim);">Current Weight:</span>
                                <span style="font-weight: 800; color: var(--accent-yellow);">${curW} lb</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
                                <span style="color: var(--text-dim);">Goal Target:</span>
                                <span style="font-weight: 800; color: var(--accent-green);">${goalW} lb</span>
                            </div>
                        </div>

                        <!-- Achievements Showcase -->
                        <div class="card">
                            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 16px;">Trophies & Badges</h4>
                            <div class="badges-container">
                                <div class="badge-item ${badges.includes('first_sweat') ? 'unlocked' : ''}">
                                    <i class="fas fa-medal"></i>
                                    <span>First Sweat</span>
                                </div>
                                <div class="badge-item ${badges.includes('streak_3') ? 'unlocked' : ''}">
                                    <i class="fas fa-fire"></i>
                                    <span>3-Day Run</span>
                                </div>
                                <div class="badge-item ${badges.includes('fat_destroyer') ? 'unlocked' : ''}">
                                    <i class="fas fa-bolt"></i>
                                    <span>Fat Shred</span>
                                </div>
                                <div class="badge-item ${badges.includes('iron_will') ? 'unlocked' : ''}">
                                    <i class="fas fa-crown"></i>
                                    <span>Iron Will</span>
                                </div>
                            </div>
                        </div>

                        <!-- App Settings & Controls -->
                        <div class="card">
                            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 16px;">Preferences</h4>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--glass-border);">
                                <span style="font-size: 0.9rem;">Workout Audio & Beep Synthesizer</span>
                                <input type="checkbox" id="pref-sound" checked style="width: 20px; height: 20px; margin-bottom: 0; cursor: pointer; accent-color: var(--accent-red);">
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
                                <span style="font-size: 0.9rem;">Account Authentication</span>
                                <button class="btn-outline" onclick="App.openAuthModal()" style="font-size: 0.8rem; padding: 6px 14px;">
                                    ${App.user ? 'Switch Account' : 'Login / Register'}
                                </button>
                            </div>
                        </div>

                        <!-- Reset & Demo actions -->
                        <div style="text-align: center; margin-top: 16px;">
                            <button onclick="App.resetDemoData()" style="background: none; border: none; color: var(--text-dim); font-size: 0.8rem; cursor: pointer; text-decoration: underline;">
                                Reset to Default Sample Data
                            </button>
                            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 12px;">
                                Muscle Up — Fat Down • Immersive UI Edition • developed by Ubaidjutt
                            </p>
                        </div>
                    </div>
                `;

            default:
                return `<div class="screen active"><p>Screen not found</p></div>`;
        }
    },

    // Render active workout player interface
    getWorkoutPlayerTemplate(workoutTitle, exerciseList) {
        return `
            <div class="screen active" id="screen-player" style="padding-bottom: 30px;">
                <div class="player-header">
                    <button class="player-close" onclick="App.confirmExitWorkout()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div style="text-align: center;">
                        <h4 style="font-size: 1.05rem; font-weight: 800;">${workoutTitle}</h4>
                        <span id="player-step-count" style="font-size: 0.8rem; color: var(--text-dim);">Exercise 1 of ${exerciseList.length}</span>
                    </div>
                    <div style="width: 40px;"></div>
                </div>

                <!-- Animated SVG Workout Visualizer Container -->
                <div class="player-visual-container">
                    <div id="exercise-svg-display" class="exercise-svg-box">
                        <!-- Dynamic SVG injected here -->
                    </div>
                    <h3 id="player-exercise-title" class="player-exercise-name">Jumping Jacks</h3>
                    <span id="player-exercise-target" class="player-exercise-target">Full Body Cardio</span>
                </div>

                <!-- Progress Bar -->
                <div class="player-progress-bar-wrap">
                    <div id="player-progress-fill" class="player-progress-bar" style="width: 0%;"></div>
                </div>

                <!-- Big Dynamic Countdown -->
                <div class="player-timer-box">
                    <div id="player-big-time" class="big-countdown">00:30</div>
                    <p id="player-instruction" style="font-size: 0.85rem; color: var(--text-dim); min-height: 40px; padding: 0 16px; line-height: 1.4;">
                        Keep light on your feet and breathe rhythmically.
                    </p>
                </div>

                <!-- Controls -->
                <div class="player-controls">
                    <button class="player-btn-circle" onclick="App.prevExercise()" title="Previous Exercise">
                        <i class="fas fa-backward"></i>
                    </button>
                    <button id="player-play-btn" class="player-btn-circle main-play" onclick="App.toggleWorkoutTimer()" title="Pause/Play">
                        <i class="fas fa-pause" id="play-pause-icon"></i>
                    </button>
                    <button class="player-btn-circle" onclick="App.nextExercise()" title="Next Exercise">
                        <i class="fas fa-forward"></i>
                    </button>
                </div>
            </div>
        `;
    },

    // Workout Complete Dialog
    getWorkoutCompleteTemplate(summary) {
        return `
            <div class="modal-content celebrate-card">
                <div class="celebrate-trophy">🏆</div>
                <h3 style="font-size: 1.6rem; font-weight: 900; margin-bottom: 6px; letter-spacing: -0.5px;">WORKOUT CRUSHED!</h3>
                <p style="font-size: 0.9rem; color: var(--text-dim); margin-bottom: 24px;">You are one step closer to your goal physique!</p>
                
                <div style="background: rgba(255,255,255,0.06); border-radius: 18px; padding: 18px; margin-bottom: 24px; border: 1px solid var(--glass-border);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem;">
                        <span>Weight Drop:</span>
                        <span style="color: var(--accent-green); font-weight: 800;">-0.2 lb</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem;">
                        <span>Calories Burned:</span>
                        <span style="color: var(--accent-yellow); font-weight: 800;">+${summary.calories || 180} kcal</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.95rem;">
                        <span>Current Streak:</span>
                        <span style="color: #ff9e00; font-weight: 800;">🔥 ${summary.streak} Days</span>
                    </div>
                </div>

                <button class="btn-primary" style="width: 100%;" onclick="App.finishWorkoutAndSave()">
                    Save & View Progress
                </button>
            </div>
        `;
    },

    initScreenScripts(id, app) {
        if (id === 'profile') {
            const soundBox = document.getElementById('pref-sound');
            if (soundBox) {
                soundBox.checked = app.soundEnabled !== false;
                soundBox.onchange = (e) => {
                    app.soundEnabled = e.target.checked;
                };
            }
        }
    }
};
