import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ hymn }) {
  return (
    <Button
      variant="text"
      LinkComponent={Link}
      color="secondary"
      to={`/hymns/${hymn.id}`}
      sx={{ textTransform: "capitalize", fontWeight: 300 }}
    >
      {`${hymn.id}. ${hymn.titles[0]}`}
    </Button>
  );
}

export default LinkButton;
