# Muscle Up — Fat Down

An interactive, high-performance home workout & fat loss web application built with responsive glassmorphism UI, real-time audio workout timer, 28-day challenge calendar, difficulty levels, and weight tracking gamification (-0.2 lb drop per workout).

---

## 📂 Project Structure

```text
/muscle-up-fat-down
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── firebase-config.js
│   │   └── ui.js
│   └── index.html
├── routes/
│   └── api.js
├── .env
├── server.js
├── server.ts
├── package.json
└── README.md
```

---

## 🚀 Key Features

- **App Shell Architecture**: Mobile-style glassmorphism viewport centered on desktop, fully responsive on mobile screens.
- **Dynamic Workout Player**:
  - Countdown timer with 3-second audio countdown beeps (Web Audio API).
  - Animated SVG exercise figures illustrating push-ups, squats, planks, jumping jacks, and high knees.
  - Interactive controls: Pause/Resume, Skip, Previous, Rest Period interval.
- **28-Day Challenge Calendar**:
  - 4 Progressive Weeks (Activation, Conditioning, Hypertrophy, Final Shred).
  - Dynamic completion tracking and active recovery rest days.
- **Difficulty Tiers**:
  - **Tier 1 — Beginner** (10-15 Mins, 160 kcal)
  - **Tier 2 — Intermediate** (20-25 Mins, 240 kcal)
  - **Tier 3 — Advanced** (25-35 Mins, 320 kcal)
  - **Tier 4 — Beast Mode** (35-45 Mins, 420 kcal)
- **Weight Loss & Streak Tracker**:
  - SVG Circular Progress Ring tracking journey to goal weight.
  - Real-time weight drop calculation (-0.2 lb per completed workout).
  - Log custom scale readings and track historical weight trends.
  - Streak tracking (🔥 X Days) and achievement trophies.
- **Express Backend API**:
  - `/api/workouts/:level` - Workouts by tier.
  - `/api/plan` - 28-Day challenge details.
  - `/api/calculate-progress` - Weight loss and burn projection.
  - `/api/health` - Server health check.

---

## 🛠️ How to Run

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
2. **Open Browser**:
   Navigate to `http://localhost:3000`.

---
developed by **Ubaidjutt**
