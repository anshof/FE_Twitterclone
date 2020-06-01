import axios from "axios";

// get all tweets from all users
export const getAllTweet = () => {
  return async (dispatch) => {
    await axios({
      method: "GET",
      url: "http://0.0.0.0:5050/tweet",
    })
      .then(async (response) => {
        dispatch({
          type: "GET_ALL_TWEETS",
          payload: response.data,
        });
        console.log("get all tweets", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// post tweet
export const postTweet = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      tweet: getState().tweet.tweet,
    };
    const json = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    await axios
      .post("http://0.0.0.0:5050/tweet", json, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "POST_TWEET" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// on change when user input a tweet
export const changeInputTweet = (e) => {
  return {
    type: "CHANGE_INPUT_TWEET",
    payload: e,
  };
};

// get tweet by a user
export const getTweetbyUser = (e) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/tweet/user", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "GET_TWEETS_USER", payload: response.data });
        console.warn("get tweet by user", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// delete tweet
export const deleteTweet = (item) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .delete("http://0.0.0.0:5050/tweet/" + item, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "DELETE_TWEET" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// get all tweets from followed-users
export const getTweetbyFollowedUser = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/tweet/tweet", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "GET_FOLLOWED_TWEETS",
          payload: response.data,
        });
        console.log("get all tweets", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
