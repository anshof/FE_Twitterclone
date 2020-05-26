import React from "react";
import "../css/style.css";
import { MDBBox, MDBFormInline, MDBLink, MDBMedia, MDBIcon } from "mdbreact";
const LastExplore = () => {
  return (
    <MDBBox className="pt-2">
      <MDBFormInline waves>
        <div
          className="md-form d-flex justify-content-center my-0 rounded-pill"
          style={{ backgroundColor: " #e3f1fc " }}
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
          //   height: "200px",
          backgroundColor: "#e3f1fc",
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
            <p className="pt-3" style={{ fontWeight: "900" }}>
              Tren Indonesia
            </p>
            <i className="fas fa-cog" style={{ color: "#38A1F3" }}></i>
          </MDBBox>
        </MDBBox>
        <MDBBox className="border-bottom">
          <MDBBox
            display="flex"
            justifyContent="between"
            className="mx-3 mb-0 mt-1"
          >
            <p className="mb-0">1 &middot; Populer</p>
            <i
              className="fas fa-chevron-down"
              style={{ color: "#657786 " }}
            ></i>
          </MDBBox>
          <MDBBox className="my-0 mx-3">
            <p className="text-left my-0">
              <strong>#setorfotolebaran</strong>
            </p>
            <p className="text-left">4.320 Tweet</p>
          </MDBBox>
        </MDBBox>
        <MDBBox className="border-bottom">
          <MDBBox
            display="flex"
            justifyContent="between"
            className="mx-3 mb-0 mt-1"
          >
            <p className="mb-0">2 &middot; Populer</p>
            <i
              className="fas fa-chevron-down"
              style={{ color: "#657786 " }}
            ></i>
          </MDBBox>
          <MDBBox className="my-0 mx-3">
            <p className="text-left my-0">
              <strong>#setorfotolebaran</strong>
            </p>
            <p className="text-left">4.320 Tweet</p>
          </MDBBox>
        </MDBBox>
        <MDBBox>
          <MDBLink to="!#" className="text-left">
            Tampilkan lebih banyak
          </MDBLink>
        </MDBBox>
      </MDBBox>
      <MDBBox
        className="mt-2 ml-1"
        style={{
          //   height: "200px",
          backgroundColor: "#e3f1fc",
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
            <p className="pt-3" style={{ fontWeight: "900" }}>
              Untuk diikuti
            </p>
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
              <MDBBox className="ml-2 pt-3 text-left">
                <p className="pb-0 mb-0">
                  <strong>AnaShofiya</strong>
                </p>
                <p className="pt-0 mt-0">@anashofiya</p>
              </MDBBox>
            </MDBBox>
            <i
              className="fas fa-chevron-down mr-3"
              style={{ color: "#657786 " }}
            ></i>
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
              <MDBBox className="ml-2 pt-3 text-left">
                <p className="pb-0 mb-0">
                  <strong>AnaShofiya</strong>
                </p>
                <p className="pt-0 mt-0">@anashofiya</p>
              </MDBBox>
            </MDBBox>
            <i
              className="fas fa-chevron-down mr-3"
              style={{ color: "#657786 " }}
            ></i>
          </MDBBox>
        </MDBBox>
        <MDBBox>
          <MDBLink to="!#" className="text-left">
            Tampilkan lebih banyak
          </MDBLink>
        </MDBBox>
      </MDBBox>
      <MDBBox className="text-left ml-3">
        <small>
          Persyaratan Kebijakan privasi Kuki <br /> Informasi iklan Selengkapnya
          <br /> 2020 Twitter, Inc.
        </small>
      </MDBBox>
    </MDBBox>
  );
};

export default LastExplore;
