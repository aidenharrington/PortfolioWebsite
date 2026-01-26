import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import SubscribrPage from "./pages/SubscribrPage";
import AiDBPage from "./pages/AiDBPage";
import ResumePage from "./pages/ResumePage";

import commonContent from './content/CommonContent.json'
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
        <Route path={commonContent.resumePageLink} element={<ResumePage />} />
        <Route path={commonContent.contactPageLink} element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
