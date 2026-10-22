import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import SubscribrPage from "./pages/SubscribrPage";
import AiDBPage from "./pages/AiDBPage";
import ResumePage from "./pages/ResumePage";
import ExperiencePage from "./pages/ExperiencePage";

import commonContent from './content/CommonContent.json'
import experienceContent from './content/ExperiencePageContent.json'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path={commonContent.homePageLink} element={<HomePage />} />
        <Route path={commonContent.projectsPageLink} element={<Navigate to={commonContent.subscribrPageLink} replace />} />
        <Route path={commonContent.subscribrPageLink} element={<SubscribrPage />} />
        <Route path={commonContent.aidbPageLink} element={<AiDBPage />} />
        <Route path={commonContent.experiencePageLink} element={<Navigate to={commonContent.arbutusPageLink} replace />} />
        <Route path={commonContent.arbutusPageLink} element={<ExperiencePage key="arbutus" content={experienceContent.arbutus} />} />
        <Route path={commonContent.benevityPageLink} element={<ExperiencePage key="benevity" content={experienceContent.benevity} />} />
        <Route path={commonContent.paypalPageLink} element={<ExperiencePage key="paypal" content={experienceContent.paypal} />} />
        <Route path={commonContent.knoldusPageLink} element={<ExperiencePage key="knoldus" content={experienceContent.knoldus} />} />
        <Route path={commonContent.mitacsPageLink} element={<ExperiencePage key="mitacs" content={experienceContent.mitacs} />} />
        <Route path={commonContent.resumePageLink} element={<ResumePage />} />
        <Route path={commonContent.contactPageLink} element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
