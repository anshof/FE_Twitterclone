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

// post tweet from a certain user
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

export const changeInputTweet = (e) => {
  return {
    type: "CHANGE_INPUT_TWEET",
    payload: e,
  };
};
