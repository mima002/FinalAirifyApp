import "./App.css";
import InputWithIcon from "./SearchBar";
import CityAirQuality from "./CityAirQuality";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";
import { useState } from 'react';

// homepage function
export default function Homepage() {
  const [text, setText] = useState(""); 
  const [city, setCity] = useState([]);


  async function search() {
    const key = "27501b420146429e3169f8e098265b233cf0450c";
    const url = `https://api.waqi.info/feed/${text}/?token=${key}`;
    const r = await fetch(url);
    const j = await r.json();
    setCity(j.data.city.name);
  }

  return (
    <div className="App">
      {/* header with title and search bar */}
      <header className="header">
        <div className="title">Airify</div>
        <div className="search-city">
          <InputWithIcon 
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyPress={(e) => {
            if (e.key === "Enter") search();
          }}
          />
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
