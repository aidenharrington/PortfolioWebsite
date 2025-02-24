import React from "react";
import content from "../content/ResumePageContent.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ResumePage = () => {
  return (
    <div className="snap-scroll-container">
      <div className="chunk chunk-first">
        <h1 className="page-title">{content.title}</h1>
        <div className="home-page-text-box">
          <p>{content.description}</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none"
          >
            <i className="bi bi-file-earmark-pdf me-2"></i>
            {content.downloadResumeLinkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
