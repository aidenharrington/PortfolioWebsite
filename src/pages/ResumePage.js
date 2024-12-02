import React from "react";
import { Box, Typography, Link } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import content from "../content/ResumePageContent.json"

const ResumePage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        {content.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content.description}
      </Typography>
      <Link href="#" target="_blank" sx={{ display: "flex", alignItems: "center" }}>
        <PictureAsPdfIcon sx={{ marginRight: 1 }} />
        {content.downloadResumeLinkText}
      </Link>
    </Box>
  );
};

export default ResumePage;
