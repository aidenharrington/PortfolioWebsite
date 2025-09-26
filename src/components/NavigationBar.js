import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import commonContent from "../content/CommonContent.json";
import Logo from "./Logo";

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const NavigationBar = () => {
  const homePage = 'home';
  const projectsPage = 'projects';
  const resumePage = 'resume';
  const contactPage = 'contact';
  const scroll = 'scroll';

  const [activePage, setActivePage] = useState(homePage);
  const [pageScrolled, setPageScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setPageScrolled(true);
      } else {
        setPageScrolled(false);
      }
    }

    window.addEventListener(scroll, onScroll);

    return () => window.removeEventListener(scroll, onScroll);
  }, [])

  const onUpdateActivePage = (page) => {
    setActivePage(page);
  }


  return (
    <Navbar expand="md"
      className={`${pageScrolled ? "pageScrolled" : ""} ${expanded ? "expanded" : ""}`}
      expanded={expanded}
      onToggle={handleToggle}>
      <Container>
        <Navbar.Brand as={Link} to={commonContent.homePageLink} onClick={() => onUpdateActivePage(homePage)} className="d-flex align-items-center">
          <Logo size="small" />
          <span className="ms-2 d-none d-md-inline" style={{
            color: '#ffffff',
            fontSize: '1.25rem',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            Aiden Harrington
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to={commonContent.homePageLink}
              className={activePage === homePage ? 'active navbar-link' : 'navbar-link'}
              onClick={() => { onUpdateActivePage(homePage); handleClose(); }}>
              {commonContent.homePageTitle}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={commonContent.projectsPageLink}
              className={activePage === projectsPage ? 'active navbar-link' : 'navbar-link'}
              onClick={() => { onUpdateActivePage(projectsPage); handleClose(); }}>
              {commonContent.projectsPageTitle}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={commonContent.resumePageLink}
              className={activePage === resumePage ? 'active navbar-link' : 'navbar-link'}
              onClick={() => { onUpdateActivePage(resumePage); handleClose(); }}>
              {commonContent.resumePageTitle}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={commonContent.contactPageLink}
              className={activePage === contactPage ? 'active navbar-link' : 'navbar-link'}
              onClick={() => { onUpdateActivePage(contactPage); handleClose(); }}>
              {commonContent.contactPageTitle}
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href={commonContent.gitHubLink} target="_blank" rel="noopener noreferrer" className="text-primary">
                <i className="bi bi-github"></i>
              </a>
              <a
                href={commonContent.linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
