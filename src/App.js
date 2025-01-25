import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

import commonContent from './content/CommonContent.json'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={commonContent.homePageLink} element={<HomePage />} />
        <Route path={commonContent.projectsPageLink} element={<ProjectsPage />} />
        <Route path={commonContent.resumePageLink} element={<ResumePage />} />
        <Route path={commonContent.contactPageLink} element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
