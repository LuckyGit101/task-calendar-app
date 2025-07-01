export default function LongTermTasks({ longTermTasks }) {
  if (!longTermTasks.length) return null;
  const sorted = [...longTermTasks].sort((a, b) => b.points - a.points);
  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Long-term Tasks</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sorted.map((task) => (
          <li key={task.id} className="bg-yellow-50 p-5 rounded-xl shadow border border-yellow-100 hover:shadow-md transition flex flex-col gap-2">
            <div className="font-semibold text-lg mb-1">{task.title}</div>
            <div className="text-sm text-gray-600 mb-1">{task.description}</div>
            <div className="flex flex-wrap gap-2 mb-1">
              {task.categories.map((cat) => (
                <span key={cat} className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  {cat}
                </span>
              ))}
            </div>
            <div className="text-xs text-green-700 font-semibold">Points: {task.points}</div>
          </li>
        ))}
      </ul>
    </div>
  );
} 