import content from "../content/HomePageContent.json";

import WelcomeBanner from "../components/WelcomeBanner";
import ScrollPrompt from "../components/ScrollPrompt";

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
      </div>

    </div>
  );
};

export default HomePage;
