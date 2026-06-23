import { useState } from "react";

const exercises = {
  Back: [
    { name: "Pull-Ups", sets: "4 x 10-12", rest: "90s", muscles: "Lats, Rhomboids" },
    { name: "Barbell Row", sets: "4 x 8-10", rest: "90s", muscles: "Upper Back, Biceps" },
    { name: "Lat Pulldown", sets: "3 x 12", rest: "60s", muscles: "Lats" },
    { name: "Cable Row", sets: "3 x 12", rest: "60s", muscles: "Mid Back" },
  ],
  Biceps: [
    { name: "Barbell Curl", sets: "4 x 10", rest: "60s", muscles: "Biceps" },
    { name: "Hammer Curl", sets: "3 x 12", rest: "60s", muscles: "Brachialis" },
    { name: "Incline Curl", sets: "3 x 10", rest: "60s", muscles: "Long Head" },
  ],
  Chest: [
    { name: "Bench Press", sets: "4 x 8-10", rest: "90s", muscles: "Pectorals, Triceps" },
    { name: "Incline Press", sets: "4 x 10", rest: "90s", muscles: "Upper Chest" },
    { name: "Cable Fly", sets: "3 x 15", rest: "60s", muscles: "Pec Minor" },
    { name: "Push-Ups", sets: "3 x Failure", rest: "60s", muscles: "Chest, Triceps" },
  ],
  Legs: [
    { name: "Squat", sets: "4 x 8", rest: "120s", muscles: "Quads, Glutes" },
    { name: "Romanian Deadlift", sets: "4 x 10", rest: "90s", muscles: "Hamstrings" },
    { name: "Leg Press", sets: "3 x 12", rest: "90s", muscles: "Quads" },
    { name: "Calf Raises", sets: "4 x 20", rest: "45s", muscles: "Calves" },
  ],
  Abs: [
    { name: "Cable Crunch", sets: "4 x 15", rest: "45s", muscles: "Upper Abs" },
    { name: "Hanging Leg Raise", sets: "3 x 12", rest: "60s", muscles: "Lower Abs" },
    { name: "Plank", sets: "3 x 60s", rest: "45s", muscles: "Core" },
  ],
  Shoulders: [
    { name: "Overhead Press", sets: "4 x 8", rest: "90s", muscles: "Deltoids" },
    { name: "Lateral Raise", sets: "3 x 15", rest: "45s", muscles: "Side Delt" },
    { name: "Face Pull", sets: "3 x 15", rest: "45s", muscles: "Rear Delt" },
  ],
};

const weekPlan = [
  { day: "MON", focus: "Chest & Abs", icon: "💪" },
  { day: "TUE", focus: "Back & Biceps", icon: "🏋️" },
  { day: "WED", focus: "Rest", icon: "😴" },
  { day: "THU", focus: "Legs", icon: "🦵" },
  { day: "FRI", focus: "Shoulders", icon: "⚡" },
  { day: "SAT", focus: "Arms & Abs", icon: "🔥" },
  { day: "SUN", focus: "Rest", icon: "😴" },
];

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const todayIdx = new Date().getDay();
const todayDay = days[todayIdx];

