import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAV_HYMN_ID, REM_FAV_HYMN_ID } from "../constants";
import allHymns from "../hymnsData";

function useFavorites() {
  const dispatch = useDispatch();
  const [currentIsFavorite, setCurrentIsFavorite] = useState(false);
  const currentHymnId = useSelector((state) => state.currentHymnId);
  const favoriteHymnIds = useSelector((state) => state.favoriteHymnIds);

  const favoriteHymns = useMemo(() => {
    if (Array.isArray(favoriteHymnIds)) {
      return allHymns.filter((hymn) => favoriteHymnIds.includes(hymn.id));
    } else return [];
  }, [favoriteHymnIds]);

  useEffect(() => {
    setCurrentIsFavorite(favoriteHymnIds?.includes(currentHymnId));
  }, [favoriteHymnIds, currentHymnId]);

  const addCurrentToFavorites = () => {
    dispatch({ type: ADD_FAV_HYMN_ID, payload: currentHymnId });
  };

  const removeCurrentFromFavorites = () => {
    dispatch({ type: REM_FAV_HYMN_ID, payload: currentHymnId });
  };

  const addToFavorites = (hymnId) => {
    dispatch({ type: ADD_FAV_HYMN_ID, payload: hymnId });
  };

  const removeFromFavorites = (hymnId) => {
    dispatch({ type: REM_FAV_HYMN_ID, payload: hymnId });
  };
  return {
    favoriteHymns,
    currentIsFavorite,
    addCurrentToFavorites,
    removeCurrentFromFavorites,
    addToFavorites,
    removeFromFavorites,
  };
}

export default useFavorites;
