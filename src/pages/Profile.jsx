import React from "react";
import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavLink,
  MDBNavItem,
} from "mdbreact";
import { connect } from "react-redux";
import { getUser } from "../store/action/actionUser";
import { getTweetbyUser } from "../store/action/actionTweet";
import NavExplore from "../component/NavExplore";
import LastExplore from "../component/LastExplore";
import Tweets from "../component/Tweets";
import MiddleExplore from "../component/MiddleExplore";
class Profile extends React.Component {
  componentDidMount = async () => {
    this.props.getUser();
    this.props.getTweetbyUser();
  };

  changeRouterDetail = (e) => {
    e.preventDefault();
    this.props.history.push("/profile/" + e.target.value);
  };

  render() {
    // const sles = this.props.getUser.created_at.slice(0, 25);
    return (
      <MDBBox style={{ margin: "0 15px" }}>
        <MDBRow>
          <MDBCol className="pl-0 border-right" size="2" sm="12" md="2">
            <NavExplore
              nama={this.props.userData.name}
              pp={this.props.userData.pict_profile}
              username={this.props.userData.username}
              {...this.props}
            />
          </MDBCol>
          <MDBCol size="6" sm="12" md="6" className="border-right px-0">
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
            />
            {/* nav tab */}
            <MDBBox>
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
                    user_id={el.id}
                    name={el.user_id.name}
                    username={el.user_id.username}
                    pict_profile={el.user_id.pict_profile}
                    tweet={el.tweet}
                    created_at={el.created_at}
                    updated_at={el.updated_at}
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
  };
};
const mapDispatchToProps = {
  getUser,
  getTweetbyUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
