import axios from "axios";

// get follower for every user
export const getFollower = () => {
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
        await dispatch({ type: "GET_FOLLOWER", payload: response.data });
        console.warn("get follower", response.data);
      })
      .catch((error) => {
        console.log("masuk fungsi then get user");
        console.log(error);
      });
  };
};
