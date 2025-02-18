import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ImageAttribution from "./components/ImageAttribution";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

import commonContent from './content/CommonContent.json'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path={commonContent.homePageLink} element={<HomePage />} />
        <Route path={commonContent.projectsPageLink} element={<ProjectsPage />} />
        <Route path={commonContent.resumePageLink} element={<ResumePage />} />
        <Route path={commonContent.contactPageLink} element={<ContactPage />} />
      </Routes>
      <ImageAttribution />
    </Router>
  );
}

export default App;
