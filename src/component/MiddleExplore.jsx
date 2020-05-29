import React from "react";
import { MDBBox, MDBLink, MDBMedia, MDBBtn } from "mdbreact";

const MiddleExplore = (props) => {
  const sles = props.created_at.slice(8, 16);
  // const removeKoma = sles.replace(",", "");

  return (
    <MDBBox className="pt-3">
      {/* 1st row  */}
      <MDBBox display="flex" alignItems="center" className="pb-2 border-bottom">
        <MDBLink to="/home">
          <i
            className="fas fa-arrow-left fa-2x"
            style={{ color: "#38A1F3" }}
          ></i>
        </MDBLink>
        <MDBBox style={{ color: "black", textAlign: "left" }}>
          <span className="text-capitalize font-weight-bold">{props.name}</span>
          <br />
          <small className="">jumlah tweet</small>
        </MDBBox>
      </MDBBox>
      {/* 2nd row > profile */}
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
            border: "7px solid white",
            margin: "-50px 20px",
          }}
        />
        <MDBBtn
          color="transparent"
          className="rounded-pill text-capitalize"
          style={{ marginLeft: "280px", border: "2px solid #38A1F3" }}
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
        <p className="text-capitalize font-weight-bold mb-0 pb-0">
          {props.name}
        </p>
        <p className="mb-2">{props.username}</p>
        <p className="text-capitalize mb-2">{props.bio}</p>
        <MDBBox display="flex" alignItems="baseline">
          <i className="far fa-calendar-alt mr-3"></i>

          <p>Bergabung {props.created_at}</p>
        </MDBBox>
        <span>
          <span className="font-weight-bold">{props.following}</span>
          Mengikuti
          <span className="ml-2 font-weight-bold">{props.follower}</span>
          Pengikut
        </span>
      </MDBBox>
    </MDBBox>
  );
};
export default MiddleExplore;
