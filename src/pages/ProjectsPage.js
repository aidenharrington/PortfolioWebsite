import React from "react";
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import content from '../content/ProjectsPageContent.json'

const ProjectsPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        {content.title}
      </Typography>
      <Link href="https://github.com/aidenharrington/subscribr-application" target="_blank" sx={{ display: "flex", alignItems: "center" }}>
        {content.github}
        <GitHubIcon sx={{ marginLeft: 1 }} />
      </Link>
      <Typography sx={{ paddingTop: 4 }}>
        {content.introParagraph}
      </Typography>
      <Typography sx={{ paddingTop: 4 }}>
        {content.bodyParagraph1}
      </Typography>
      <Typography sx={{ paddingTop: 4 }}>
        {content.bodyParagraph2}
      </Typography>
      <Typography sx={{ paddingTop: 4 }}>
        {content.bodyParagraph3}
      </Typography>
      <Typography sx={{ paddingTop: 4 }}>
        {content.conclusion}
      </Typography>
    </Box>
)};

export default ProjectsPage;
