import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import allHymns from "../../hymnsData";
import { Link } from "react-router-dom";
import ToggleFavoriteButton from "../toggle-favorite-button/ToggleFavoriteButton";
import { useFavorites } from "../../hooks";
import SectionTitle from "../section-title/SectionTitle";
import LinkButton from "../link-button/LinkButton";

function Favorites() {
  const { favoriteHymns } = useFavorites();

  return (
    <Box width={1}>
      <SectionTitle text={"Favorites"} />
      {favoriteHymns.length > 0 ? (
        favoriteHymns.map((hymn) => (
          <Stack key={hymn.id} direction="row" justifyContent="space-between">
            <LinkButton hymn={hymn} />
            <ToggleFavoriteButton hymnId={hymn.id} />
          </Stack>
        ))
      ) : (
        <Typography variant="body2" mt={2}>
          You have no favorites
        </Typography>
      )}
    </Box>
  );
}

export default Favorites;
