import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "../../data/KBLogo.svg";
import Header from "../Header";
import { HeaderRanks } from "../Header/HeaderConstants";
import { PATHS } from "../Router/constants";
import { NAVBAR_TITLES } from "../../data/constants";

import "./AppNavbar.css";

const AppNavbar = () => {
  return (
    <Navbar className="navbar-override" sticky="top">
      <Container className="navbar-container">
        <Navbar.Brand href={PATHS.profileSummary}>
          <div className="logo-container">
            <img src={logo} className="logo" alt="loading" />
          </div>
          <Header rank={HeaderRanks.FOURTH}>Portfolio</Header>
        </Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Link className="link-text" href={PATHS.profileSummary}>
            {NAVBAR_TITLES.Summary}
          </Nav.Link>
          <Nav.Link className="link-text" href={PATHS.skills}>
            {NAVBAR_TITLES.SkillSet}
          </Nav.Link>
          <Nav.Link className="link-text" href={PATHS.experience}>
            {NAVBAR_TITLES.Experience}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
