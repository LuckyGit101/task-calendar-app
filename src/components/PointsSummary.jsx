const categories = ["Health", "Strength", "Mind", "Confidence", "Social"];

export default function PointsSummary({ tasks }) {
  const pointsByCategory = categories.reduce((acc, cat) => {
    acc[cat] = tasks
      .filter((t) => t.categories.includes(cat) && t.isComplete)
      .reduce((sum, t) => sum + (t.points || 0), 0);
    return acc;
  }, {});

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="font-bold mb-2">Points by Category</h3>
      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <div key={cat} className="flex-1 min-w-[100px]">
            <div className="font-semibold">{cat}</div>
            <div className="text-blue-600 text-lg">{pointsByCategory[cat]}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 