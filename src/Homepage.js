import "./App.css";
import InputWithIcon from "./SearchBar";
import CityAirQuality from "./CityAirQuality";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";

// homepage function
export default function Homepage() {
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
        <button className="reminder-text">
          <Link to="/reports">
            Your weekly exposure report is out. Let's check it out!
          </Link>
        </button>
      </div>

      {/* specific city's air quality information on homepage*/}
      <CityAirQuality />

      {/* bottom navigation bar */}
      <BottomBar />
    </div>
  );
}
