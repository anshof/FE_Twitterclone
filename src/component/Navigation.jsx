import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBFormInline,
  MDBContainer,
  MDBCol,
  MDBLink,
} from "mdbreact";

import "../css/style.css";

const NavbarPage = (state, toggleCollapse, toggle, props) => {
  // state = {
  //   isOpen: false,
  // };

  // toggleCollapse = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // };
  // state = {
  //   modal: false,
  // };

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal,
  //   });
  // };

  return (
    <Router>
      <MDBNavbar
        className="navigation border-bottom fixed-top"
        color="white"
        expand="md"
        style={{ boxShadow: "none" }}
      >
        <MDBContainer style={{ margin: "2px 50px 2px 80px" }}>
          <MDBCol className="d-flex justify-content-start" size="7">
            <MDBNavbarBrand>
              <Link to="/">
                <i className="fab fa-twitter" style={{ color: "#1c9ceb" }}></i>
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div
                    className="md-form d-flex justify-content-center my-0 rounded-pill"
                    style={{ backgroundColor: " #e1e8ed " }}
                  >
                    <i
                      className="fas fa-search ml-4 logo my-auto"
                      style={{ color: "#657786 " }}
                      aria-hidden="true"
                    ></i>
                    <input
                      className="form-control search mr-sm-2 border-0 my-auto ml-3"
                      type="search"
                      placeholder="Search Twitter"
                      aria-label="Search"
                      style={{ width: "400px" }}
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCol>
          {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
          {/* <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
          <MDBCol
            className="d-flex justify-content-end"
            size="5"
            style={{ marginRight: "0" }}
          >
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink
                  to="#!"
                  className="my-0 mx-2 rounded-pill font-weight-bold"
                  style={{
                    width: "90px",
                    color: "#1c9ceb",
                    border: "1px solid #38A1F3",
                  }}
                >
                  Log in
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink
                  // to="#!"
                  className="my-0 mx-2 text-capitalize rounded-pill font-weight-bold"
                  style={{
                    width: "120px",
                    color: "white",
                    border: "1px solid #1c9ceb",
                    backgroundColor: "#1c9ceb",
                  }}
                  // onClick={toggle}
                >
                  Sign up
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <i
                    className="fas fa-ellipsis-h"
                    style={{ color: "#1c9ceb" }}
                  ></i>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCol>
          {/* </MDBCollapse> */}
          {/* </MDBRow> */}
        </MDBContainer>
      </MDBNavbar>
    </Router>
  );
};

export default NavbarPage;
