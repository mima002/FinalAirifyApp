import BottomBar from "./BottomBar";
import "./ReportsPage.css";

// report component of application
// includes header, daily and weekly exposure report graph and conditions
export default function ReportsPage() {
  return (
    <div className="report">
      <header className="header">
        <div className="title">Airify</div>
      </header>
      <header className="todays-report-header">Daily Report</header>
      <div className="todays-graph">
        <img className="graph-1" />
      </div>
      <div className="average-condition">Average air quality condition</div>
      <div className="daily-condition">Moderate</div>
      <div className="condition-details">
        Air quality is acceptable; however, for some pollutants there may be a
        moderate health concern for a very small number of people. For example,
        people who are unusually sensitive to ozone may experience respiratory
        symptoms.
      </div>

      <header className="weekly-report-header"> Weekly Report</header>
      <div className="weekly-graph">
        <img className="graph-2" />
      </div>
      <div className="average-condition2">Average air quality condition</div>
      <div className="weekly-condition">Good</div>
      <div className="condition-details2">
        Air quality is considered satisfactory, and air pollution poses little
        or no risk.
      </div>
      <BottomBar />
    </div>
  );
}
