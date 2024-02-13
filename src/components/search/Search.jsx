import { Autocomplete, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import allHymns from "../../hymnsData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../section-title/SectionTitle";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      const hymnId = allHymns.find((hymn) => hymn.titles[0] === searchQuery).id;
      const goToHymn = () => navigate(`/hymns/${hymnId}`);
      goToHymn();
      return () => goToHymn();
    }
  }, [searchQuery]);
  return (
    <Box>
      <SectionTitle text={"Search For A Hymn"} />
      <Autocomplete
        id="hymn-search"
        autoFocus={true}
        onChange={(event, newValue) => {
          setSearchQuery(newValue);
        }}
        freeSolo
        sx={{ mt: 2 }}
        options={allHymns.map((hymn) => hymn.titles[0])}
        renderInput={(params) => (
          <TextField {...params} label="enter keyword" />
        )}
      />
    </Box>
  );
}

export default Search;
