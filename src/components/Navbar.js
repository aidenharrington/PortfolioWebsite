import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import commonContent from "../content/CommonContent.json"

const Navbar = ({ sx }) => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: (theme) => theme.palette.primary.main, ...sx }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {commonContent.websiteTitle}
        </Typography>
        <Button component={Link} to="/" sx={{ color: "white" }}>{commonContent.homePageTitle}</Button>
        <Button component={Link} to="/projects" sx={{ color: "white" }}>{commonContent.projectsPageTitle}</Button>
        <Button component={Link} to="/resume" sx={{ color: "white" }}>{commonContent.resumePageTitle}</Button>
        <Button component={Link} to="/contact" sx={{ color: "white" }}>{commonContent.contactPageTitle}</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
