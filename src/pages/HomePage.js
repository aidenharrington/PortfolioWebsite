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
        <div>
          <p>{content.introSection}</p>
        </div>
      </div>

      <div className="chunk">
        <h2>{content.professionalJourneySection.title}</h2>
        <h5 className="font-weight-bold">{content.professionalJourneySection.paypalSubSection.title}</h5>
        <h6 className="font-italic">{content.professionalJourneySection.paypalSubSection.date}</h6>
        <p>{content.professionalJourneySection.paypalSubSection.paragraph1}</p>
      </div>

      <div className="chunk">
        <p>{content.professionalJourneySection.paypalSubSection.paragraph2}</p>
        <p>{content.professionalJourneySection.paypalSubSection.paragraph3}</p>
      </div>

      <div className="chunk">
        <h5 className="font-weight-bold">{content.professionalJourneySection.knoldusSubSection.title}</h5>
        <h6 className="font-italic">{content.professionalJourneySection.knoldusSubSection.date}</h6>
        <p>{content.professionalJourneySection.knoldusSubSection.paragraph1}</p>
        <p>{content.professionalJourneySection.knoldusSubSection.paragraph2}</p>
        <p>{content.professionalJourneySection.knoldusSubSection.paragraph3}</p>
      </div>


      <div className="chunk">
        <h5 className="font-weight-bold">{content.professionalJourneySection.mitacsSubsSection.title}</h5>
        <h6 className="font-italic">{content.professionalJourneySection.mitacsSubsSection.date}</h6>
        <p>{content.professionalJourneySection.mitacsSubsSection.paragraph1}</p>
        <p>{content.professionalJourneySection.mitacsSubsSection.paragraph2}</p>
        <p>{content.professionalJourneySection.mitacsSubsSection.paragraph3}</p>
      </div>



    </div>
  );
};

export default HomePage;
