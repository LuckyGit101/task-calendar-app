function ProgressBar({ value, max, completed }) {
  return (
    <div className="w-full bg-gray-200 rounded h-3 mb-1">
      <div
        className={`h-3 rounded ${completed ? "bg-green-500" : "bg-blue-500"}`}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
}

export default function GoalsList({ goals }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="font-bold mb-2">Goals</h3>
      {goals.map((goal) => (
        <div key={goal.id} className="mb-4">
          <div className="font-semibold">{goal.name}</div>
          <div className="text-xs text-gray-500 mb-1">
            {goal.from} to {goal.to}
          </div>
          {Object.keys(goal.targets).map((cat) => {
            const target = goal.targets[cat];
            const progress = goal.progress[cat] || 0;
            const completed = progress >= target;
            return (
              <div key={cat} className="mb-1">
                <div className="flex justify-between text-xs">
                  <span className={completed ? "text-green-600 font-bold" : ""}>{cat}</span>
                  <span>{progress} / {target}</span>
                </div>
                <ProgressBar value={progress} max={target} completed={completed} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
} 