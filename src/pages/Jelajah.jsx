import React from "react";
import { connect } from "react-redux";

import {
  MDBRow,
  MDBCol,
  MDBBox,
  MDBInput,
  MDBIcon,
  MDBMedia,
  MDBBtn,
  MDBLink,
  MDBFormInline,
} from "mdbreact";

import {
  changeInputTweet,
  postTweet,
  getAllTweet,
  deleteTweet,
  getTweetbyFollowedUser,
} from "../store/action/actionTweet";
import { getUser, doSignOut } from "../store/action/actionUser";
import {
  getNoFollower,
  postFollow,
  changeInputFollow,
} from "../store/action/actionFollow";

import NavExplore from "../component/NavExplore";
import RecomendedFollow from "../component/RecomendedFollow";
import Tweets from "../component/Tweets";
import Hashtag from "../component/Hashtag";

import "../css/style.css";
import { Redirect } from "react-router-dom";

class Jelajah extends React.Component {
  componentDidMount = async () => {
    console.log("ambil data component did mount");
    await this.props.getUser();
    await this.props.getAllTweet();
    await this.props.getNoFollower();
    await this.props.getTweetbyFollowedUser();
  };
  postAfterTweet = async () => {
    await this.props.postTweet();
    await this.props.history.replace("/home");
    // await this.props.getAllTweet();
    await this.props.getTweetbyFollowedUser();
    this.inputReset();
  };
  postAfterFollow = async (e) => {
    await this.props.postFollow(e);
    await this.props.history.replace("/home");
    await this.props.getNoFollower();
    await this.props.getTweetbyFollowedUser();
  };
  inputReset = () => {
    const postInput = document.getElementById("postInput");
    postInput.value = "";
  };
  delTweet = async (e) => {
    await this.props.deleteTweet(e);
    await this.props.history.replace("/home");
    await this.props.getAllTweet();
    await this.props.getTweetbyFollowedUser();
  };
  signOut = async (e) => {
    await this.props.doSignOut(e);
    await this.props.history.replace("/");
  };

