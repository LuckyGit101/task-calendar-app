# Task Calendar App

A modern, gamified productivity tool to manage daily and long-term tasks, track points, and achieve your goals.

---

## 🚀 Tech Stack
- **Frontend:** Vite + React + Tailwind CSS
- **Backend:** AWS Lambda, DynamoDB, API Gateway

---

## 🎯 Features
- Add, edit, and delete tasks
- Tasks have categories (Health, Strength, Mind, Confidence, Social), durations, and points (auto or manual)
- Track completion status for each task
- Recurring tasks: daily, weekly, monthly, weekdays
- Long-term tasks with no deadline
- Goal tracker with multiple category targets
- Points dashboard (by date range, category)
- Profile screen with charts and goal progress

---

## 🏁 Getting Started (Local Development)

1. **Clone the repo:**
   ```bash
   git clone https://github.com/LuckyGit101/task-calendar-app.git
   cd task-calendar-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the app locally:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Folder Structure (Frontend)
```
src/
  components/         # Reusable UI components
  screens/            # Main app screens (Calendar, Profile)
  App.jsx             # App entry with navigation
  main.jsx            # Vite entry point
  index.css           # Tailwind base styles
```

---

## 🌐 API
All backend APIs are ready and connected (AWS Lambda, DynamoDB, API Gateway). No backend setup required for local frontend development.

---

## 🧑‍💻 Author
**Lucky Beel** (aka [LuckyGit101](https://github.com/LuckyGit101))
