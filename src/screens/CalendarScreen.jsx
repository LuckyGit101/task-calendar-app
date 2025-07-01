import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import LongTermTasks from "../components/LongTermTasks";

const initialTasks = [
  {
    id: "1",
    title: "Morning Run",
    duration: 30,
    description: "Run in the park",
    date: "2025-07-01",
    categories: ["Health", "Strength"],
    points: 1,
    isComplete: false,
  },
  {
    id: "2",
    title: "Read Book",
    duration: 60,
    description: "Finish a chapter",
    date: "2025-07-01",
    categories: ["Mind"],
    points: 1,
    isComplete: true,
  },
];

const initialLongTermTasks = [
  {
    id: "lt1",
    title: "Start YouTube Channel",
    description: "Upload first video",
    categories: ["Confidence", "Social"],
    points: 10,
  },
  {
    id: "lt2",
    title: "Build Portfolio",
    description: "Create personal website",
    categories: ["Mind", "Confidence"],
    points: 8,
  },
];

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export default function CalendarScreen({ goToProfile }) {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-07-01"));
  const [tasks, setTasks] = useState(initialTasks);
  const [longTermTasks] = useState(initialLongTermTasks);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isComplete: !t.isComplete } : t
      )
    );
  };

  const selectedDateStr = formatDate(selectedDate);
  const tasksForDate = tasks.filter((t) => t.date === selectedDateStr);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav Bar */}
      <nav className="w-full bg-white shadow flex justify-between items-center px-6 py-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">📅 Task Calendar</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition"
          onClick={goToProfile}
        >
          Go to Profile
        </button>
      </nav>
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Calendar and Form/Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Calendar Card */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow p-4 w-full flex flex-col items-center mb-6">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="mb-4"
              />
              <div className="mt-2 text-gray-700 font-medium text-base">
                Selected: {selectedDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
              </div>
            </div>
          </div>
          {/* Task Form and List */}
          <div className="flex flex-col space-y-8">
            {/* Task Form Card */}
            <div className="bg-white rounded-xl shadow p-6 space-y-4">
              <TaskForm onAddTask={handleAddTask} selectedDate={formatDate(selectedDate)} />
            </div>
            {/* Task List Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Today's Tasks</h2>
              <TaskList tasks={tasksForDate} onToggleComplete={handleToggleComplete} />
            </div>
          </div>
        </div>
        {/* Long-Term Tasks Section */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Long-Term Tasks</h2>
          <LongTermTasks longTermTasks={longTermTasks} />
        </div>
      </div>
    </div>
  );
} 