import "./App.css";
import InputWithIcon from "./SearchBar";
import CityAirQuality from "./CityAirQuality";
import BottomBar from "./BottomBar";
import ReportsPage from "./ReportsPage";
import TipsPage from "./TipsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React Router
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/reports"
          element={
            <div>
              <ReportsPage />
            </div>
          }
        />
        <Route
          path="/tips"
          element={
            <div>
              <TipsPage />
            </div>
          }
        />
        <Route path="/:room" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

// app function
function App() {
  return (
    <div className="App">
      {/* header with title and search bar */}
      <header className="header">
        <div className="title">Airify</div>
        <div className="search-city">
          <InputWithIcon />
        </div>
      </header>

      {/* exposure report reminder on homepage */}
      <div className="report-reminder">
        {/* make this a button later to be clickable */}
        <div className="reminder-text">
          Your weekly exposure report is out. Let's check it out!
        </div>
      </div>

      {/* specific city's air quality information on homepage*/}
      <CityAirQuality />

      {/* bottom navigation bar */}
      <BottomBar />
    </div>
  );
}
