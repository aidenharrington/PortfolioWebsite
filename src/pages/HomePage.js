import { useState, useEffect, useRef } from "react";
import content from "../content/HomePageContent.json";
import { Container, Row, Col, Image } from "react-bootstrap";
import WelcomeBanner from "../components/WelcomeBanner";

import '../App.css';

const HomePage = () => {

  return (
    <div className="home-page-container">

      <div className="chunk">
        <WelcomeBanner />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <p className="large-text">{content.introSection}</p>
        </div>
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <h2 className="professional-journey-title">{content.professionalJourneySection.title}</h2>
          <h5 className="company-name">{content.professionalJourneySection.paypalSubSection.title}</h5>
          <h6 className="job-title">{content.professionalJourneySection.paypalSubSection.jobTitle}</h6>
          <h6 className="job-dates">{content.professionalJourneySection.paypalSubSection.date}</h6>
          <p>{content.professionalJourneySection.paypalSubSection.paragraph1}</p>
        </div>
      </div>

      <div className="chunk">
      <div className="home-page-text-box">
        <h5 className="company-name">{content.professionalJourneySection.paypalSubSection.titleContinued}</h5>
        <p>{content.professionalJourneySection.paypalSubSection.paragraph2}</p>
        <p>{content.professionalJourneySection.paypalSubSection.paragraph3}</p>
      </div>
      </div>

      <div className="chunk">
      <div className="home-page-text-box">
        <h5 className="company-name">{content.professionalJourneySection.knoldusSubSection.title}</h5>
        <h6 className="job-title">{content.professionalJourneySection.knoldusSubSection.jobTitle}</h6>
        <h6 className="job-dates">{content.professionalJourneySection.knoldusSubSection.date}</h6>
        <p>{content.professionalJourneySection.knoldusSubSection.paragraph1}</p>
        <p>{content.professionalJourneySection.knoldusSubSection.paragraph2}</p>
        <p>{content.professionalJourneySection.knoldusSubSection.paragraph3}</p>
      </div>
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
      </div>



    </div>
  );
};

export default HomePage;
