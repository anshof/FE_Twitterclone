import axios from "axios";

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
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("is_login", true);
        }

        // set user data

        const token = localStorage.getItem("token");
        const res = await axios.get("http://0.0.0.0:5050/user", {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch({ type: "GET_USER_DATA", payload: res.data });

        // end set user data

        console.warn("cek dari login", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

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
      })
      .catch((error) => {
        console.log("masuk fungsi then get user");
        console.log(error);
      });
  };
};
export const doSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("is_login");
  return {
    type: "SUCCESS_LOGOUT",
  };
};
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
    localStorage.setItem("is_login", true);

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
        // localStorage.setItem("is_modal", true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
