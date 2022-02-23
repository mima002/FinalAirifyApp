import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

// function for bottom navigation bar
// includes icons and buttons for tips, home, and reports pages of app
function BottomBar() {
    return (
        <footer className="bottom-bar">
          <button className="tips-button">
              <LightbulbOutlinedIcon className ="tips-icon" fontSize='large'/>
          </button>
          <button className='homepage-button'>
              <HomeOutlinedIcon className ="homepage-icon" fontSize='large'/>
          </button>
          <button className="reports-button">
              <AssessmentOutlinedIcon className="reports-icon" fontSize='large'/>
          </button>


        </footer>
 );
}

export default BottomBar;