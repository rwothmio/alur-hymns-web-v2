import { ADD_FAV_HYMN_ID, REM_FAV_HYMN_ID } from "../../constants";

const getFavoriteHymnsIds = () => {
  const favoriteHymnsIds = localStorage.getItem("fhi");
  if (favoriteHymnsIds) {
    const parsedArrayOfIds = JSON.parse(favoriteHymnsIds);
    return parsedArrayOfIds;
  }
  return [];
};

const addFavoriteHymnId = (hymnId) => {
  const favoriteHymnsIds = getFavoriteHymnsIds();
  if (favoriteHymnsIds) {
    //add only if the new id is not in the array
    if (!favoriteHymnsIds.includes(hymnId)) {
      const stringifiedArrayOfIds = JSON.stringify([
        ...favoriteHymnsIds,
        hymnId,
      ]);
      localStorage.setItem("fhi", stringifiedArrayOfIds);
    }
  } else {
    localStorage.setItem("fhi", JSON.stringify([hymnId]));
  }
};

const removeFavoriteHymnId = (hymnId) => {
  const favoriteHymnsIds = getFavoriteHymnsIds();
  if (favoriteHymnsIds.includes(hymnId)) {
    const newIds = favoriteHymnsIds.filter(
      (favoriteHymnId) => favoriteHymnId !== hymnId
    );
    const stringifiedArrayOfIds = JSON.stringify(newIds);
    localStorage.setItem("fhi", stringifiedArrayOfIds);
  }
};

const reducer = (state = getFavoriteHymnsIds(), action) => {
  switch (action.type) {
    case ADD_FAV_HYMN_ID: {
      const hymnIdToBeAdded = action.payload;
      addFavoriteHymnId(hymnIdToBeAdded);
      const newIds = getFavoriteHymnsIds();
      return newIds;
    }
    case REM_FAV_HYMN_ID: {
      const hymnIdToBeRemoved = action.payload;
      removeFavoriteHymnId(hymnIdToBeRemoved);
      const newIds = getFavoriteHymnsIds();
      return newIds;
    }

    default:
      return state;
  }
};

export default reducer;
