import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBBox,
  MDBInput,
  MDBIcon,
  MDBMedia,
  MDBBtn,
} from "mdbreact";
import { changeInputTweet, postTweet } from "../store/action/actionTweet";
import { connect } from "react-redux";
import { getUser, doSignOut } from "../store/action/actionUser";
import { getAllTweet, deleteTweet } from "../store/action/actionTweet";
import NavExplore from "../component/NavExplore";
import LastExplore from "../component/LastExplore";
import Tweets from "../component/Tweets";
class Jelajah extends React.Component {
  componentDidMount = async () => {
    console.log("ambil data component did mount");
    await this.props.getUser();
    await this.props.getAllTweet();
  };
  postAfterTweet = async () => {
    await this.props.postTweet();
    await this.props.history.replace("/home");
    await this.props.getAllTweet();
    this.inputReset();
  };
  inputReset = () => {
    const postInput = document.getElementById("postInput");
    postInput.value = "";
  };
  delTweet = async (e) => {
    await this.props.deleteTweet(e);
    await this.props.history.replace("/home");
    await this.props.getAllTweet();
    this.inputReset();
  };
  signOut = async (e) => {
    await this.props.doSignOut(e);
    await this.props.history.replace("/");
  };
  render() {
    return (
      <div style={{ margin: "0 15px" }}>
        <MDBRow>
          {/* left side of jelajah > contain navigation */}
          <MDBCol className="pl-0 border-right" size="2">
            <NavExplore
              nama={this.props.userData.name}
              pp={this.props.userData.pict_profile}
              username={this.props.userData.username}
              handleSignout={(e) => this.signOut(e)}
              {...this.props}
            />
          </MDBCol>
          {/* middle side > contain post tweet and get all tweet */}
          <MDBCol size="6" className="border-right px-0">
            <MDBBox>
              <MDBBox className="border-bottom mx-0 px-0">
                <MDBBox className="pt-3 mx-5 ">
                  <MDBRow className="d-flex justify-content-between">
                    <p style={{ fontWeight: "900" }}>Beranda</p>
                    <MDBIcon far icon="star" />
                  </MDBRow>
                </MDBBox>
              </MDBBox>
              <MDBBox>
                <MDBBox
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  <MDBMedia
                    object
                    className="my-3 ml-4 rounded-circle"
                    src={this.props.userData.pict_profile}
                    alt="pict"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <MDBBox className="w-100 ml-3" style={{ width: "500px" }}>
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
                  style={{ color: "#38A1F3" }}
                >
                  <MDBBox style={{ marginLeft: "90px" }}>
                    <i className="far fa-image fa-2x mr-4"></i>
                    <i className="far fa-image fa-2x mr-4"></i>
                    <i className="fas fa-chart-bar fa-2x mr-4"></i>
                    <i
                      className="far fa-smile fa-2x"
                      style={{ paddingRight: "0px" }}
                    ></i>
                  </MDBBox>
                  <MDBBtn
                    type="submit"
                    color="#38A1F3"
                    className="rounded-pill text-capitalize text-white"
                    style={{
                      backgroundColor: "#38A1F3",
                      width: "150px",
                      fontSize: "14px",
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
            {this.props.tweetData.map((el, index) => (
              <div key={index}>
                <Tweets
                  // index={index}
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
          {/* left side */}
          <MDBCol size="4" className="">
            <LastExplore />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    tweetData: state.tweet.tweetData,
  };
};
const mapDispatchToProps = {
  getUser,
  doSignOut,
  getAllTweet,
  changeInputTweet,
  postTweet,
  deleteTweet,
};
export default connect(mapStateToProps, mapDispatchToProps)(Jelajah);
