export default function TaskList({ tasks, onToggleComplete }) {
  if (!tasks.length)
    return <div className="text-gray-400 italic text-center py-4">No tasks for this date.</div>;
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="bg-gray-50 p-4 rounded-xl shadow flex items-start gap-3 border border-gray-100 hover:shadow-md transition"
        >
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => onToggleComplete(task.id)}
            className="mt-1 accent-blue-500"
          />
          <div className="flex-1">
            <div className="font-semibold flex items-center gap-2 text-lg">
              {task.title}
              <span className="text-xs text-gray-400 ml-2">[{task.duration} min]</span>
            </div>
            <div className="text-sm text-gray-600 mb-1">{task.description}</div>
            <div className="flex flex-wrap gap-2 mt-1">
              {task.categories.map((cat) => (
                <span key={cat} className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  {cat}
                </span>
              ))}
            </div>
            {task.points ? (
              <div className="text-xs text-green-600 font-semibold mt-1">Points: {task.points}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
} 