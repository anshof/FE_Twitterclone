import React from "react";
import { MDBBox, MDBRow, MDBCol, MDBMedia } from "mdbreact";
import moment from "moment";
const Tweets = ({
  user_id,
  tweet,
  created_at,
  updated_at,
  pict_profile,
  name,
  username,
}) => {
  return (
    <MDBBox className="border-bottom">
      <MDBRow style={{ marginLeft: "0px" }}>
        <MDBCol size="2">
          <MDBMedia
            object
            className="mt-2 ml-0 pl-0 rounded-circle"
            src={pict_profile}
            alt="pict"
            style={{ width: "50px", height: "50px" }}
          />
        </MDBCol>
        <MDBCol className="pt-2 pl-0" size="10">
          <MDBBox>
            <p className="text-left mb-0">
              <strong>{name}</strong>{" "}
              <span style={{ color: "#777" }}>
                {username} &middot; {moment(created_at).fromNow()}
              </span>
            </p>
            <p className="text-justify pr-3">{tweet}</p>
            <MDBBox
              display="flex"
              justifyContent="around"
              className="mb-2"
              style={{ color: "#777" }}
            >
              <i className="far fa-comment-alt"></i>
              <i className="fas fa-sync-alt"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-trash-alt"></i>
            </MDBBox>
          </MDBBox>
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
};
export default Tweets;
