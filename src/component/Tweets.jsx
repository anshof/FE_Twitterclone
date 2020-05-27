import React from "react";
import { MDBBox, MDBRow, MDBCol, MDBMedia } from "mdbreact";
import moment from "moment";
import dateFormat from "dateformat";
const Tweets = ({
  user_id,
  tweet,
  created_at,
  updated_at,
  pict_profile,
  name,
  username,
}) => {
  const sles = created_at.slice(0, 25);
  const removeKoma = sles.replace(",", "");
  const changeFormat = dateFormat(removeKoma);
  const changeDate = dateFormat(changeFormat, "isoDateTime");
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
                {username} &middot; {moment(changeDate).fromNow()}
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
