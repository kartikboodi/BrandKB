import React from "react";
import { Navbar, Container } from "react-bootstrap";

import logo from "../../data/KBLogo.svg";
import Header from "../Header";
import { HeaderRanks } from "../Header/HeaderConstants";

import "./Nav.css";

const Nav = () => {
  return (
    <Navbar className="navbar-override" sticky="top">
      <Container>
        <Navbar.Brand>
          <div className="logo-container">
            <img src={logo} className="logo" alt="loading" />
          </div>
          <Header rank={HeaderRanks.FOURTH}>Portfolio</Header>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
