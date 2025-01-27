import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import profileImg from "../assets/images/profile_pic.png";
import '../App.css';

const WelcomeBanner = () => {
    const staticWelcomeText = "Welcome to my Portfolio";
    const dynamicWelcomeText = "Hi! I'm Aiden";

    const preDeleteDelay = 1000;
    const typeSpeed = 250;
    const deleteSpeed = 150;

    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(150);

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

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <span className="tagline">{staticWelcomeText}</span>
                            <h1>
                                <span className="txt-rotate">
                                    <span className="wrap">
                                        {text}
                                    </span>
                                </span>
                            </h1>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div>
                            <img src={profileImg} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default WelcomeBanner;