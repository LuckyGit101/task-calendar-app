import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart({ data }) {
  // Dummy data if not provided
  const chartData = data || {
    labels: ["2025-07-01", "2025-07-02", "2025-07-03", "2025-07-04"],
    datasets: [
      {
        label: "Health",
        data: [2, 3, 4, 5],
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
      },
      {
        label: "Mind",
        data: [1, 2, 2, 3],
        borderColor: "#f59e42",
        backgroundColor: "#fde68a",
      },
    ],
  };
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="font-bold mb-2">Points Over Time</h3>
      <Line data={chartData} />
    </div>
  );
} 