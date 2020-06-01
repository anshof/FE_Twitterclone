import React from "react";
import moment from "moment";
import dateFormat from "dateformat";

import { MDBBox, MDBRow, MDBCol, MDBMedia, MDBBtn } from "mdbreact";

import "../css/style.css";

const Tweets = (props, dTweet) => {
  // delete tweet
  dTweet = async (e) => {
    await props.handleDelete(e);
  };

  // change date format
  const sles = props.created_at.slice(0, 25);
  const removeKoma = sles.replace(",", "");
  const changeFormat = dateFormat(removeKoma);
  const changeDate = dateFormat(changeFormat, "isoDateTime");
  return (
    <MDBBox className="border-bottom mt-2 mb-0">
      <MDBRow style={{ marginLeft: "0px" }}>
        <MDBCol size="2">
          <MDBMedia
            object
            className="mt-2 ml-0 pl-0 rounded-circle"
            src={props.pict_profile}
            alt="pict"
            style={{ width: "50px", height: "50px" }}
          />
        </MDBCol>
        <MDBCol className="pt-2 pl-0" size="10">
          <MDBBox style={{ fontSize: "15px" }}>
            <p className="text-left mb-0">
              <strong className="text-capitalize">{props.name} </strong>
              <span style={{ color: "#777" }}>
                {props.username} &middot; {moment(changeDate).fromNow()}
              </span>
            </p>
            <p className="text-justify pr-3 mb-0">{props.tweet}</p>
            <MDBBox
              display="flex"
              justifyContent="around"
              style={{ color: "#777" }}
            >
              <MDBBtn
                color="transparent"
                style={{ boxShadow: "none" }}
                className="py-2 my-0 far fa-comment-alt"
              ></MDBBtn>
              <MDBBtn
                color="transparent"
                style={{ boxShadow: "none" }}
                className="py-0 my-0 far fa-edit"
              ></MDBBtn>
              <MDBBtn
                color="transparent"
                style={{ boxShadow: "none" }}
                className="py-0 my-0 far fa-heart"
              ></MDBBtn>

              <MDBBtn
                value={props.id}
                className="py-0 my-0 far fa-trash-alt"
                color="transparent"
                style={{ boxShadow: "none" }}
                onClick={(event) => dTweet(event.target.value)}
              ></MDBBtn>
            </MDBBox>
          </MDBBox>
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
};
export default Tweets;
