import React from "react";
import content from '../content/ProjectsPageContent.json';
import commonContent from '../content/CommonContent.json'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollPrompt from "../components/ScrollPrompt";

const ProjectsPage = () => {
  const subscribrVideoId = "1xO1CIoY_48";


  return (
    <div className="snap-scroll-container">

      <div className="chunk chunk-first">
        <h1 className="page-title">{content.title}</h1>
        <a
            href={commonContent.subscribrGitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none"
          >
            {content.github}
            <i className="bi bi-github ms-2"></i>
          </a>
        <div className="home-page-text-box">
          <p>{content.introParagraph}</p>
        </div>

        <div className="video-container">
          <iframe
            src={`https:/www.youtube-nocookie.com/embed/${subscribrVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <p>{content.bodyParagraph1}</p>
          <p>{content.bodyParagraph2}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <p>{content.bodyParagraph3}</p>
          <p>{content.conclusionParagraph}</p>
          <p>{content.conclusionParagraph2}</p>
        </div>
      </div>

    </div>
  )
};

export default ProjectsPage;
