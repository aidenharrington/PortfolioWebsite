import { useEffect, useState } from "react";
import content from '../content/AiDBPageContent.json';
import commonContent from '../content/CommonContent.json'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollPrompt from "../components/ScrollPrompt";
import aidbLogo from '../assets/images/aidbLogo.svg';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const AiDBPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="snap-scroll-container">

      <div className="chunk chunk-first">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a
            href={commonContent.aidbWebsiteLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              cursor: 'pointer',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.opacity = '1';
            }}
          >
            <img 
              src={aidbLogo} 
              alt="AiDB Logo" 
              draggable="false"
              style={{
                width: '80px',
                height: '80px',
                pointerEvents: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              }}
            />
            <h1 
              className="page-title" 
              style={{ 
                margin: 0, 
                pointerEvents: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              }}
            >
              {content.title}
            </h1>
          </a>
        </div>
        <div className="home-page-text-box">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>{content.introParagraph}</p>
        </div>

        <ScrollPrompt />
      </div>

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
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e7eb' }}>
            {content.conclusionParagraph2.split('askaidb.com').map((part, index, array) => 
              index === array.length - 1 ? part : (
                <span key={index}>
                  {part}
                  <a
                    href={commonContent.aidbWebsiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#60a5fa',
                      textDecoration: 'underline',
                      textDecorationColor: 'rgba(96, 165, 250, 0.5)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#93c5fd';
                      e.target.style.textDecorationColor = 'rgba(147, 197, 253, 0.8)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#60a5fa';
                      e.target.style.textDecorationColor = 'rgba(96, 165, 250, 0.5)';
                    }}
                  >
                    askaidb.com
                  </a>
                </span>
              )
            )}
          </p>
        </div>
      </div>

    </div>
  )
};

export default AiDBPage;
