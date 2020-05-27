import React from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBBox,
  MDBLink,
} from "mdbreact";
const ModalSignup = (props, postSignup, isOpen, toggle, modalClose) => {
  postSignup = () => {
    props.signUp();
    props.history.push("/");
    alert("You're already registered, but first Log in!");
    console.log("post sign up");
  };
  // modalClose = (toggle) => {
  //   // isOpen = props.isOpen;
  //   toggle = props.toggle;
  // };
  return (
    <MDBContainer>
      <MDBModal
        style={{ borderRadius: "50px" }}
        isOpen={props.isOpen}
        toggle={props.toggle}
      >
        <MDBModalBody>
          <MDBBox className="d-flex align-items-center">
            <i
              className="fab fa-twitter fa-2x"
              style={{
                color: "#38A1F3",
                marginLeft: "210px",
                padding: "0",
              }}
            ></i>
            <MDBBox className="ml-auto">
              <MDBLink
                className="d-inline text-capitalize rounded-pill font-weight-bold"
                // onClick={props.toggle}
                onClick={() => postSignup()}
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
                borderRadius: "10px",
              }}
            >
              <p
                className="text-left pt-1 pl-1 mb-0"
                style={{ fontSize: "12px" }}
              >
                Full Name
              </p>
              <input
                type="text"
                id="inputPlaceholderEx"
                className="form-control py-0"
                style={{ borderRadius: "10px" }}
                name="name"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "10px",
              }}
              // onSubmit={(e) => e.preventDefault()}
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
                name="username"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
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
                name="password"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "10px",
              }}
              // onSubmit={(e) => e.preventDefault()}
            >
              <p
                className="text-left pt-1 pl-1 mb-0"
                style={{ fontSize: "12px" }}
              >
                Bio
              </p>
              <input
                type="text"
                id="inputPlaceholderEx"
                className="form-control py-0"
                style={{ borderRadius: "10px" }}
                name="bio"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "10px",
              }}
              // onSubmit={(e) => e.preventDefault()}
            >
              <p
                className="text-left pt-1 pl-1 mb-0"
                style={{ fontSize: "12px" }}
              >
                Link of your picture profile
              </p>
              <input
                type="text"
                id="inputPlaceholderEx"
                className="form-control py-0"
                style={{ borderRadius: "10px" }}
                name="pict_profile"
                onChange={(e) => props.changeInput(e)}
              />
            </MDBBox>
            <MDBBox
              className="md-form mx-3 my-4"
              style={{
                backgroundColor: "hsla(219, 100%, 96%, 1)",
                borderRadius: "10px",
              }}
              // onSubmit={(e) => e.preventDefault()}
            >
              <p
                className="text-left pt-1 pl-1 mb-0"
                style={{ fontSize: "12px" }}
              >
                Link of your profile background
              </p>
              <input
                type="text"
                id="inputPlaceholderEx"
                className="form-control py-0"
                style={{ borderRadius: "10px" }}
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
