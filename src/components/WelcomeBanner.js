import { useEffect, useRef, useState } from "react";

import '../App.css';
import profileImg from "../assets/images/profile_pic_resized.jpg";
import content from "../content/HomePageContent.json";

const WelcomeBanner = () => {
    const staticWelcomeText = content.welcomeSection.welcome;
    const dynamicWelcomeText = content.welcomeSection.introduction;

    const preDeleteDelay = 1000;
    const typeSpeed = 300;
    const deleteSpeed = 300;

    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(150);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                setText(dynamicWelcomeText.substring(0, text.length + 1));
                if (text === dynamicWelcomeText) {
                    setTimeout(() => setIsDeleting(true), preDeleteDelay);
                }
            } else {
                setText(dynamicWelcomeText.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => prev + 1);
                }
            }

            setSpeed(isDeleting ? deleteSpeed : typeSpeed);
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, speed, index, dynamicWelcomeText]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setText("");
                    setIsDeleting(false);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = containerRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) observer.unobserve(currentElement);
        };
    }, [])

    return (
        <div ref={containerRef} className="container mt-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 text-center">
                    <div className="welcome-text-box">
                        <h1 style={{ 
                            fontSize: '4rem', 
                            fontWeight: '700', 
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {staticWelcomeText}
                        </h1>
                        <h2 style={{ 
                            minHeight: "40px", 
                            visibility: text ? "visible" : "hidden",
                            fontSize: '1.5rem',
                            fontWeight: '400',
                            color: '#e5e7eb',
                            fontFamily: "'JetBrains Mono', monospace"
                        }}>
                            {text || "\u00A0"}
                        </h2>
                        <div style={{ 
                            marginTop: '2rem',
                            fontSize: '1.1rem',
                            color: '#9ca3af',
                            lineHeight: '1.6'
                        }}>
                            Software Engineer • Backend Developer • System Design
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center mt-4 mt-lg-0">
                    <div className="profile-img-container">
                        <img src={profileImg} alt="Aiden Harrington - Software Engineer" className="profile-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeBanner;