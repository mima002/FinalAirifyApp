import BottomBar from "./BottomBar";
import "./TipsPage.css";

function TipsPage() {
  return (
    <div className="tips">
      <header className="header">
        <div className="title">Airify</div>
      </header>
      <header>Ways to reduce personal health risks from air pollution</header>

      <img className="image" />
      <div className="text">
        <div>1. Staying Indoors</div>
        <div>2. Cleaning indoor air</div>
        <div>3. Reducing the effective inhaled dose of air pollution</div>
        <div>
          4. Avoiding outdoor activity when and where air pollutant levels are
          higher
        </div>
        <div>5. Personal protective equipment - respirators</div>
      </div>
      <BottomBar />
    </div>
  );
}

export default TipsPage;
