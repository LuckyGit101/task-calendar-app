import PointsSummary from "../components/PointsSummary";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import GoalsList from "../components/GoalsList";

const dummyTasks = [
  {
    id: "1",
    title: "Morning Run",
    duration: 30,
    description: "Run in the park",
    date: "2025-07-01",
    categories: ["Health", "Strength"],
    points: 1,
    isComplete: true,
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
  {
    id: "3",
    title: "Gym",
    duration: 45,
    description: "Strength training",
    date: "2025-07-02",
    categories: ["Strength"],
    points: 2,
    isComplete: true,
  },
];

const dummyGoals = [
  {
    id: "g1",
    name: "July Health Challenge",
    from: "2025-07-01",
    to: "2025-07-31",
    targets: {
      Health: 10,
      Strength: 5,
    },
    progress: {
      Health: 6,
      Strength: 3,
    },
  },
];

export default function ProfileScreen({ goToCalendar }) {
  return (
    <div className="max-w-2xl mx-auto py-8 px-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">📊 Your Progress</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={goToCalendar}
        >
          Go to Calendar
        </button>
      </div>
      <PointsSummary tasks={dummyTasks} />
      <LineChart />
      <PieChart />
      <GoalsList goals={dummyGoals} />
    </div>
  );
} 