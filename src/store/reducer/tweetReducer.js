const initialState = {
  user_id: "",
  tweet: "",
  created_at: "",
  updated_at: "",
  tweetData: [],
  tweetDataUser: [],
  tweetDataFollow: [],
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
    case "GET_FOLLOWED_TWEETS":
      return {
        ...tweetState,
        tweetDataFollow: action.payload,
        user_id: action.payload.user_id,
        tweet: action.payload.tweet,
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at,
      };
    case "GET_TWEETS_USER":
      return {
        ...tweetState,
        tweetDataUser: action.payload,
        user_id: action.payload.user_id,
        tweet: action.payload.tweet,
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at,
      };
    case "POST_TWEET":
      return {
        ...tweetState,
      };
    case "DELETE_TWEET":
      return {
        ...tweetState,
      };
    default:
      return tweetState;
  }
}
