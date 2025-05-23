import content from "../content/HomePageContent.json";

import WelcomeBanner from "../components/WelcomeBanner";
import ScrollPrompt from "../components/ScrollPrompt";

import stanleySitting from "../assets/images/stanley_sitting.png";

import '../App.css';

const HomePage = () => {

  return (
    <div className="snap-scroll-container">

      <div className="chunk">
        <WelcomeBanner />
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <h2 className="professional-journey-title">{content.aboutMeSection.title}</h2>
          <p>{content.aboutMeSection.paragraph1}</p>
          <p>{content.aboutMeSection.paragraph2}</p>
          <p>{content.aboutMeSection.paragraph3}</p>
          <p>{content.aboutMeSection.paragraph4}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <h2 className="professional-journey-title">{content.professionalJourneySection.title}</h2>
          <h5 className="company-name">{content.professionalJourneySection.paypalSubSection.title}</h5>
          <h6 className="job-title">{content.professionalJourneySection.paypalSubSection.jobTitle}</h6>
          <h6 className="job-dates">{content.professionalJourneySection.paypalSubSection.date}</h6>
          <p>{content.professionalJourneySection.paypalSubSection.paragraph1}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <h5 className="company-name">{content.professionalJourneySection.paypalSubSection.titleContinued}</h5>
          <p>{content.professionalJourneySection.paypalSubSection.paragraph2}</p>
          <p>{content.professionalJourneySection.paypalSubSection.paragraph3}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <h5 className="company-name">{content.professionalJourneySection.knoldusSubSection.title}</h5>
          <h6 className="job-title">{content.professionalJourneySection.knoldusSubSection.jobTitle}</h6>
          <h6 className="job-dates">{content.professionalJourneySection.knoldusSubSection.date}</h6>
          <p>{content.professionalJourneySection.knoldusSubSection.paragraph1}</p>
          <p>{content.professionalJourneySection.knoldusSubSection.paragraph2}</p>
          <p>{content.professionalJourneySection.knoldusSubSection.paragraph3}</p>
          <p>{content.professionalJourneySection.knoldusSubSection.paragraph4}</p>
        </div>
        <ScrollPrompt />
      </div>


      <div className="chunk">
        <div className="home-page-text-box">
          <h5 className="company-name">{content.professionalJourneySection.mitacsSubsSection.title}</h5>
          <h6 className="job-title">{content.professionalJourneySection.mitacsSubsSection.jobTitle}</h6>
          <h6 className="job-dates">{content.professionalJourneySection.mitacsSubsSection.date}</h6>
          <p>{content.professionalJourneySection.mitacsSubsSection.paragraph1}</p>
          <p>{content.professionalJourneySection.mitacsSubsSection.paragraph2}</p>
          <p>{content.professionalJourneySection.mitacsSubsSection.paragraph3}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk chunk-first">
        <h1 className="page-title">{content.stanleySection.title}</h1>
        <div
          className="image-container"
          style={{
            display: 'flex',
            justifyContent: 'center', // Center image horizontally
            alignItems: 'center', // Center image vertically
            width: '100%', // Ensure the container takes up the full width
            height: '100vh', // Make container take full viewport height
          }}
        >
          <img
            src={stanleySitting}
            alt="Stanley"
            style={{
              maxWidth: '600px', // 50% bigger than 300px
              width: '100%', // Ensure the image scales within the max-width
              height: 'auto', // Maintain aspect ratio
              display: 'block', // Remove any unwanted inline spacing
              margin: '0 auto', // Center the image horizontally
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
