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
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.aboutMeSection.paragraph1}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.aboutMeSection.paragraph2}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.aboutMeSection.paragraph3}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.aboutMeSection.paragraph4}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <h2 className="professional-journey-title">{content.professionalJourneySection.title}</h2>
          <h5 className="company-name">{content.professionalJourneySection.paypalSubSection.title}</h5>
          <h6 className="job-title">{content.professionalJourneySection.paypalSubSection.jobTitle}</h6>
          <h6 className="job-dates">{content.professionalJourneySection.paypalSubSection.date}</h6>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.professionalJourneySection.paypalSubSection.paragraph1}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <h5 className="company-name">{content.professionalJourneySection.paypalSubSection.titleContinued}</h5>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.professionalJourneySection.paypalSubSection.paragraph2}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.professionalJourneySection.paypalSubSection.paragraph3}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <h5 className="company-name">{content.professionalJourneySection.knoldusSubSection.title}</h5>
          <h6 className="job-title">{content.professionalJourneySection.knoldusSubSection.jobTitle}</h6>
          <h6 className="job-dates">{content.professionalJourneySection.knoldusSubSection.date}</h6>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.professionalJourneySection.knoldusSubSection.paragraph1}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.professionalJourneySection.knoldusSubSection.paragraph2}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.professionalJourneySection.knoldusSubSection.paragraph3}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.professionalJourneySection.knoldusSubSection.paragraph4}</p>
        </div>
        <ScrollPrompt />
      </div>


      <div className="chunk">
        <div className="home-page-text-box">
          <h5 className="company-name">{content.professionalJourneySection.mitacsSubsSection.title}</h5>
          <h6 className="job-title">{content.professionalJourneySection.mitacsSubsSection.jobTitle}</h6>
          <h6 className="job-dates">{content.professionalJourneySection.mitacsSubsSection.date}</h6>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.professionalJourneySection.mitacsSubsSection.paragraph1}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.professionalJourneySection.mitacsSubsSection.paragraph2}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk chunk-first">
        <h1 className="page-title">{content.stanleySection.title}</h1>
        <div
          className="image-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
            padding: '2rem 0'
          }}
        >
          <div style={{
            maxWidth: '500px',
            width: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <img
              src={stanleySitting}
              alt="Stanley - Aiden's cat"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '20px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
