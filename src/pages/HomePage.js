import React from "react";
import content from "../content/HomePageContent.json";
import { Container, Row, Col, Image } from "react-bootstrap";

const HomePage = () => {
  const chunks = [
    // Welcome Section: Image on the left and text on the right
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 scroll-snap-start gap-4">
      <h4>{content.welcomeSection.name}</h4>
      <h2 className="mt-2" style={{ marginLeft: "25%", transform: "translateX(-25%)" }}>
        {content.welcomeSection.greeting}
      </h2>
    </div>,

    // Intro Section: Text on the left, image on the right
    <div className="d-flex justify-content-between vh-100 scroll-snap-start">
      <div>
        <p>{content.introSection}</p>
      </div>
      <Image src="" alt="Placeholder" fluid style={{ width: "50%" }} />
    </div>,

    // Professional Journey: PayPal Part 1
    <div className="text-start vh-100 scroll-snap-start">
      <h2>{content.professionalJourneySection.title}</h2>
      <h5 className="font-weight-bold">{content.professionalJourneySection.paypalSubSection.title}</h5>
      <h6 className="font-italic">{content.professionalJourneySection.paypalSubSection.date}</h6>
      <p>{content.professionalJourneySection.paypalSubSection.paragraph1}</p>
    </div>,

    // Professional Journey: PayPal Part 2
    <div className="text-start vh-100 scroll-snap-start">
      <p>{content.professionalJourneySection.paypalSubSection.paragraph2}</p>
      <p>{content.professionalJourneySection.paypalSubSection.paragraph3}</p>
    </div>,

    // Professional Journey: Knoldus
    <div className="text-start vh-100 scroll-snap-start">
      <h5 className="font-weight-bold">{content.professionalJourneySection.knoldusSubSection.title}</h5>
      <h6 className="font-italic">{content.professionalJourneySection.knoldusSubSection.date}</h6>
      <p>{content.professionalJourneySection.knoldusSubSection.paragraph1}</p>
      <p>{content.professionalJourneySection.knoldusSubSection.paragraph2}</p>
      <p>{content.professionalJourneySection.knoldusSubSection.paragraph3}</p>
      <p>{content.professionalJourneySection.knoldusSubSection.paragraph4}</p>
    </div>,

    // Professional Journey: Mitacs
    <div className="text-start vh-100 scroll-snap-start">
      <h5 className="font-weight-bold">{content.professionalJourneySection.mitacsSubsSection.title}</h5>
      <h6 className="font-italic">{content.professionalJourneySection.mitacsSubsSection.date}</h6>
      <p>{content.professionalJourneySection.mitacsSubsSection.paragraph1}</p>
      <p>{content.professionalJourneySection.mitacsSubsSection.paragraph2}</p>
    </div>
  ];

  return (
    <div className="overflow-scroll" style={{ scrollSnapType: "y mandatory", height: "100vh" }}>
      {chunks.map((chunk, index) => (
        <div key={index} className="scroll-snap-start">
          {chunk}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
