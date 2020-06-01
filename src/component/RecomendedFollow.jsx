import React from "react";

import { MDBBox, MDBMedia, MDBBtn } from "mdbreact";

import "../css/style.css";

const RecomendedFollow = (props, pFollow, oChange) => {
  // post follow
  pFollow = async (e) => {
    console.log(e);
    await props.handleFollow(e);
  };
  oChange = async (e) => {
    await props.onChange(e);
  };
  return (
    <MDBBox className="border-bottom">
      <MDBBox display="flex" alignItems="center" justifyContent="between">
        <MDBBox display="flex" alignItems="center">
          <MDBMedia
            object
            className="my-1 ml-4 rounded-circle"
            src={props.pict_profile}
            alt="pict"
            style={{ width: "50px", height: "50px" }}
          />
          <MDBBox className="ml-3 pt-3 text-left" style={{ fontSize: "15px" }}>
            <p className="pb-0 mb-0">
              <strong className="text-capitalize">{props.name}</strong>
            </p>
            <p className="pt-0 mt-0" style={{ color: "#657786" }}>
              {props.username}
            </p>
          </MDBBox>
        </MDBBox>
        <MDBBtn
          value={props.id}
          type="submit"
          color="#1c9ceb"
          name="follower"
          className="rounded-pill px-0 mr-3 font-weight-bold py-2 text-capitalize"
          style={{
            backgroundColor: "#f5f8fa",
            width: "110px",
            fontSize: "14px",
            boxShadow: "none",
            color: "#1c9ceb",
            border: "1px solid #1c9ceb",
          }}
          onClick={(event) => pFollow(event.target.value)}
        >
          {/* oChange(event.target.value); */}
          Ikuti
        </MDBBtn>
      </MDBBox>
    </MDBBox>
  );
};

export default RecomendedFollow;
