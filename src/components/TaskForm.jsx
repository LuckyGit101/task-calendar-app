import { useState } from "react";

const categories = ["Health", "Strength", "Mind", "Confidence", "Social"];

export default function TaskForm({ onAddTask, selectedDate }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [points, setPoints] = useState("");

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !duration) return;
    onAddTask({
      id: Date.now().toString(),
      title,
      duration: Number(duration),
      description,
      date: selectedDate,
      categories: selectedCategories,
      points: points ? Number(points) : 0,
      isComplete: false,
    });
    setTitle("");
    setDuration("");
    setDescription("");
    setSelectedCategories([]);
    setPoints("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <label className="block font-semibold mb-1">Title</label>
        <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="block font-semibold mb-1">Duration (mins)</label>
        <input type="number" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={duration} onChange={e => setDuration(e.target.value)} required />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="block font-semibold mb-1">Description</label>
        <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="block font-semibold mb-1">Categories</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {categories.map((cat) => (
            <span key={cat} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="accent-blue-500"
              />
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                {cat}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="block font-semibold mb-1">Points (optional)</label>
        <input type="number" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={points} onChange={e => setPoints(e.target.value)} />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition self-end">Add Task</button>
    </form>
  );
} 