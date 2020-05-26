const initialState = {
  user_id: "",
  tweet: "",
  created_at: "",
  updated_at: "",
  tweetData: [],
};
export default function tweetReducer(tweetState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_TWEET":
      return {
        ...tweetState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "GET_ALL_TWEETS":
      return {
        ...tweetState,
        tweetData: action.payload,
        user_id: action.payload.user_id,
        tweet: action.payload.tweet,
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at,
      };
    case "POST_TWEET":
      return {
        ...tweetState,
      };
    default:
      return tweetState;
  }
}
