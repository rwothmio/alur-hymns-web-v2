import React from "react";
import Favorites from "../favorites/Favorites";
import { Box } from "@mui/material";

function RightBar() {
  return (
    <Box width={200}>
      <Favorites />
    </Box>
  );
}

export default RightBar;
