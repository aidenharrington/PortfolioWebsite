import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import content from "../content/ResumePageContent.json";

const ResumePage = () => {
  return (
    <div className="snap-scroll-container">
      <div className="chunk chunk-first">
        <h1 className="page-title">{content.title}</h1>
        <div className="home-page-text-box">
          <p style={{ fontSize: '1.25rem', color: '#e5e7eb', marginBottom: '2rem', textAlign: 'center' }}>
            {content.description}
          </p>
          <div style={{ textAlign: 'center' }}>
            <a
              href="/files/aharrington_resume.pdf"
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
              <i className="bi bi-file-earmark-pdf"></i>
              {content.viewResumeLinkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
