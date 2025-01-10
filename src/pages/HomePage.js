import React from "react";
import { Box, Typography } from "@mui/material";
import content from "../content/HomePageContent.json"

const HomePage = () => {
  const chunks = [
    // Welcome Section: Image on the left and text on the right
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", scrollSnapAlign: "start", gap: 4 }}>
      <Typography variant="h4">
        {content.welcomeSection.name}
        </Typography>
      <Typography variant="h2" sx={{  marginTop: 2, marginLeft: "25%", transform: "translateX(-25%)" }}>
        {content.welcomeSection.greeting}
        </Typography>
    </Box>,

    // Intro Section: Text on the left, image on the right
    <Box sx={{ display: "flex", justifyContent: "space-between", height: "100vh", scrollSnapAlign: "start" }}>
      <Box>
        <Typography>
          {content.introSection}
        </Typography>
        
      </Box>
      <Box component="img" src="" alt="Placeholder" sx={{ width: "50%" }} />
    </Box>,

    // Professional Journey: PayPal Part 1
    <Box sx={{ textAlign: "left", height: "100vh", scrollSnapAlign: "start" }}>
      <Typography variant="h2">
        {content.professionalJourneySection.title}
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>
        {content.professionalJourneySection.paypalSubSection.title}
      </Typography>
      <Typography sx={{ fontStyle: "italic" }}>
        {content.professionalJourneySection.paypalSubSection.date}
      </Typography>
      <Typography>
        {content.professionalJourneySection.paypalSubSection.paragraph1}
      </Typography>
    </Box>,

    // Professional Journey: PayPal Part 2
    <Box sx={{ textAlign: "left", height: "100vh", scrollSnapAlign: "start" }}>
      <Typography>
        {content.professionalJourneySection.paypalSubSection.paragraph2}
      </Typography>
      <Typography>
        {content.professionalJourneySection.paypalSubSection.paragraph3}
      </Typography>
    </Box>,

    // Professional Journey: Knoldus
    <Box sx={{ textAlign: "left", height: "100vh", scrollSnapAlign: "start" }}>
      <Typography sx={{ fontWeight: "bold" }}>
        {content.professionalJourneySection.knoldusSubSection.title}
      </Typography>
      <Typography sx={{ fontStyle: "italic" }}>
        {content.professionalJourneySection.knoldusSubSection.date}
      </Typography>
      <Typography>
        {content.professionalJourneySection.knoldusSubSection.paragraph1}
      </Typography>
      <Typography>
        {content.professionalJourneySection.knoldusSubSection.paragraph2}
      </Typography>
      <Typography>
        {content.professionalJourneySection.knoldusSubSection.paragraph3}
      </Typography>
      <Typography>
        {content.professionalJourneySection.knoldusSubSection.paragraph4}
      </Typography>
    </Box>,

    // Professional Journey: Mitacs
    <Box sx={{ textAlign: "left", height: "100vh", scrollSnapAlign: "start" }}>
       <Typography sx={{ fontWeight: "bold" }}>
        {content.professionalJourneySection.mitacsSubsSection.title}
      </Typography>
      <Typography sx={{ fontStyle: "italic" }}>
        {content.professionalJourneySection.mitacsSubsSection.date}
      </Typography>
      <Typography>
        {content.professionalJourneySection.mitacsSubsSection.paragraph1}
      </Typography>
      <Typography>
        {content.professionalJourneySection.mitacsSubsSection.paragraph2}
      </Typography>
    </Box>
  ];

  return (
    <Box sx={{ overflowY: "scroll", scrollSnapType: "y mandatory", height: "100vh" }}>
      {chunks.map((chunk, index) => (
        <Box key={index} sx={{ scrollSnapAlign: "start" }}>
          {chunk}
        </Box>
      ))}
    </Box>
  );
};

export default HomePage;
