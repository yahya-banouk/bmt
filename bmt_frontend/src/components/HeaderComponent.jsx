import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "../../src/logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import bmtLogo from "../../src/img/bmtLOGO.png";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <div className="topleft">
            {" "}
            <div className="brand">
              <Navbar.Brand>
                <img src={bmtLogo} width="100pt" height="40pt" />
              </Navbar.Brand>
              <p> Best Moving Trans</p>
            </div>
          </div>
          <div className="topRight">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/edit-profile">
                <li>Profile</li>
              </Link>
              <Link to="/">
                <li>Login</li>
              </Link>
              <Link to="/">
                <li>About us</li>
              </Link>
            </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default HeaderComponent;
