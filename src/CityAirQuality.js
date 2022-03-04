import "./CityAirQuality.css";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

// function for body of the home page
// includes city's name, air quality index information (health information and primary pollutant)
function CityAirQuality() {
  return (
    <div className="city">
      <div className="city-name">Seattle</div>
      <div className="air-quality">Air Quality</div>
      <div className="quality-index-box">
        <SentimentSatisfiedOutlinedIcon className="quality-icon"/>
        <div className="quality">Good</div>
        <div className="index">41</div>
      </div>
      <div className="index-info">
        Air quality index is 41, which is similar to yesterday at about this
        time.
      </div>
      <div className="health-information-box">
        <div className="health-information">Health Information</div>
        <hr></hr>
        <div className="health-info-detail">
          Air quality is satisfactory and poses little or no health risk.
        </div>
        <div className="see-more">
          See More {">"}
        </div>
      </div>
      <div className="primary-pollutant-box">
        <div className="primary-pollutant">Primary Pollutant</div>
        <hr></hr>
        <div className="primary-pollutant-info">
          PM2.5 (Particle matter under 2.5μm)
        </div>
        <div className="primary-pollutant-detail">
          PM2.5 particles are small enough to enter the bloodstream and
          typically result from wildfires, smokestacks, bacteria, or small dust
          particles.
        </div>
        <div className="see-more2">
          See More {">"}
        </div>
      </div>
    </div>
  );
}

export default CityAirQuality;
