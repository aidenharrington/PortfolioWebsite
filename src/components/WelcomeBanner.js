import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import profileImg from "../assets/images/profile_pic_resized.jpg";
import content from "../content/HomePageContent.json"
import '../App.css';

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
    const [isVisible, setIsVisible] = useState(false);
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
                    setIsVisible(true);
                    setText("");
                    setIsDeleting(false);
                } else {
                    setIsVisible(false);
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
            <div className="row align-items-center">
                <div className="col-md-6 text-start">
                    <div className="welcome-text-box">
                        <h1 className="">{staticWelcomeText}</h1>
                        <h2 style={{ minHeight: "30px", visibility: text ? "visible" : "hidden" }}>{text || "\u00A0"}</h2>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="profile-img-container">
                        <img src={profileImg} alt="Profile" className="profile-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeBanner;