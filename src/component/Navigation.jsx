import React from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBFormInline,
  MDBContainer,
  MDBCol,
  MDBBtn,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
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
                <i className="fab fa-twitter" style={{ color: "#38A1F3" }}></i>
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div
                    className="md-form d-flex justify-content-center my-0 rounded-pill"
                    style={{ backgroundColor: " #aab8c2 " }}
                  >
                    <i
                      className="fas fa-search ml-4 logo my-auto"
                      style={{ color: "#657786 " }}
                      aria-hidden="true"
                    ></i>
                    <input
                      className="form-control search mr-sm-2 border-0 my-0 ml-3"
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
                  className="my-0 mx-2 rounded-pill"
                  style={{
                    width: "90px",
                    color: "#38A1F3",
                    border: "1px solid #38A1F3",
                    fontFamily: "Roboto",
                  }}
                >
                  Log in
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn
                  to="#!"
                  color="info"
                  className="my-0 mx-2 text-capitalize rounded-pill"
                  style={{
                    width: "120px",
                    color: "white",
                  }}
                  // onClick={toggle}
                >
                  Sign up
                </MDBBtn>
                {/* <MDBModal isOpen={state.modal} toggle={toggle}>
                  <MDBModalHeader toggle={toggle}>
                    MDBModal title
                  </MDBModalHeader>
                  <MDBModalBody>(...)</MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggle}>
                      Close
                    </MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                  </MDBModalFooter>
                </MDBModal> */}
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <i className="fas fa-ellipsis-h"></i>
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
