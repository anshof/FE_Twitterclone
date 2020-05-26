import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBNavLink,
} from "mdbreact";
import { doLogin, changeInputUser } from "../store/action/actionUser";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import "../css/style.css";
import Navigation from "../component/Navigation";
import ExploreHome from "../component/ExploreHome";

import "../css/style.css";
class Home extends React.Component {
  // state = {
  //   modal: false,
  // };

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal,
  //   });
  // };
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/jelajah");
    }
  };
  render() {
    console.warn("home", this);
    return (
      <div>
        <Navigation {...this.props} />
        <MDBContainer
          style={{
            margin: "60px 50px 0px 80px",
          }}
        >
          <MDBRow>
            {/* Left side */}
            <MDBCol size="7">
              <ExploreHome />
            </MDBCol>
            {/* Right side for sign in */}
            <MDBCol size="5">
              <div className="rightHome">
                <div
                  className="mt-3"
                  style={{
                    border: "1px solid #aab8c2",
                    borderRadius: "20px",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src={
                      "https://abs.twimg.com/sticky/illustrations/twitter_login_sidebar_illustration.png"
                    }
                    alt="people"
                    className="w-100"
                  />
                  <p className="my-auto text-left font-weight-bold m-3 py-3">
                    See what’s happening in the world right now
                  </p>
                  <div
                    className="md-form mx-3 my-0"
                    style={{
                      backgroundColor: "hsla(219, 100%, 96%, 1)",
                      borderRadius: "10px",
                    }}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <p
                      className="text-left pt-1 pl-1 mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      Username
                    </p>
                    <input
                      type="text"
                      id="inputPlaceholderEx"
                      className="form-control py-0"
                      style={{ borderRadius: "10px" }}
                      name="namaPengguna"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div
                    className="md-form mx-3 my-0"
                    style={{
                      backgroundColor: "hsla(219, 100%, 96%, 1)",
                      borderRadius: "10px",
                    }}
                  >
                    <p
                      className="text-left pt-1 pl-1 mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      Password
                    </p>
                    <input
                      type="password"
                      id="inputPlaceholderEx"
                      className="form-control py-0"
                      style={{ borderRadius: "10px" }}
                      name="kataKunci"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <Link to="/">
                    <p className="text-left ml-3" style={{ fontSize: "12px" }}>
                      Forgot password?
                    </p>
                  </Link>
                  <div className="px-3 pb-1">
                    <MDBNavLink
                      to="/jelajah"
                      type="submit"
                      className="my-0 rounded-pill font-weight-bold"
                      style={{
                        width: "410px",
                        color: "#38A1F3",
                        border: "1px solid #38A1F3",
                      }}
                      onClick={() => this.postLogin()}
                    >
                      Log in
                    </MDBNavLink>
                  </div>
                  <p className="text-center my-0 py-0">or</p>
                  <div className="px-3 pb-2">
                    <MDBNavLink
                      to="#!"
                      className="mt-0 mb-2 rounded-pill font-weight-bold"
                      style={{
                        width: "410px",
                        color: "white",
                        border: "1px solid #38A1F3",
                        backgroundColor: "#38A1F3",
                      }}
                    >
                      Sign up
                    </MDBNavLink>
                  </div>
                </div>
                <div
                  className="text-left ml-2 mt-3"
                  style={{ fontSize: "12px" }}
                >
                  <p>
                    Terms Privacy policy Cookies Ads info More
                    <i className="fas fa-angle-down pl-2"></i>
                    <br /> &#169; 2020 Twitter, Inc.
                  </p>
                </div>
              </div>
            </MDBCol>
            {/* <MDBContainer>
              <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  MDBModal title
                </MDBModalHeader>
                <MDBModalBody>(...)</MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={this.toggle}>
                    Close
                  </MDBBtn>
                  <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </MDBContainer> */}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
  };
};
const mapDispatchToProps = { doLogin, changeInput: (e) => changeInputUser(e) };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
