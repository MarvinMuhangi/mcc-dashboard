import { useState } from "react";

const affirmations = [
  "I am enough, exactly as I am.",
  "Every day I become more in tune with myself.",
  "I choose growth over fear.",
  "I am building a life I’m proud of."
];

const prompts = [
  "What do I need to let go of today?",
  "What am I proud of myself for?",
  "What does peace look like for me?",
  "What am I grateful for right now?",
  "What’s one kind thing I can do for myself today?"
];

export default function MCCDashboard() {
  const [ira, setIra] = useState(0);
  const [savings, setSavings] = useState(0);
  const [workouts, setWorkouts] = useState([false, false, false]);
  const [gratitude, setGratitude] = useState("");

  const toggleWorkout = (index) => {
    const updated = [...workouts];
    updated[index] = !updated[index];
    setWorkouts(updated);
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-800 font-sans p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">MCC – Marvin's Command Center</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">💸 Financial Goals</h2>
        <p>Income: $3,010 | Expenses: $2,200 | Leftover: $810</p>
        <div className="mt-4 space-y-2">
          <label>
            Roth IRA ($200/month):
            <input
              type="range"
              min="0"
              max="200"
              value={ira}
              onChange={(e) => setIra(Number(e.target.value))}
              className="w-full"
            />
            <span>${ira}</span>
          </label>
          <label>
            HYSA Savings ($200/month):
            <input
              type="range"
              min="0"
              max="200"
              value={savings}
              onChange={(e) => setSavings(Number(e.target.value))}
              className="w-full"
            />
            <span>${savings}</span>
          </label>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">💪 Weekly Workouts</h2>
        <div className="flex gap-4">
          {workouts.map((done, i) => (
            <button
              key={i}
              onClick={() => toggleWorkout(i)}
              className={`px-4 py-2 rounded border ${done ? "bg-green-300" : "bg-white"}`}
            >
              Workout {i + 1}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">🧘 Daily Reflection</h2>
        <p className="italic mb-2">Affirmation: "{affirmations[Math.floor(Math.random() * affirmations.length)]}"</p>
        <p className="italic mb-4">Prompt: {prompts[Math.floor(Math.random() * prompts.length)]}</p>
        <textarea
          placeholder="Today I'm grateful for..."
          value={gratitude}
          onChange={(e) => setGratitude(e.target.value)}
          className="w-full h-24 p-2 border rounded"
        />
      </section>
    </main>
  );
}