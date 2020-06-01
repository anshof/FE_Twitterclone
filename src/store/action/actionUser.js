import axios from "axios";

// user do login
export const doLogin = () => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: "http://0.0.0.0:5050/login",
      params: {
        username: getState().user.username,
        password: getState().user.password,
      },
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          await dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          // console.log("dari action login", )
          await localStorage.setItem("token", response.data.token);
          await localStorage.setItem("is_login", true);
          const token = localStorage.getItem("token");
          const res = await axios.get("http://0.0.0.0:5050/user", {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json; charset=utf-8",
              Authorization: `Bearer ${token}`,
            },
          });

          dispatch({ type: "GET_USER_DATA", payload: res.data });
          // localStorage.setItem("is_login", true);

          // end set user data

          console.warn("cek dari login", response.data);
        }

        // set user data
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// on change when user login
export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

// get user details
export const getUser = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/user", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        await dispatch({ type: "GET_USER_DATA", payload: response.data });
        console.warn("get user data", response.data);
        localStorage.setItem("is_login", true);
      })
      .catch((error) => {
        console.log("masuk fungsi then get user");
        console.log(error);
      });
  };
};

// user do sign out
export const doSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("is_login");
  return {
    type: "SUCCESS_LOGOUT",
  };
};

// user do sign up
export const signUp = () => {
  return async (dispatch, getState) => {
    console.warn("dari action");
    const bodyRequest = {
      name: getState().user.name,
      username: getState().user.username,
      password: getState().user.password,
      bio: getState().user.bio,
      pict_profile: getState().user.pict_profile,
      pict_bg: getState().user.pict_bg,
    };
    const json = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    localStorage.setItem("is_login", false);

    await axios
      .post("http://0.0.0.0:5050/user", json, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async () => {
        console.warn("dari then action");
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// delete tweet
// export const deleteTweet = (item) => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");
//     await axios
//       .delete("http://0.0.0.0:5050/tweet/" + item, {
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//           Accept: "application/json; charset=utf-8",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then(async (response) => {
//         dispatch({ type: "DELETE_TWEET" });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };
