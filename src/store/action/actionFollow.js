import axios from "axios";

// get following for every user
export const getFollowing = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/follower", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        await dispatch({ type: "GET_FOLLOWING", payload: response.data });
        console.warn("get follower", response.data);
      })
      .catch((error) => {
        console.log("masuk fungsi then get user");
        console.log(error);
      });
  };
};

// get user who does not follow login-user
export const getNoFollower = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/follower/list", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        await dispatch({ type: "GET_NO_FOLLOWER", payload: response.data });
        console.warn("get follower", response.data);
      })
      .catch((error) => {
        console.log("masuk fungsi then get user");
        console.log(error);
      });
  };
};

// get following for every user
export const getFollower = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/follower/follow", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        await dispatch({ type: "GET_FOLLOWER", payload: response.data });
        console.warn("get follower", response.data);
      })
      .catch((error) => {
        console.log("masuk fungsi then get user");
        console.log(error);
      });
  };
};

// post follow
export const postFollow = (e) => {
  return async (dispatch) => {
    const bodyRequest = {
      follower: e,
    };
    console.warn("post follow", bodyRequest);
    const json = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    await axios
      .post("http://0.0.0.0:5050/follower", json, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "POST_FOLLOWER" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// on change when user follow another user
export const changeInputFollow = (e) => {
  return {
    type: "CHANGE_INPUT_FOLLOW",
    payload: e,
  };
};
