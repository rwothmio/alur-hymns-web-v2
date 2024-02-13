import React, { useMemo } from "react";
import { useFavorites } from "../../hooks";
import { Button } from "@mui/material";
import {
  MdFavorite as FavoriteContainedIcon,
  MdFavoriteBorder as FavoriteOutlinedIcon,
} from "react-icons/md";
import { useSelector } from "react-redux";

function ToggleFavoriteButton({ hymnId }) {
  const favoriteHymnIds = useSelector((state) => state.favoriteHymnIds);
  const { addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = useMemo(() => {
    return favoriteHymnIds.includes(hymnId);
  }, [favoriteHymnIds]);
  return isFavorite ? (
    <Button onClick={() => removeFromFavorites(hymnId)}>
      <FavoriteContainedIcon />
    </Button>
  ) : (
    <Button onClick={() => addToFavorites(hymnId)}>
      <FavoriteOutlinedIcon />
    </Button>
  );
}

export default ToggleFavoriteButton;
