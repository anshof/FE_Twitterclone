import React from "react";
import { MDBBox, MDBRow, MDBCol, MDBMedia, MDBBtn } from "mdbreact";
import moment from "moment";
import dateFormat from "dateformat";

const Tweets = (props, dTweet) => {
  dTweet = async (e) => {
    await props.handleDelete(e);
  };
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
          <MDBBox>
            <p className="text-left mb-0">
              <strong>{props.name}</strong>{" "}
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
                className="far fa-comment-alt"
              ></MDBBtn>
              <MDBBtn
                color="transparent"
                style={{ boxShadow: "none" }}
                className="far fa-edit"
              ></MDBBtn>
              <MDBBtn
                color="transparent"
                style={{ boxShadow: "none" }}
                className="far fa-heart"
              ></MDBBtn>

              <MDBBtn
                value={props.id}
                className="far fa-trash-alt"
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
