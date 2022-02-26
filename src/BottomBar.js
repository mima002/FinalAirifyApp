import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import { Link } from "react-router-dom";

// function for bottom navigation bar
// includes icons and buttons for tips, home, and reports pages of app
function BottomBar() {
  return (
    <footer className="bottom-bar">
      <button className="tips-button">
        <Link to="/tips">
          <LightbulbOutlinedIcon className="tips-icon" fontSize="large" />
        </Link>
      </button>
      <button className="homepage-button">
        {/* Navigates to home page when click on home icon button */}
        <Link to="/">
          <HomeOutlinedIcon className="homepage-icon" fontSize="large" />
        </Link>
      </button>
      <button className="reports-button">
        {/* Navigates to reports page when click on report icon button */}
        <Link to="/reports">
          <AssessmentOutlinedIcon className="reports-icon" fontSize="large" />
        </Link>
      </button>
    </footer>
  );
}

export default BottomBar;