export default function CoachMichael() {
  const [screen, setScreen] = useState("home"); // home | workout | explore | profile
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [completedSets, setCompletedSets] = useState({});

  const toggleSet = (exName, setIdx) => {
    const key = `${exName}_${setIdx}`;
    setCompletedSets(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const todayPlan = weekPlan.find(d => d.day === todayDay) || weekPlan[0];

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "#0a0a0f",
      minHeight: "100vh",
      color: "#fff",
      maxWidth: 420,
      margin: "0 auto",
      position: "relative",
      paddingBottom: 80,
    }}>

      {/* HOME SCREEN */}
      {screen === "home" && (
        <div>
          {/* Header */}
          <div style={{ padding: "48px 24px 20px", background: "linear-gradient(180deg, #0f1a2e 0%, #0a0a0f 100%)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <div>
                <p style={{ color: "#4ade80", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
                  Good {new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 17 ? "Afternoon" : "Evening"} 👋
                </p>
                <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>Coach Michael</h1>
                <p style={{ color: "#6b7280", fontSize: 13, margin: "4px 0 0" }}>Your personal trainer</p>
              </div>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg, #4ade80, #22c55e)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 900, color: "#000"
              }}>M</div>
            </div>

            {/* Stats Row */}
            <div style={{ display: "flex", gap: 12, marginBottom: 4 }}>
              {[
                { label: "Streak", value: "12 days", icon: "🔥" },
                { label: "This Week", value: "4 sessions", icon: "📅" },
                { label: "Level", value: "Intermediate", icon: "⭐" },
              ].map(s => (
                <div key={s.label} style={{
                  flex: 1, background: "#111827", borderRadius: 12, padding: "12px 10px",
                  border: "1px solid #1f2937"
                }}>
                  <div style={{ fontSize: 16, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: "#6b7280", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "0 24px" }}>
            {/* Today's Plan */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Today's Plan</h2>
                <span style={{ fontSize: 12, color: "#4ade80", fontWeight: 600 }}>{todayDay}</span>
              </div>
              <div style={{
                background: "linear-gradient(135deg, #052e16, #0f2d1a)",
                border: "1px solid #166534",
                borderRadius: 16, padding: 20,
                cursor: "pointer"
              }} onClick={() => { setSelectedCategory("Chest"); setScreen("workout"); }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{todayPlan.icon}</div>
                    <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{todayPlan.focus}</h3>
                    <p style={{ color: "#4ade80", fontSize: 13, margin: "4px 0 0", fontWeight: 500 }}>
                      {todayPlan.focus === "Rest" ? "Recovery Day" : "Tap to begin →"}
                    </p>
                  </div>
                  {todayPlan.focus !== "Rest" && (
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: "#4ade80", display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <span style={{ fontSize: 20, color: "#000" }}>▶</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Week View */}
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>This Week</h2>
              <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
                {weekPlan.map(d => (
                  <div key={d.day} style={{
                    flex: "0 0 auto",
                    background: d.day === todayDay ? "#4ade80" : "#111827",
                    border: d.day === todayDay ? "none" : "1px solid #1f2937",
                    borderRadius: 12, padding: "10px 14px", textAlign: "center",
                    minWidth: 52
                  }}>
                    <div style={{ fontSize: 16, marginBottom: 2 }}>{d.icon}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: d.day === todayDay ? "#000" : "#9ca3af" }}>{d.day}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Muscle Groups */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Muscle Groups</h2>
                <span style={{ fontSize: 12, color: "#4ade80", cursor: "pointer" }} onClick={() => setScreen("explore")}>See all →</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {Object.keys(exercises).slice(0, 4).map((cat, i) => {
                  const colors = ["#4ade80", "#60a5fa", "#f472b6", "#fb923c"];
                  return (
                    <div key={cat} style={{
                      background: "#111827", border: "1px solid #1f2937",
                      borderRadius: 14, padding: 16, cursor: "pointer",
                      transition: "transform 0.1s"
                    }} onClick={() => { setSelectedCategory(cat); setScreen("workout"); }}>
                      <div style={{ fontSize: 24, marginBottom: 8 }}>
                        {["🏋️", "💪", "🫀", "🦵"][i]}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 15 }}>{cat}</div>
                      <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                        {exercises[cat].length} exercises
                      </div>
                      <div style={{
                        marginTop: 10, height: 3, borderRadius: 2,
                        background: "#1f2937"
                      }}>
                        <div style={{ height: "100%", width: `${60 + i * 10}%`, borderRadius: 2, background: colors[i] }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WORKOUT SCREEN */}
      {screen === "workout" && selectedCategory && (
        <div>
          <div style={{
            padding: "48px 24px 20px",
            background: "linear-gradient(180deg, #052e16 0%, #0a0a0f 100%)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <button onClick={() => setScreen("home")} style={{
                background: "#111827", border: "1px solid #1f2937",
                color: "#fff", borderRadius: 10, padding: "8px 12px", cursor: "pointer", fontSize: 16
              }}>←</button>
              <div>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>{selectedCategory}</h2>
                <p style={{ margin: 0, color: "#4ade80", fontSize: 13 }}>{exercises[selectedCategory].length} exercises</p>
              </div>
            </div>
          </div>

          <div style={{ padding: "0 24px" }}>
            {exercises[selectedCategory].map((ex, ei) => (
              <div key={ex.name} style={{
                background: "#111827", border: "1px solid #1f2937",
                borderRadius: 16, padding: 18, marginBottom: 14
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{ex.name}</h3>
                    <p style={{ margin: "4px 0 0", color: "#6b7280", fontSize: 12 }}>{ex.muscles}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#4ade80" }}>{ex.sets}</div>
                    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>Rest: {ex.rest}</div>
                  </div>
                </div>
                {/* Set tracker */}
                <div style={{ display: "flex", gap: 8 }}>
                  {ex.sets.includes("x") && Array.from({ length: parseInt(ex.sets) }).map((_, si) => {
                    const key = `${ex.name}_${si}`;
                    return (
                      <button key={si} onClick={() => toggleSet(ex.name, si)} style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: completedSets[key] ? "#4ade80" : "#1f2937",
                        border: completedSets[key] ? "none" : "1px solid #374151",
                        color: completedSets[key] ? "#000" : "#6b7280",
                        fontWeight: 700, fontSize: 13, cursor: "pointer"
                      }}>{si + 1}</button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EXPLORE SCREEN */}
      {screen === "explore" && (
        <div>
          <div style={{ padding: "48px 24px 20px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>Explore</h2>
            <p style={{ color: "#6b7280", fontSize: 14, margin: "4px 0 0" }}>All muscle groups</p>
          </div>
          <div style={{ padding: "0 24px" }}>
            {Object.keys(exercises).map((cat, i) => {
              const icons = ["🏋️", "💪", "🫀", "🦵", "⚡", "🔥"];
              return (
                <div key={cat} style={{
                  background: "#111827", border: "1px solid #1f2937",
                  borderRadius: 14, padding: 18, marginBottom: 12,
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 16
                }} onClick={() => { setSelectedCategory(cat); setScreen("workout"); }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "#0f2d1a", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 22, flexShrink: 0
                  }}>{icons[i % icons.length]}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{cat}</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
                      {exercises[cat].length} exercises
                    </div>
                  </div>
                  <span style={{ color: "#4ade80", fontSize: 18 }}>→</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* PROFILE SCREEN */}
      {screen === "profile" && (
        <div>
          <div style={{ padding: "48px 24px 20px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>Profile</h2>
          </div>
          <div style={{ padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "linear-gradient(135deg, #4ade80, #22c55e)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32, fontWeight: 900, color: "#000",
                margin: "0 auto 12px"
              }}>M</div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Coach Michael</h3>
              <p style={{ color: "#6b7280", fontSize: 13, margin: "4px 0 0" }}>Intermediate Lifter</p>
            </div>

            {[
              { label: "Total Workouts", value: "47", icon: "🏋️" },
              { label: "Current Streak", value: "12 days", icon: "🔥" },
              { label: "Calories Burned", value: "18,420", icon: "⚡" },
              { label: "Personal Records", value: "8", icon: "🏆" },
            ].map(stat => (
              <div key={stat.label} style={{
                background: "#111827", border: "1px solid #1f2937",
                borderRadius: 14, padding: 18, marginBottom: 12,
                display: "flex", justifyContent: "space-between", alignItems: "center"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 20 }}>{stat.icon}</span>
                  <span style={{ fontSize: 15, color: "#d1d5db" }}>{stat.label}</span>
                </div>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#4ade80" }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <div style={{
        position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 420,
        background: "#0d1117", borderTop: "1px solid #1f2937",
        display: "flex", padding: "12px 0 20px"
      }}>
        {[
          { id: "home", icon: "🏠", label: "Home" },
          { id: "explore", icon: "🔍", label: "Explore" },
          { id: "workout", icon: "💪", label: "Workout", action: () => { setSelectedCategory("Chest"); setScreen("workout"); } },
          { id: "profile", icon: "👤", label: "Profile" },
        ].map(tab => (
          <button key={tab.id} onClick={tab.action || (() => setScreen(tab.id))} style={{
            flex: 1, background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4
          }}>
            <span style={{ fontSize: 20 }}>{tab.icon}</span>
            <span style={{
              fontSize: 11, fontWeight: 600,
              color: screen === tab.id ? "#4ade80" : "#6b7280"
            }}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
