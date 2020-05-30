import React from "react";

import { MDBBox, MDBFormInline, MDBLink, MDBMedia, MDBBtn } from "mdbreact";

import "../css/style.css";

const LastExplore = () => {
  return (
    <MDBBox className="pt-2">
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
      <MDBBox
        className="mt-2 ml-1"
        style={{
          backgroundColor: "#f5f8fa",
          borderRadius: "20px",
        }}
      >
        <MDBBox className="border-bottom">
          <MDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-3"
          >
            <p className="pt-3" style={{ fontWeight: "700", fontSize: "19px" }}>
              Tren Indonesia
            </p>
            <i className="fas fa-cog" style={{ color: "#1c9ceb" }}></i>
          </MDBBox>
        </MDBBox>
        <MDBBox className="border-bottom">
          <MDBBox
            display="flex"
            justifyContent="between"
            className="mx-3 mb-0 mt-1"
          >
            <p className="mb-0" style={{ fontSize: "13px", color: "#657786" }}>
              1 &middot; Populer
            </p>
            <i
              className="fas fa-chevron-down"
              style={{ color: "#657786 " }}
            ></i>
          </MDBBox>
          <MDBBox className="my-0 mx-3">
            <p className="text-left my-0" style={{ fontSize: "15px" }}>
              <strong>#setorfotolebaran</strong>
            </p>
            <p
              className="text-left"
              style={{ fontSize: "13px", color: "#657786" }}
            >
              4.320 Tweet
            </p>
          </MDBBox>
        </MDBBox>
        <MDBBox className="border-bottom">
          <MDBBox
            display="flex"
            justifyContent="between"
            className="mx-3 mb-0 mt-1"
          >
            <p className="mb-0" style={{ fontSize: "13px", color: "#657786" }}>
              1 &middot; Populer
            </p>
            <i
              className="fas fa-chevron-down"
              style={{ color: "#657786 " }}
            ></i>
          </MDBBox>
          <MDBBox className="my-0 mx-3">
            <p className="text-left my-0" style={{ fontSize: "15px" }}>
              <strong>#setorfotolebaran</strong>
            </p>
            <p
              className="text-left"
              style={{ fontSize: "13px", color: "#657786" }}
            >
              4.320 Tweet
            </p>
          </MDBBox>
        </MDBBox>
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
      <MDBBox
        className="mt-2 ml-1"
        style={{
          backgroundColor: "#f5f8fa",
          borderRadius: "20px",
        }}
      >
        <MDBBox className="border-bottom">
          <MDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-3"
          >
            <p className="pt-3" style={{ fontWeight: "700", fontSize: "19px" }}>
              Untuk diikuti
            </p>
          </MDBBox>
        </MDBBox>
        <MDBBox className="border-bottom">
          <MDBBox display="flex" alignItems="center" justifyContent="between">
            <MDBBox display="flex" alignItems="center">
              <MDBMedia
                object
                className="my-1 ml-4 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                alt="pict"
                style={{ width: "50px", height: "50px" }}
              />
              <MDBBox
                className="ml-3 pt-3 text-left"
                style={{ fontSize: "15px" }}
              >
                <p className="pb-0 mb-0">
                  <strong>AqilaKirana</strong>
                </p>
                <p className="pt-0 mt-0" style={{ color: "#657786" }}>
                  @ara
                </p>
              </MDBBox>
            </MDBBox>
            <MDBBtn
              type="submit"
              color="#1c9ceb"
              className="rounded-pill px-0 mr-3 font-weight-bold py-2 text-capitalize"
              style={{
                backgroundColor: "transparent",
                width: "110px",
                fontSize: "14px",
                boxShadow: "none",
                color: "#1c9ceb",
                border: "1px solid #1c9ceb",
              }}
            >
              Ikuti
            </MDBBtn>
          </MDBBox>
        </MDBBox>
        <MDBBox className="border-bottom">
          <MDBBox
            display="flex"
            alignItems="center"
            justifyContent="between"
            style={{ color: "black" }}
          >
            <MDBBox display="flex" alignItems="center">
              <MDBMedia
                object
                className="my-1 ml-4 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                alt="pict"
                style={{ width: "50px", height: "50px" }}
              />
              <MDBBox
                className="ml-3 pt-3 text-left"
                style={{ fontSize: "15px" }}
              >
                <p className="pb-0 mb-0">
                  <strong>AnaShofiya</strong>
                </p>
                <p className="pt-0 mt-0" style={{ color: "#657786" }}>
                  @anashofiya
                </p>
              </MDBBox>
            </MDBBox>
            <MDBBtn
              type="submit"
              color="#1c9ceb"
              className="rounded-pill px-0 mr-3 font-weight-bold py-2 text-capitalize"
              style={{
                backgroundColor: "transparent",
                width: "110px",
                fontSize: "14px",
                boxShadow: "none",
                color: "#1c9ceb",
                border: "1px solid #1c9ceb",
              }}
            >
              Ikuti
            </MDBBtn>
          </MDBBox>
        </MDBBox>
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
      <MDBBox className="text-left ml-3" style={{ color: "#657786" }}>
        <small>
          Persyaratan Kebijakan privasi Kuki <br /> Informasi iklan Selengkapnya
          <br /> 2020 Twitter, Inc.
        </small>
      </MDBBox>
    </MDBBox>
  );
};

export default LastExplore;
