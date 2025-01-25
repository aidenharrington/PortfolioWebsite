import React from "react";
import content from '../content/ProjectsPageContent.json';
import commonContent from '../content/CommonContent.json'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ProjectsPage = () => {
  return (
    <div className="container py-4">
      <h4 className="mb-4">{content.title}</h4>
      <a
        href={commonContent.subscribrGitHubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center text-decoration-none"
      >
        {content.github}
        <i className="bi bi-github ms-2"></i>
      </a>
      <p className="mt-4">{content.introParagraph}</p>
      <p className="mt-4">{content.bodyParagraph1}</p>
      <p className="mt-4">{content.bodyParagraph2}</p>
      <p className="mt-4">{content.bodyParagraph3}</p>
      <p className="mt-4">{content.conclusion}</p>
    </div>
  )
};

export default ProjectsPage;
