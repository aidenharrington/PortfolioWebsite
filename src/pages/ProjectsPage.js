import { useEffect, useState } from "react";
import content from '../content/ProjectsPageContent.json';
import commonContent from '../content/CommonContent.json'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollPrompt from "../components/ScrollPrompt";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const ProjectsPage = () => {
  const subscribrVideoId = "1xO1CIoY_48";

  const isMobile = useIsMobile();




  return (
    <div className="snap-scroll-container">

      <div className="chunk chunk-first">
        <h1 className="page-title">{content.title}</h1>
        <div className="home-page-text-box">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a
              href={commonContent.subscribrGitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '12px 32px',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                border: 'none',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
              }}
            >
              <i className="bi bi-github"></i>
              {content.github}
            </a>
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.introParagraph}</p>
        </div>
        {!isMobile && (<div className="video-container">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${subscribrVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>)}

        <ScrollPrompt />
      </div>

      {isMobile && (<div className="chunk chunk-video">
        <div className="video-container">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${subscribrVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>)}

      <div className="chunk">
        <div className="home-page-text-box">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.bodyParagraph1}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.bodyParagraph2}</p>
        </div>
        <ScrollPrompt />
      </div>

      <div className="chunk">
        <div className="home-page-text-box">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.bodyParagraph3}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>{content.conclusionParagraph}</p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.conclusionParagraph2}</p>
        </div>
      </div>

    </div>
  )
};

export default ProjectsPage;
