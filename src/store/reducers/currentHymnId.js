import { NEW_HYMN_ID } from "../../constants";

export default (state = "1", action) => {
  switch (action.type) {
    case NEW_HYMN_ID:
      return action.payload;
    default:
      return state;
  }
};
