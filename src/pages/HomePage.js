import React from "react";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  const chunks = [
    // First chunk: Image on the left and text on the right
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", scrollSnapAlign: "start" }}>
      <Typography variant="h2" sx={{ marginRight: 2 }}>Welcome!</Typography>
      <Typography variant="h4">Insert Name</Typography>
    </Box>,

    // Second chunk: Text on the left, image on the right
    <Box sx={{ display: "flex", justifyContent: "space-between", height: "100vh", scrollSnapAlign: "start" }}>
      <Box>
        <Typography>Lorem ipsum dolor sit amet.</Typography>
        <Typography>Consectetur adipiscing elit.</Typography>
      </Box>
      <Box component="img" src="" alt="Placeholder" sx={{ width: "50%" }} />
    </Box>,

    // Third chunk: Two paragraphs centered
    <Box sx={{ textAlign: "center", height: "100vh", scrollSnapAlign: "start" }}>
      <Typography>Lorem ipsum dolor sit amet.</Typography>
      <Typography>Consectetur adipiscing elit.</Typography>
    </Box>,

    // Fourth chunk: Two paragraphs centered
    <Box sx={{ textAlign: "center", height: "100vh", scrollSnapAlign: "start" }}>
      <Typography>Lorem ipsum dolor sit amet.</Typography>
      <Typography>Consectetur adipiscing elit.</Typography>
    </Box>,
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
