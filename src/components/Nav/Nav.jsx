import React from "react";
import { Navbar, Container } from "react-bootstrap";

import logo from "../../data/logo.svg";
import Header from "../Header";
import { HeaderRanks } from "../Header/HeaderConstants";

import "./Nav.css";

const Nav = () => {
  return (
    <Navbar bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand>
          <div className="logo-container">
            <img src={logo} className="logo" alt="loading" />
          </div>
          <Header rank={HeaderRanks.THIRD}>My Portfolio</Header>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;