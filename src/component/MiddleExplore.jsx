import React from "react";
import moment from "moment";

import { MDBBox, MDBLink, MDBMedia, MDBBtn } from "mdbreact";

import "../css/style.css";
const MiddleExplore = (props) => {
  return (
    <MDBBox className="pt-1">
      {/* get user name and total tweet */}
      <MDBBox className="d-flex border-bottom">
        <MDBLink to="/home">
          <i
            className="fas fa-arrow-left fa-2x"
            style={{ color: "#1c9ceb" }}
          ></i>
        </MDBLink>
        <MDBBox>
          <MDBBox style={{ color: "black", textAlign: "left" }}>
            <span
              className="text-capitalize"
              style={{ fontSize: "19px", fontWeight: "700" }}
            >
              {props.name}
            </span>
            <br />
            <p className="mb-0" style={{ fontSize: "13px" }}>
              {props.jumlah} tweet
            </p>
          </MDBBox>
        </MDBBox>
      </MDBBox>
      {/* user profile */}
      <MDBBox className="position-relative">
        <MDBMedia
          object
          src={props.pict_bg}
          alt="background"
          className="w-100"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </MDBBox>
      <MDBBox className="position-absolute">
        <MDBMedia
          object
          src={props.pict_profile}
          alt="picture"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "5px solid white",
            margin: "-50px 20px",
          }}
        />
        <MDBBtn
          color="transparent"
          className="rounded-pill beranda text-capitalize font-weight-bold px-0 py-2"
          style={{
            marginLeft: "280px",
            border: "2px solid #38A1F3",
            boxShadow: "none",
            color: "#1c9ceb",
            width: "150px",
            fontSize: "15px",
          }}
        >
          Edit profile
        </MDBBtn>
      </MDBBox>
      <MDBBox
        className="mb-3"
        style={{
          marginTop: "110px",
          textAlign: "left",
          marginLeft: "20px",
        }}
      >
        <p
          className="text-capitalize font-weight-bold mb-0 pb-0"
          style={{ fontSize: "19px" }}
        >
          {props.name}
        </p>
        <p className="mb-2" style={{ fontSize: "15px", color: "#657786" }}>
          {props.username}
        </p>
        <p className="text-capitalize mb-2" style={{ fontSize: "15px" }}>
          {props.bio}
        </p>
        <MDBBox
          display="flex"
          alignItems="baseline"
          style={{ fontSize: "15px", color: "#657786" }}
        >
          <i className="far fa-calendar-alt mr-3"></i>

          <p className="mb-1">
            Bergabung {moment.utc(props.created_at).format("MMMM YYYY")}
          </p>
        </MDBBox>
        <span style={{ fontSize: "15px", color: "#657786" }}>
          <span className="font-weight-bold text-dark">
            {props.totalFollower}
          </span>
          Mengikuti
          <span className="ml-2 font-weight-bold text-dark">
            {props.follower}
          </span>
          Pengikut
        </span>
      </MDBBox>
    </MDBBox>
  );
};
export default MiddleExplore;
