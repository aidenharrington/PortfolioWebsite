import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import commonContent from "../content/CommonContent.json";
import Logo from "./Logo";

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const NavigationBar = () => {
  const homePage = 'home';
  const subscribrPage = 'subscribr';
  const aidbPage = 'aidb';
  const resumePage = 'resume';
  const contactPage = 'contact';

  const location = useLocation();
  const [activePage, setActivePage] = useState(homePage);
  const [pageScrolled, setPageScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  useEffect(() => {
    // Update active page based on current route
    const path = location.pathname;
    if (path === commonContent.homePageLink) {
      setActivePage(homePage);
    } else if (path === commonContent.subscribrPageLink) {
      setActivePage(subscribrPage);
    } else if (path === commonContent.aidbPageLink) {
      setActivePage(aidbPage);
    } else if (path === commonContent.resumePageLink) {
      setActivePage(resumePage);
    } else if (path === commonContent.contactPageLink) {
      setActivePage(contactPage);
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setPageScrolled(true);
      } else {
        setPageScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActivePage = (page) => {
    setActivePage(page);
  }


  return (
    <Navbar expand="md"
      className={`${pageScrolled ? "scrolled" : ""} ${expanded ? "expanded" : ""}`}
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
            <NavDropdown
              title={commonContent.projectsPageTitle}
              id="projects-dropdown"
              className={`navbar-dropdown ${(activePage === subscribrPage || activePage === aidbPage) ? 'active' : ''}`}
            >
              <NavDropdown.Item
                as={Link}
                to={commonContent.subscribrPageLink}
                className={activePage === subscribrPage ? 'active' : ''}
                onClick={() => { onUpdateActivePage(subscribrPage); handleClose(); }}
              >
                Subscribr
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={commonContent.aidbPageLink}
                className={activePage === aidbPage ? 'active' : ''}
                onClick={() => { onUpdateActivePage(aidbPage); handleClose(); }}
              >
                AiDB
              </NavDropdown.Item>
            </NavDropdown>
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
