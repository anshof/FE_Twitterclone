import React from "react";

import { MDBBox, MDBLink } from "mdbreact";

import "../css/style.css";
const Hashtag = () => {
  return (
    <MDBBox
      className="mt-2 ml-1"
      style={{
        backgroundColor: "#f5f8fa",
        borderRadius: "20px",
      }}
    >
      <MDBBox className="border-bottom">
        <MDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-3"
        >
          <p className="pt-3" style={{ fontWeight: "700", fontSize: "19px" }}>
            Tren Indonesia
          </p>
          <i className="fas fa-cog" style={{ color: "#1c9ceb" }}></i>
        </MDBBox>
      </MDBBox>
      <MDBBox className="border-bottom">
        <MDBBox
          display="flex"
          justifyContent="between"
          className="mx-3 mb-0 mt-1"
        >
          <p className="mb-0" style={{ fontSize: "13px", color: "#657786" }}>
            1 &middot; Populer
          </p>
          <i className="fas fa-chevron-down" style={{ color: "#657786 " }}></i>
        </MDBBox>
        <MDBBox className="my-0 mx-3">
          <p className="text-left my-0" style={{ fontSize: "15px" }}>
            <strong>#setorfotolebaran</strong>
          </p>
          <p
            className="text-left"
            style={{ fontSize: "13px", color: "#657786" }}
          >
            4.320 Tweet
          </p>
        </MDBBox>
      </MDBBox>
      <MDBBox className="border-bottom">
        <MDBBox
          display="flex"
          justifyContent="between"
          className="mx-3 mb-0 mt-1"
        >
          <p className="mb-0" style={{ fontSize: "13px", color: "#657786" }}>
            1 &middot; Populer
          </p>
          <i className="fas fa-chevron-down" style={{ color: "#657786 " }}></i>
        </MDBBox>
        <MDBBox className="my-0 mx-3">
          <p className="text-left my-0" style={{ fontSize: "15px" }}>
            <strong>#setorfotolebaran</strong>
          </p>
          <p
            className="text-left"
            style={{ fontSize: "13px", color: "#657786" }}
          >
            4.320 Tweet
          </p>
        </MDBBox>
      </MDBBox>
      <MDBBox>
        <MDBLink
          to="!#"
          className="text-left"
          style={{ fontSize: "15px", color: "#1c9ceb" }}
        >
          Tampilkan lebih banyak
        </MDBLink>
      </MDBBox>
    </MDBBox>
  );
};
export default Hashtag;
