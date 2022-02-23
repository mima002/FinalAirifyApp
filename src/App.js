import './App.css';
import InputWithIcon from './SearchBar';
import CityAirQuality from './CityAirQuality';
import BottomBar from './BottomBar';

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
      <CityAirQuality/>

      {/* bottom navigation bar */}
      <BottomBar/>
    </div>
  );
}

export default App;
