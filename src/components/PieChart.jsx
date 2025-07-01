import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  // Dummy data if not provided
  const chartData = data || {
    labels: ["Health", "Strength", "Mind", "Confidence", "Social"],
    datasets: [
      {
        label: "Category Contribution",
        data: [6, 3, 4, 2, 1],
        backgroundColor: [
          "#3b82f6",
          "#f59e42",
          "#10b981",
          "#f43f5e",
          "#a78bfa",
        ],
      },
    ],
  };
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="font-bold mb-2">Category Contribution</h3>
      <Pie data={chartData} />
    </div>
  );
} 