import React from "react";
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Subscribr
      </Typography>
      <Link href="#" target="_blank" sx={{ display: "flex", alignItems: "center" }}>
        <GitHubIcon sx={{ marginRight: 1 }} />
        GitHub Repository
      </Link>
    </Box>
  );
};

export default ProjectsPage;
