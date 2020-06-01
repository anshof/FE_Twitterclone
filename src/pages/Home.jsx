import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBNavLink,
  MDBLink,
  MDBBox,
} from "mdbreact";

import { doLogin, changeInputUser } from "../store/action/actionUser";
import { getUser, signUp } from "../store/action/actionUser";

import Navigation from "../component/Navigation";
import ExploreHome from "../component/ExploreHome";
import ModalSignup from "../component/ModalSignup";

import "../css/style.css";

class Home extends React.Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  postLogin = async () => {
    await this.props.doLogin();
    const login = localStorage.getItem("is_login");
    console.log("dari post login", login);
    if (login) {
      this.props.history.push("/home");
    } else {
      alert("You need to log in first");
    }
  };

  render() {
    const login = localStorage.getItem("is_login");
    return (
      <MDBBox>
        {/* {login ? (
          <Redirect to={{ pathname: "/home" }} />
        ) : ( */}
        <div style={{ fontFamily: "Ubuntu" }}>
          {/* navigation bar (on top) */}
          <Navigation {...this.props} />
          <MDBContainer
            style={{
              margin: "60px 50px 0px 80px",
            }}
          >
            <MDBRow>
              {/* left side of home page*/}
              <MDBCol size="7">
                <ExploreHome {...this.props} />
              </MDBCol>
              {/* Right side for log in and sign up user*/}
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
                    {/* do log in */}
                    <div
                      className="md-form mx-3 my-0"
                      style={{
                        backgroundColor: "hsla(219, 100%, 96%, 1)",
                        borderRadius: "2px",
                      }}
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <p
                        className="text-left pt-1 pl-3 mb-0 font-weight-bold"
                        style={{ fontSize: "14px", color: "#657786 " }}
                      >
                        Username
                      </p>
                      <input
                        type="text"
                        id="inputPlaceholderEx"
                        className="form-control py-0 pl-3 "
                        name="username"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div
                      className="md-form mx-3 my-0"
                      style={{
                        backgroundColor: "hsla(219, 100%, 96%, 1)",
                        borderRadius: "2px",
                      }}
                    >
                      <p
                        className="text-left pt-1 pl-3 mb-0 font-weight-bold"
                        style={{ fontSize: "14px", color: "#657786 " }}
                      >
                        Password
                      </p>
                      <input
                        type="password"
                        id="inputPlaceholderEx"
                        className="form-control pl-3 py-0"
                        name="password"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <Link to="/">
                      <p
                        className="text-left ml-3"
                        style={{ fontSize: "12px" }}
                      ></p>
                    </Link>
                    <div className="px-3 pb-1">
                      <MDBNavLink
                        to="#!"
                        type="submit"
                        className="my-0 beranda rounded-pill font-weight-bold"
                        style={{
                          width: "410px",
                          color: "#1c9ceb",
                          border: "1px solid #1c9ceb",
                        }}
                        onClick={() => this.postLogin()}
                      >
                        Log in
                      </MDBNavLink>
                    </div>
                    <p className="text-center my-0 py-0">or</p>
                    {/* do sign up */}
                    <div className="px-3 pb-2">
                      <MDBLink
                        className="mt-0 mb-2 rounded-pill font-weight-bold"
                        style={{
                          width: "410px",
                          color: "white",
                          border: "1px solid #1c9ceb",
                          backgroundColor: "#1c9ceb",
                        }}
                        onClick={this.toggle}
                      >
                        Sign up
                      </MDBLink>
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
              <ModalSignup
                toggle={this.toggle}
                isOpen={this.state.modal}
                {...this.props}
                handleClose={(e) => this.toggle(e)}
              />
            </MDBRow>
          </MDBContainer>
        </div>
        {/* )} */}
      </MDBBox>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  doLogin,
  getUser,
  signUp,
  changeInput: (e) => changeInputUser(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
