import React from "react";
import { connect } from "react-redux";

import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavLink,
  MDBNavItem,
  MDBLink,
  MDBFormInline,
} from "mdbreact";

import { getUser, doSignOut } from "../store/action/actionUser";
import { getTweetbyUser, deleteTweet } from "../store/action/actionTweet";
import {
  getFollowing,
  getNoFollower,
  getFollower,
  postFollow,
} from "../store/action/actionFollow";

import NavExplore from "../component/NavExplore";
import RecomendedFollow from "../component/RecomendedFollow";
import Tweets from "../component/Tweets";
import MiddleExplore from "../component/MiddleExplore";
import Hashtag from "../component/Hashtag";

import "../css/style.css";

class Profile extends React.Component {
  componentDidMount = async () => {
    await this.props.getUser();
    await this.props.getTweetbyUser();
    await this.props.getFollowing();
    await this.props.getFollower();
    await this.props.getNoFollower();
  };

  changeRouterDetail = (e) => {
    e.preventDefault();
    this.props.history.push("/profile/" + e.target.value);
  };
  signOut = async (e) => {
    await this.props.doSignOut(e);
    await this.props.history.replace("/");
  };
  delTweet = async (e) => {
    await this.props.deleteTweet(e);
    await this.props.history.replace("/profile");
    this.props.getTweetbyUser();
  };
  postAfterFollow = async (e) => {
    await this.props.postFollow(e);
    await this.props.history.replace("/profile");
    await this.props.getNoFollower();
    await this.props.getFollowing();
  };
  render() {
    return (
      <MDBBox style={{ margin: "0 15px", fontFamily: "Ubuntu" }}>
        <MDBRow>
          <MDBCol className="pl-0 border-right" size="2" sm="12" md="2">
            {/* navigation side (left side) from profile page */}
            <NavExplore
              nama={this.props.userData.name}
              pp={this.props.userData.pict_profile}
              username={this.props.userData.username}
              handleSignout={(e) => this.signOut(e)}
              {...this.props}
            />
          </MDBCol>
          <MDBCol size="6" sm="12" md="6" className="border-right px-0">
            {/* contain user profile, nav tab and tweet by user */}
            <MiddleExplore
              name={this.props.userData.name}
              username={this.props.userData.username}
              pict_profile={this.props.userData.pict_profile}
              pict_bg={this.props.userData.pict_bg}
              created_at={this.props.userData.created_at}
              bio={this.props.userData.bio}
              follower={this.props.userData.follower}
              following={this.props.userData.following}
              {...this.props}
              jumlah={this.props.tweetDataUser.length}
              totalFollowing={this.props.followingData.length}
              totalFollower={this.props.followerData.length}
            />
            {/* nav tab */}
            <MDBBox style={{ fontSize: "15px" }}>
              <MDBNav className="nav-tabs nav-justified">
                <MDBNavItem>
                  <MDBNavLink to="/profile">Tweet</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/profile/tweetdanbalasan">
                    Tweet &#38; balasan
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/profile/media">Media</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/profile/suka">Suka</MDBNavLink>
                </MDBNavItem>
              </MDBNav>
            </MDBBox>
            <MDBBox>
              {this.props.tweetDataUser.map((el, index) => (
                <MDBBox key={index}>
                  <Tweets
                    index={el.index}
                    id={el.id}
                    name={el.user_id.name}
                    username={el.user_id.username}
                    pict_profile={el.user_id.pict_profile}
                    tweet={el.tweet}
                    created_at={el.created_at}
                    updated_at={el.updated_at}
                    handleDelete={(e) => this.delTweet(e)}
                  />
                </MDBBox>
              ))}
            </MDBBox>
          </MDBCol>
          {/* left side from jelajah page> contain search bar, hashtag and recomended user to follow */}
          <MDBCol size="4" sm="12" md="4">
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
              <MDBBox
                className="text-left ml-3 mb-5"
                style={{ color: "#657786" }}
              >
                <small>
                  Persyaratan Kebijakan privasi Kuki <br /> Informasi iklan
                  Selengkapnya
                  <br /> 2020 Twitter, Inc.
                </small>
              </MDBBox>
            </MDBBox>
          </MDBCol>
        </MDBRow>
      </MDBBox>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    tweetDataUser: state.tweet.tweetDataUser,
    followingData: state.follow.followingData,
    followerData: state.follow.followerData,
    recFollower: state.follow.recFollower,
    login: state.user.is_login,
  };
};
const mapDispatchToProps = {
  getUser,
  getTweetbyUser,
  deleteTweet,
  doSignOut,
  getFollowing,
  getNoFollower,
  getFollower,
  postFollow,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
