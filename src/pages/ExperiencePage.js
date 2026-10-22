import ScrollPrompt from "../components/ScrollPrompt";
import "bootstrap/dist/css/bootstrap.min.css";

const paragraphStyle = (isLast) => ({
  fontSize: "1.1rem",
  lineHeight: "1.8",
  color: "#e5e7eb",
  ...(isLast ? {} : { marginBottom: "1.5rem" }),
});

const ExperiencePage = ({ content }) => {
  return (
    <div className="snap-scroll-container">
      {content.chunks.map((chunk, index) => {
        const isFirst = index === 0;
        const isLast = index === content.chunks.length - 1;

        return (
          <div className={isFirst ? "chunk chunk-first" : "chunk"} key={`${content.title}-${index}`}>
            {isFirst && <h1 className="page-title">{content.title}</h1>}
            <div className="home-page-text-box">
              {chunk.heading && <h5 className="company-name">{chunk.heading}</h5>}
              {isFirst && (
                <>
                  <h6 className="job-title">{content.jobTitle}</h6>
                  <h6 className="job-dates">{content.date}</h6>
                </>
              )}
              {chunk.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  style={paragraphStyle(paragraphIndex === chunk.paragraphs.length - 1)}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {!isLast && <ScrollPrompt />}
          </div>
        );
      })}
    </div>
  );
};

export default ExperiencePage;
