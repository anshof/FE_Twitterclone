import React from "react";

import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBBox,
  MDBLink,
} from "mdbreact";

import "../css/style.css";

const ModalSignup = (props, postSignup, handleClose) => {
  postSignup = () => {
    props.signUp();
    props.history.push("/");
    alert("You're already registered, but first Log in!");
    console.log("post sign up");
  };
  handleClose = async (e) => {
    await props.toggle(e);
  };
  return (
    <MDBContainer>
      <MDBModal isOpen={props.isOpen} toggle={props.toggle}>
        <MDBModalBody>
          <MDBBox className="d-flex align-items-center">
            <i
              className="fab fa-twitter fa-2x"
              style={{
                color: "#1c9ceb",
                marginLeft: "210px",
                padding: "0",
              }}
            ></i>
            <MDBBox className="ml-auto">
              <MDBLink
                className="d-inline text-capitalize rounded-pill font-weight-bold"
                onClick={() => {
                  postSignup();
                  handleClose();
                }}
                style={{
                  width: "100px",
                  color: "white",
                  fontFamily: "Roboto",
                  border: "1px solid #38A1F3",
                  backgroundColor: "#38A1F3",
                }}
              >
                Next
              </MDBLink>
            </MDBBox>
          </MDBBox>
          <h4 className="mt-3 ml-3 font-weight-bold text-left">
            Create your account
          </h4>
          <MDBBox onSubmit={(e) => e.preventDefault()}>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-left pt-1 pl-3 mb-0 font-weight-bold"
                style={{ fontSize: "14px", color: "#657786 " }}
              >
                Full Name
              </p>
              <input
                type="text"
                id="inputPlaceholderEx"
                className="form-control py-0 pl-3"
                name="name"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "2px",
              }}
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
                className="form-control py-0 pl-3"
                name="username"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-left pt-1 pl-3 font-weight-bold mb-0"
                style={{ fontSize: "14px", color: "#657786 " }}
              >
                Password
              </p>
              <input
                type="password"
                id="inputPlaceholderEx"
                className="form-control py-0 pl-3"
                name="password"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-left pt-1 pl-3 mb-0 font-weight-bold"
                style={{ fontSize: "14px", color: "#657786 " }}
              >
                Bio
              </p>
              <input
                type="text"
                id="inputPlaceholderEx"
                className="form-control py-0 pl-3"
                name="bio"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-left pt-1 pl-3 font-weight-bold mb-0"
                style={{ fontSize: "14px", color: "#657786 " }}
              >
                Link of your picture profile
              </p>
              <input
                type="text"
                id="inputPlaceholderEx"
                className="form-control py-0 pl-3"
                name="pict_profile"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-left pt-1 pl-3 font-weight-bold mb-0"
                style={{ fontSize: "14px", color: "#657786 " }}
              >
                Link of your profile background
              </p>
              <input
                type="text"
                id="inputPlaceholderEx"
                className="form-control py-0 pl-3"
                name="pict_bg"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
          </MDBBox>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};
export default ModalSignup;
