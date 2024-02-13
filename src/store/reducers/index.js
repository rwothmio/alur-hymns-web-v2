import { combineReducers } from "redux";
import currentHymnId from "./currentHymnId";
import favoriteHymnIds from "./favoriteHymnIds";

const reducers = combineReducers({ currentHymnId, favoriteHymnIds });

export default reducers;
