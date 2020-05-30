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
  // function to handle sign out
  postSignout = async (e) => {
    await props.handleSignout(e);
  };

  return (
    <MDBBox style={{ fontFamily: "Ubuntu" }}>
      <MDBNav className="flex-column pt-2">
        <MDBNavLink
          to="#!"
          className="beranda ml-3 beranda rounded-pill"
          style={{ marginRight: "100px" }}
        >
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
                  style={{ color: "#1c9ceb" }}
                ></i>
              </MDBCol>
            </MDBLink>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          to="/home"
          className="beranda ml-2 rounded-pill"
          style={{ color: "#1c9ceb" }}
        >
          <MDBRow className="d-flex align-items-center">
            <MDBCol className="pr-0 text-right" size="5">
              <i className="fas fa-home fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="text-left pl-0">
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: "700",
                }}
              >
                Beranda
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          className="beranda ml-2 rounded-pill"
          to="/explore"
          style={{ color: "#181818" }}
        >
          <MDBRow className="d-flex align-items-center">
            <MDBCol className="pr-0 text-right" size="5">
              <i className="fas fa-hashtag fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="text-left pl-0">
              <span style={{ fontSize: "19px", fontWeight: "700" }}>
                Jelajahi
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          className="beranda ml-2 rounded-pill"
          to="/notifikasi"
          style={{ color: "#181818" }}
        >
          <MDBRow className="d-flex align-items-center">
            <MDBCol className="pr-0 text-right" size="5">
              <i className="far fa-bell fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="text-left pl-0">
              <span style={{ fontSize: "19px", fontWeight: "700" }}>
                Notifikasi
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          className="beranda ml-2 rounded-pill"
          to="/pesan"
          style={{ color: "#181818" }}
        >
          <MDBRow className="d-flex align-items-center">
            <MDBCol className="pr-0 text-right" size="5">
              <i className="far fa-envelope fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="text-left pl-0">
              <span style={{ fontSize: "19px", fontWeight: "700" }}>Pesan</span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          className="beranda ml-2 rounded-pill"
          to="/markah"
          style={{ color: "#181818" }}
        >
          <MDBRow>
            <MDBCol className="pr-0 text-right" size="5">
              <i className="far fa-bookmark fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="text-left pl-0">
              <span style={{ fontSize: "19px", fontWeight: "700" }}>
                Markah
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          className="beranda ml-2 rounded-pill"
          to="/daftar"
          style={{ color: "#181818" }}
        >
          <MDBRow className="d-flex align-items-center">
            <MDBCol className="pr-0 text-right" size="5">
              <i className="fas fa-adjust fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="text-left pl-0">
              <span style={{ fontSize: "19px", fontWeight: "700" }}>
                Change
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          className="beranda ml-2 rounded-pill"
          to="/profile"
          style={{ color: "#181818" }}
        >
          <MDBRow className="d-flex align-items-center">
            <MDBCol className="pr-0 text-right" size="5">
              <i className="far fa-user fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="text-left pl-0">
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: "700",
                }}
              >
                Profil
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBNavLink
          className="beranda ml-2 rounded-pill"
          to="/"
          onClick={(event) => postSignout(event.target.value)}
          style={{ color: "#181818" }}
        >
          <MDBRow className="d-flex align-items-center">
            <MDBCol className="pr-0 text-right" size="5">
              <i className="fas fa-sign-out-alt fa-2x mr-3"></i>
            </MDBCol>
            <MDBCol size="7" className="text-left pl-0">
              <span style={{ fontSize: "19px", fontWeight: "700" }}>
                Log out
              </span>
            </MDBCol>
          </MDBRow>
        </MDBNavLink>
        <MDBBtn
          color="#38A1F3"
          className="mx-auto rounded-pill py-2 my-3 text-capitalize text-white"
          style={{
            backgroundColor: "#1c9ceb",
            width: "160px",
            fontSize: "14px",
            boxShadow: "none",
          }}
        >
          Tweet
        </MDBBtn>
        <MDBDropdown className="dropdown">
          <MDBDropdownToggle
            color="transparent"
            className="m-0 p-0 beranda rounded-pill"
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
                <p
                  className="pb-0 mb-0 text-capitalize text-truncate"
                  style={{ width: "70px", fontSize: "16px" }}
                >
                  <strong>{props.nama}</strong>
                </p>
                <p className="pt-0 mt-0 text-lowercase">{props.username}</p>
              </MDBBox>

              <MDBIcon icon="angle-down" className="ml-3 pr-2" />
            </MDBBox>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>
              <MDBLink to="/profile">Delete account</MDBLink>
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
