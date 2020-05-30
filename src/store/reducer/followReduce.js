const initialState = {
  followerData: [],
  username: "",
  name: "",
  bio: "",
  pict_profile: "",
  pict_bg: "",
  follower: "",
  following: "",
  created_at: "",
  id: "",
  user_id: "",
};
export default function followReducer(followState = initialState, action) {
  switch (action.type) {
    case "GET_FOLLOWER":
      return {
        ...followState,
        followerData: action.payload,
        name: action.payload.name,
        username: action.payload.username,
        bio: action.payload.bio,
        pict_profile: action.payload.pict_profile,
        pict_bg: action.payload.pict_bg,
        follower: action.payload.follower,
        following: action.payload.following,
        id: action.payload.id,
        user_id: action.payload.user_id,
      };
    default:
      return followState;
  }
}
