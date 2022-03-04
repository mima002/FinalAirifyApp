import Homepage from './Homepage';
import ReportsPage from "./ReportsPage";
import TipsPage from "./TipsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React Router - App component
// includes routes to the homepage, reports page, and tips page of the application
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
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
