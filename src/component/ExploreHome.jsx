import React from "react";
import { Link } from "react-router-dom";

import "../css/style.css";

const ExploreHome = () => {
  return (
    <div
      className="border-top-0 exploreHome border-bottom-0"
      style={{
        border: "1px solid #aab8c2",
        marginTop: "0",
        backgroundColor: "white",
        fontFamily: "Roboto",
      }}
    >
      <div className="d-flex justify-content-between mx-1 align-items-center py-2 px-2">
        <p className="my-auto font-weight-bold">Explore</p>
        <i className="fas fa-cog my-auto" style={{ color: "#38A1F3" }}></i>
      </div>
      <div className="my-0 py-0">
        <img
          className="w-100"
          src={
            "https://pbs.twimg.com/semantic_core_img/1255900301405458433/qNZATm4y?format=jpg&name=small"
          }
          alt="mask"
        />
        <div className="position-relative">
          <p className="covidP pl-2 text-left text-white position-absolute">
            Covid-19 . LIVE
          </p>
          <h4 className="text-left pl-2 updates text-white font-weight-bold position-absolute">
            Updates on the Covid-19 situation in Indonesia
          </h4>
        </div>
      </div>
      <div
        className="mt-0 pt-0"
        style={{
          height: "15px",
          backgroundColor: "hsla(219, 100%, 96%, 1)",
        }}
      >
        <p style={{ opacity: "0" }}>kok</p>
      </div>
      <div className="d-flex justify-content-between border-bottom align-items-center p-2">
        <p className="my-auto font-weight-bold mx-1 ">Trends for you</p>
      </div>
      <Link to="\">
        <div className="listBottom text-left border-bottom p-2">
          <div className=" d-flex justify-content-between ">
            <small className="my-auto text-muted mx-1">
              Trending in Indonesia
            </small>
            <i
              className="fas fa-angle-down pr-3"
              style={{ color: "#aab8c2" }}
            ></i>
          </div>
          <p className="my-auto font-weight-bold mx-1 text-dark">Dentuman</p>
          <small className="text-muted mx-1">13.6K Tweets</small>
        </div>
      </Link>
      <Link to="\">
        <div className="listBottom text-left border-bottom p-2">
          <p className="my-auto font-weight-bold mx-1 text-dark">
            #SumbangSuara
          </p>
          <small className="text-muted mx-1">
            Nyanyi &#38; Donasi bareng Slank!
          </small>
          <div className="mx-1 my-1 d-flex">
            <i className="fas fa-upload" style={{ color: "#aab8c2" }}></i>
            <small className="my-auto text-muted mx-1">
              Trending in Indonesia
            </small>
          </div>
        </div>
      </Link>
      <Link to="\">
        <div className="listBottom text-left border-bottom p-2">
          <div className=" d-flex justify-content-between ">
            <small className="my-auto text-muted mx-1">
              Trending in Indonesia
            </small>
            <i
              className="fas fa-angle-down pr-3"
              style={{ color: "#aab8c2" }}
            ></i>
          </div>
          <p className="my-auto font-weight-bold mx-1 text-dark">Open BO</p>
          <small className="text-muted mx-1">13.6K Tweets</small>
        </div>
      </Link>
      <Link to="\">
        <div className="listBottom text-left border-bottom p-2">
          <div className=" d-flex justify-content-between ">
            <small className="my-auto text-muted mx-1">
              Trending in Indonesia
            </small>
            <i
              className="fas fa-angle-down pr-3"
              style={{ color: "#aab8c2" }}
            ></i>
          </div>
          <p className="my-auto font-weight-bold mx-1 text-dark">
            #keperawanan
          </p>
          <small className="text-muted mx-1">Trending with: Sarah Keihl</small>
        </div>
      </Link>
      <Link to="\">
        <div className="listBottom text-left border-bottom p-2">
          <div className=" d-flex justify-content-between ">
            <small className="my-auto text-muted mx-1">
              Trending in Indonesia
            </small>
            <i
              className="fas fa-angle-down pr-3"
              style={{ color: "#aab8c2" }}
            ></i>
          </div>
          <p className="my-auto font-weight-bold mx-1 text-dark">#BonekaSial</p>
          <small className="text-muted mx-1">39.8K Tweets</small>
        </div>
      </Link>
      <Link to="\">
        <div className="listBottom text-left border-bottom p-2">
          <p className="my-auto mx-1" style={{ color: "#38A1F3" }}>
            Show more
          </p>
        </div>
      </Link>
      <div
        className="mt-0 pt-0"
        style={{
          height: "15px",
          backgroundColor: "hsla(219, 100%, 96%, 1)",
        }}
      >
        <p style={{ opacity: "0" }}>kok</p>
      </div>
      <div className="d-flex justify-content-between border-bottom align-items-center p-2">
        <p className="my-auto font-weight-bold mx-1 ">What's happening</p>
      </div>
      <Link to="\">
        <div className="listBottom d-flex justify-content-between text-left border-bottom p-2">
          <div className="">
            <small className="my-auto text-muted mx-1">Event 4 hours ago</small>
            <p className="my-auto font-weight-bold mx-1 text-dark">Peston</p>
          </div>
          <div>
            <img
              src={
                "https://pbs.twimg.com/semantic_core_img/1204373974068518913/Fjpd9JQb?format=jpg&name=small"
              }
              alt="man"
              className="mx-1"
              style={{ height: "100px", borderRadius: "20px" }}
            />
          </div>
        </div>
      </Link>
      <Link to="\">
        <div className="listBottom text-left border-bottom p-2">
          <p className="my-auto mx-1" style={{ color: "#38A1F3" }}>
            Show more
          </p>
        </div>
      </Link>
    </div>
  );
};
export default ExploreHome;
