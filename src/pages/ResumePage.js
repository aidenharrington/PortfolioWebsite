import React from "react";
import content from "../content/ResumePageContent.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ResumePage = () => {
  return (
    <div className="container py-4">
      <h4>{content.title}</h4>
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
  );
};

export default ResumePage;
