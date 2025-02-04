import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import profileImg from "../assets/images/profile_pic_resized.jpg";
import content from "../content/HomePageContent.json"
import '../App.css';

const WelcomeBanner = () => {
    const staticWelcomeText = content.welcomeSection.welcome;
    const dynamicWelcomeText = content.welcomeSection.introduction;

    const preDeleteDelay = 1000;
    const typeSpeed = 250;
    const deleteSpeed = 150;

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
                    <h1 className="text-2xl font-semibold">{staticWelcomeText}</h1>
                    <h1 className="text-xl font-medium text-gray-700 mt-2">{text}</h1>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="profile-img-container">
                        <img src={profileImg} alt="Profile" className="profile-img" />
                    </div>
                </div>
            </div>
        </div>






        // <section className="banner" id="home">
        //     <Container ref={containerRef}>
        //         <Row className="align-items-center">
        //             <Col xs={12} md={6} xl={7}>
        //                 <div>
        //                     <span className="tagline">{staticWelcomeText}</span>
        //                     <h1 style={{ minWidth: "350px", textAlign: "left", whiteSpace: "nowrap" }}>
        //                         <span className="txt-rotate">
        //                             <span className="wrap">
        //                                 {text}
        //                             </span>
        //                         </span>
        //                     </h1>
        //                 </div>
        //             </Col>
        //             <Col xs={12} md={6} xl={5}>
        //                 <div className="profile-img-container">
        //                     <img
        //                         src={profileImg}
        //                         alt="Profile Picture"
        //                         className="profile-img"
        //                     />
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>
        // </section>
    );
}

export default WelcomeBanner;