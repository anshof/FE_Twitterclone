import React from "react";
import { connect } from "react-redux";

import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavLink,
  MDBNavItem,
} from "mdbreact";

import { getUser, doSignOut } from "../store/action/actionUser";
import { getTweetbyUser, deleteTweet } from "../store/action/actionTweet";
import { getFollower } from "../store/action/actionFollow";

import NavExplore from "../component/NavExplore";
import LastExplore from "../component/LastExplore";
import Tweets from "../component/Tweets";
import MiddleExplore from "../component/MiddleExplore";

import "../css/style.css";

class Profile extends React.Component {
  componentDidMount = async () => {
    this.props.getUser();
    this.props.getTweetbyUser();
    this.props.getFollower();
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
    this.props.getFollower();
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
          {/* left side */}
          <MDBCol size="4" sm="12" md="4" className="">
            <LastExplore />
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
    followerData: state.follow.followerData,
  };
};
const mapDispatchToProps = {
  getUser,
  getTweetbyUser,
  deleteTweet,
  doSignOut,
  getFollower,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
