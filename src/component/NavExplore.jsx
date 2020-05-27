import React from "react";
import {
  MDBNav,
  MDBIcon,
  MDBNavLink,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBox,
  MDBMedia,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBLink,
} from "mdbreact";
import "../css/style.css";

const NavExplore = (props, postSignout) => {
  postSignout = () => {
    props.doSignOut();
    props.history.push("/");
  };
  return (
    <MDBBox>
      <MDBNav className="flex-column pt-2">
        <MDBNavLink to="#!">
          <MDBRow>
            <MDBLink to="/home">
              <MDBCol
                size="5"
                display="flex"
                alignSelf="center"
                className="text-right"
              >
                <i
                  className="fab fa-twitter fa-2x twitternav"
                  style={{ color: "#38A1F3" }}
                ></i>
              </MDBCol>
            </MDBLink>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink to="/home" display="flex" style={{ color: "#38A1F3" }}>
          <MDBRow>
            <MDBCol
              className="pr-0 mr-0 text-right"
              size="5"
              style={{ width: "50px" }}
            >
              <i className="fas fa-home fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="ml-0 text-left pl-0">
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "900",
                }}
              >
                Beranda
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink to="/explore" display="flex" style={{ color: "black" }}>
          <MDBRow>
            <MDBCol
              className="pr-0 mr-0 text-right"
              size="5"
              style={{ width: "50px" }}
            >
              <i className="fas fa-hashtag fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="ml-0 text-left pl-0">
              <span style={{ fontSize: "18px", fontWeight: "900" }}>
                Jelajahi
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink to="/notifikasi" display="flex" style={{ color: "black" }}>
          <MDBRow>
            <MDBCol
              className="pr-0 mr-0 text-right"
              size="5"
              style={{ width: "50px" }}
            >
              <i className="far fa-bell fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="ml-0 text-left pl-0">
              <span style={{ fontSize: "18px", fontWeight: "900" }}>
                Notifikasi
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink to="/pesan" display="flex" style={{ color: "black" }}>
          <MDBRow>
            <MDBCol
              className="pr-0 mr-0 text-right"
              size="5"
              style={{ width: "50px" }}
            >
              <i className="far fa-envelope fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="ml-0 text-left pl-0">
              <span style={{ fontSize: "18px", fontWeight: "900" }}>Pesan</span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink to="/markah" display="flex" style={{ color: "black" }}>
          <MDBRow>
            <MDBCol
              className="pr-0 mr-0 text-right"
              size="5"
              style={{ width: "50px" }}
            >
              <i className="far fa-bookmark fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="ml-0 text-left pl-0">
              <span style={{ fontSize: "18px", fontWeight: "900" }}>
                Markah
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink to="/daftar" display="flex" style={{ color: "black" }}>
          <MDBRow>
            <MDBCol
              className="pr-0 mr-0 text-right"
              size="5"
              style={{ width: "50px" }}
            >
              <i className="fas fa-adjust fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="ml-0 text-left pl-0">
              <span style={{ fontSize: "18px", fontWeight: "900" }}>
                Change theme
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink to="/profile" display="flex" style={{ color: "black" }}>
          <MDBRow>
            <MDBCol
              className="pr-0 mr-0 text-right"
              size="5"
              style={{ width: "50px" }}
            >
              <i className="far fa-user fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="ml-0 text-left pl-0">
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "900",
                  color: "black",
                }}
                className="text-left ml-0 pl-0"
              >
                Profil
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          to="/"
          onClick={() => postSignout()}
          display="flex"
          style={{ color: "black" }}
        >
          <MDBRow>
            <MDBCol
              className="pr-0 mr-0 text-right"
              size="5"
              style={{ width: "50px" }}
            >
              <i className="fas fa-sign-out-alt fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="ml-0 text-left pl-0">
              <span style={{ fontSize: "18px", fontWeight: "900" }}>
                Log out
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBBtn
          color="#38A1F3"
          className="mx-auto rounded-pill text-capitalize text-white"
          style={{
            backgroundColor: "#38A1F3",
            width: "150px",
            fontSize: "14px",
          }}
        >
          Tweet
        </MDBBtn>
        <MDBDropdown className="dropdown">
          <MDBDropdownToggle
            color="transparent"
            className="m-0 p-0"
            style={{ boxShadow: "none" }}
          >
            <MDBBox
              display="flex"
              alignItems="center"
              style={{ color: "black" }}
            >
              <MDBMedia
                object
                className="my-1 ml-4 rounded-circle"
                src={props.pp}
                alt="pict"
                style={{ width: "50px", height: "50px" }}
              />
              <MDBBox className="ml-2 pt-3 text-left">
                <p className="pb-0 mb-0 text-capitalize text-truncate">
                  <strong>{props.nama}</strong>
                </p>
                <p className="pt-0 mt-0 text-lowercase">{props.username}</p>
              </MDBBox>

              <MDBIcon icon="angle-down" className="ml-3" />
            </MDBBox>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>
              <MDBLink to="/profile">Profile</MDBLink>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBLink to="/" onClick={() => postSignout()}>
                Sign Out
              </MDBLink>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNav>
    </MDBBox>
  );
};
export default NavExplore;
