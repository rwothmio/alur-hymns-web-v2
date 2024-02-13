import { Typography } from "@mui/material";
import React from "react";

function SectionTitle({ text }) {
  return (
    <Typography
      variant="h1"
      fontWeight={300}
      fontSize={{ xs: 24, sm: 28, md: 32, lg: 36 }}
      textTransform={"capitalize"}
    >
      {text}
    </Typography>
  );
}

export default SectionTitle;
