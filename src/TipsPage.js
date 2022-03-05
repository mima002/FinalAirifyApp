import BottomBar from "./BottomBar";
import "./TipsPage.css";

// tips component of application
// includes title, image, source of information, and 5 tips to reduce air pollution exposure
function TipsPage() {
  return (
    <div className="tips">
      <header className="header">
        <div className="title">Airify</div>
      </header>
      <div className="info-title">
        Ways to Reduce Personal Health Risks from Air Pollution
      </div>

      <img className="image" />
      <div className="source">
        https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4311076/
      </div>

      <div className="text">
        <div>1. Staying indoors</div>
        <div className="one">
          Although ambient air pollutants such as particulate matter, ozone, and
          other gases infiltrate indoors from outdoors, concentrations are
          generally lower indoors compared to outdoors, and spending time
          indoors generally reduces exposure to ambient air pollutants.
        </div>
        <div>2. Cleaning indoor air</div>
        <div className="two">
          Portable or central air cleaning systems can reduce concentrations of
          indoor air pollutants, of either outdoor or indoor origin.
        </div>
        <div>3. Reducing the effective inhaled dose of air pollution</div>
        <div className="three">
          In addition to staying indoors, with or without further efforts to
          reduce indoor pollutant levels, reducing exertion can reduce the
          amount (dose) of air pollutants that are inhaled (17), and can modify
          the fraction of pollutant deposited or absorbed in different regions
          of the respiratory tract. Thus, breathing through the mouth at higher
          levels of exertion further increases the dose of pollutants that reach
          the lower respiratory.
        </div>
        <div className="four-title">
          4. Avoiding outdoor activity when and where air pollutant levels are
          higher
        </div>
        <div className="four">
          Ambient air pollution levels vary seasonally, day-to-day, and by
          time-of-day. Levels of air pollutants also vary in different
          microenvironments, such as outdoors in variable proximity to sources,
          at home, at workplaces, in schools, in vehicles, etc.In order to most
          effectively adjust behavior to reduce exposure and risk, individuals
          must be able to anticipate when and where air pollutant levels are
          likely to be elevated above levels thought to confer increased risk.
        </div>
        <div>5. Personal protective equipment - respirators</div>
        <div className="five">
          The ability of a respirator to remove contaminants from inhaled air
          depends on the contaminant, type of filter or adsorbent material,
          respirator type and conditions of use. Although, relatively
          inexpensive respirators with filter material for particulate matter
          are widely available, no single absorbent, or available combination of
          adsorbents, can efficiently remove the various gas phase air
          pollutants that may be encountered.
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default TipsPage;
