const initialState = {
  username: "",
  is_login: false,
  userData: [],
  name: "",
  bio: "",
  pict_profile: "",
  pict_bg: "",
  follower: "",
  following: "",
  created_at: "",
  // is_modal: false,
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        token: action.payload.token,
        is_login: true,
      };
    case "GET_USER_DATA":
      return {
        ...userState,
        userData: action.payload,
        name: action.payload.name,
        username: action.payload.username,
        bio: action.payload.bio,
        pict_profile: action.payload.pict_profile,
        pict_bg: action.payload.pict_bg,
        follower: action.payload.follower,
        following: action.payload.following,
      };
    case "SUCCESS_LOGOUT":
      return {
        ...initialState,
        is_login: false,
      };
    case "SUCCESS_SIGNUP":
      return {
        ...userState,
      };
    default:
      return userState;
  }
}
