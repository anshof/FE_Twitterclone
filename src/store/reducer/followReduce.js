const initialState = {
  followingData: [],
  recFollower: [],
  username: "",
  name: "",
  bio: "",
  pict_profile: "",
  pict_bg: "",
  // follower: "",
  following: "",
  created_at: "",
  id: "",
  user_id: "",
  followerData: [],
};
export default function followReducer(followState = initialState, action) {
  switch (action.type) {
    case "GET_FOLLOWING":
      return {
        ...followState,
        followingData: action.payload,
      };
    case "GET_NO_FOLLOWER":
      return {
        ...followState,
        recFollower: action.payload,
      };
    case "GET_FOLLOWER":
      return {
        ...followState,
        followerData: action.payload,
      };
    case "POST_FOLLOWER":
      return {
        ...followState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "CHANGE_INPUT_FOLLOW":
      return {
        ...followState,
      };
    default:
      return followState;
  }
}