  render() {
    const login = localStorage.getItem("is_login");
    // const login = this.props.login;
    // if (login === null || login === false) {
    //   return alert("You're not log in yet")(<Redirect to="/" />);
    // } else {
    return (
      <div style={{ margin: "0 15px", fontFamily: "Ubuntu" }}>
        {/* {!login ? (
          <Redirect to={{ pathname: "/" }} />
        ) : ( */}
        <MDBRow>
          {/* navigation side (left side) from jelajah page */}
          <MDBCol className="pl-0 border-right" size="2">
            <NavExplore
              nama={this.props.userData.name}
              pp={this.props.userData.pict_profile}
              username={this.props.userData.username}
              handleSignout={(e) => this.signOut(e)}
              {...this.props}
            />
          </MDBCol>
          {/* contain section to post a tweet and get all tweet by all user*/}
          <MDBCol size="6" className="border-right px-0">
            <MDBBox>
              <MDBBox className="border-bottom mx-0 px-0">
                <MDBBox className="pt-3 mx-5 ">
                  <MDBRow className="d-flex justify-content-between">
                    <p style={{ fontWeight: "900", fontSize: "19px" }}>
                      Beranda
                    </p>
                    <MDBIcon far icon="star" style={{ color: "#1c9ceb" }} />
                  </MDBRow>
                </MDBBox>
              </MDBBox>
              {/* post a tweet */}
              <MDBBox className="py-0 my-0">
                <MDBBox
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  <MDBMedia
                    object
                    className="ml-4 rounded-circle"
                    src={this.props.userData.pict_profile}
                    alt="pict"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <MDBBox className="w-100 ml-3">
                    <MDBInput
                      className="border-bottom-0"
                      label="What's happening?"
                      size="lg"
                      id="postInput"
                      name="tweet"
                      onChange={(e) => this.props.changeInputTweet(e)}
                    />
                  </MDBBox>
                </MDBBox>
                <MDBBox
                  display="flex"
                  justifyContent="between"
                  alignItems="center"
                  style={{ color: "#1c9ceb" }}
                >
                  <MDBBox style={{ marginLeft: "90px" }}>
                    <i className="far fa-image fa-2x mr-4 my-0"></i>
                    <i className="far fa-image fa-2x mr-4 my-0"></i>
                    <i className="fas fa-chart-bar fa-2x mr-4 my-0"></i>
                    <i
                      className="far fa-smile fa-2x my-0"
                      style={{ paddingRight: "0px" }}
                    ></i>
                  </MDBBox>
                  <MDBBtn
                    type="submit"
                    color="#1c9ceb"
                    className="rounded-pill text-capitalize py-2 mt-0 mb-2 text-white"
                    style={{
                      backgroundColor: "#1c9ceb",
                      width: "110px",
                      fontSize: "14px",
                      boxShadow: "none",
                    }}
                    onClick={() => this.postAfterTweet()}
                  >
                    Tweet
                  </MDBBtn>
                </MDBBox>
                <MDBBox
                  className="mt-0 pt-0"
                  style={{
                    height: "10px",
                    backgroundColor: "hsla(219, 100%, 96%, 1)",
                  }}
                >
                  <p style={{ opacity: "0" }}>kok</p>
                </MDBBox>
              </MDBBox>
            </MDBBox>
            {/* get all tweets */}
            {this.props.tweetDataFollow.map((el, index) => (
              <div key={index}>
                <Tweets
                  id={el.id}
                  name={el.user_id.name}
                  username={el.user_id.username}
                  pict_profile={el.user_id.pict_profile}
                  tweet={el.tweet}
                  created_at={el.created_at}
                  updated_at={el.updated_at}
                  handleDelete={(e) => this.delTweet(e)}
                />
              </div>
            ))}
          </MDBCol>
          {/* left side from jelajah page> contain search bar, hashtag and recomended user to follow */}
          <MDBCol size="4">
            <MDBBox className="pt-2">
              {/* search bar */}
              <MDBFormInline waves>
                <div
                  className="md-form d-flex justify-content-center my-0 rounded-pill"
                  style={{ backgroundColor: " #e1e8ed " }}
                >
                  <i
                    className="fas fa-search ml-4 logo my-auto"
                    style={{ color: "#657786 " }}
                    aria-hidden="true"
                  ></i>
                  <input
                    className="form-control search border-0 my-0 ml-3"
                    type="search"
                    placeholder="Cari di Twitter"
                    aria-label="Search"
                    style={{ width: "340px" }}
                  />
                </div>
              </MDBFormInline>
              {/* hashtag */}
              <Hashtag />
              {/* recomended user to follow */}
              <MDBBox
                className="mt-2 ml-1"
                style={{
                  backgroundColor: "#f5f8fa",
                  borderRadius: "20px",
                }}
              >
                <MDBBox>
                  <MDBBox className="border-bottom">
                    <MDBBox
                      display="flex"
                      justifyContent="between"
                      alignItems="center"
                      className="mx-3"
                    >
                      <p
                        className="pt-3"
                        style={{ fontWeight: "700", fontSize: "19px" }}
                      >
                        Untuk diikuti
                      </p>
                    </MDBBox>
                  </MDBBox>
                  {this.props.recFollower.map((el, index) => (
                    <div key={index}>
                      <RecomendedFollow
                        id={el.id}
                        username={el.username}
                        name={el.name}
                        pict_profile={el.pict_profile}
                        handleFollow={(e) => this.postAfterFollow(e)}
                      />
                    </div>
                  ))}
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
              </MDBBox>
              <MDBBox className="text-left ml-3" style={{ color: "#657786" }}>
                <small>
                  Persyaratan Kebijakan privasi Kuki <br /> Informasi iklan
                  Selengkapnya
                  <br /> 2020 Twitter, Inc.
                </small>
              </MDBBox>
            </MDBBox>
          </MDBCol>
        </MDBRow>
        {/* )} */}
      </div>
    );
  }
}
// }

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    tweetData: state.tweet.tweetData,
    tweetDataFollow: state.tweet.tweetDataFollow,
    // login: state.user.is_login,
    followerData: state.follow.followerData,
    recFollower: state.follow.recFollower,
  };
};
const mapDispatchToProps = {
  getUser,
  doSignOut,
  getAllTweet,
  changeInputTweet,
  postTweet,
  deleteTweet,
  getNoFollower,
  changeInputFollow,
  postFollow,
  getTweetbyFollowedUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Jelajah);
