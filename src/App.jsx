import { useState } from "react";
import CalendarScreen from "./screens/CalendarScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const [screen, setScreen] = useState("calendar");

  const goToProfile = () => setScreen("profile");
  const goToCalendar = () => setScreen("calendar");

  return (
    <div className="min-h-screen bg-gray-100">
      {screen === "calendar" ? (
        <CalendarScreen goToProfile={goToProfile} />
      ) : (
        <ProfileScreen goToCalendar={goToCalendar} />
      )}
    </div>
  );
}

export default App;
