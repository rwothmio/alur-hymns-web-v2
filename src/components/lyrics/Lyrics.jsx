import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { NEW_HYMN_ID } from "../../constants";
import { useParams } from "react-router-dom";
import { useCurrentHymn } from "../../hooks";
import ToggleFavoriteButton from "../toggle-favorite-button/ToggleFavoriteButton";
import SectionTitle from "../section-title/SectionTitle";

const BodyTitle = ({ text }) => (
  <Typography
    variant="subtitle1"
    sx={{
      fontWeight: 200,
      textAlign: "center",
      textDecoration: "underline",
      fontStyle: "italic",
      textDecorationThickness: 0.2,
    }}
  >
    {text}
  </Typography>
);

const BodyText = ({ text }) => (
  <Typography
    variant="body1"
    sx={{
      fontWeight: 300,
      textAlign: "center",
      fontSize: { xs: 20, lg: 22 },
    }}
  >
    {text}
  </Typography>
);
function Lyrics() {
  const { id: IdParam } = useParams();
  const currentHymnId = useSelector((state) => state.currentHymnId);
  const currentHymn = useCurrentHymn();
  const dispatch = useDispatch();

  useEffect(() => {
    if (IdParam) dispatch({ type: NEW_HYMN_ID, payload: IdParam });
    else dispatch({ type: NEW_HYMN_ID, payload: "1" });
  }, [IdParam]);

  return (
    <Box>
      {currentHymn && (
        <Stack
          direction="row"
          sx={{
            width: 1,
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 2,
          }}
        >
          <span>{currentHymn.id}.</span>
          <SectionTitle text={currentHymn.titles[0]} />
          <ToggleFavoriteButton hymnId={currentHymnId} />
        </Stack>
      )}
      <Box>
        {currentHymn.body.map((part, i) => (
          <Box key={i} mb={4}>
            <Box>
              <BodyTitle text={`verse ${i + 1}`} />
              <BodyText text={part[0]} />
            </Box>
            {part?.[1] && (
              <Box mt={2}>
                <BodyTitle text={"chorus"} />
                <BodyText text={part?.[1]} />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Lyrics;
