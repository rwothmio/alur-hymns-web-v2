import { Box, Button, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../section-title/SectionTitle";
import allHymns from "../../hymnsData";
import LinkButton from "../link-button/LinkButton";

const hymnCategories = [
  ["Pak Yung Foc", allHymns.slice(0, 48)],
  ["Kwac", allHymns.slice(48, 98)],
  ["Both", allHymns.slice(98, 134)],
  ["Woth ku tic", allHymns.slice(134, 191)],
  ["Polo", [...allHymns.slice(191, 209), allHymns[236]]],
  ["Nyol pa Yesu", [...allHymns.slice(209, 220), allHymns[237]]],
  ["Tho ku cer", allHymns.slice(220, 229)],
  ["Dwogo pa Yesu", allHymns.slice(229, 236)],
];

function Categories() {
  const [currentCategory, setCurrentCategory] = useState(hymnCategories[0][0]);
  const handleChange = (event, newValue) => {
    setCurrentCategory(newValue);
  };
  return (
    <Box>
      <SectionTitle text={"hymn categories"} />
      <Tabs value={currentCategory} onChange={handleChange}>
        {hymnCategories.map((category) => (
          <Tab key={category[0]} value={category[0]} label={category[0]} />
        ))}
      </Tabs>
      <Stack direction="column" alignItems="flex-start" py={2}>
        {hymnCategories
          .find((category) => category[0] === currentCategory)[1]
          .map((hymn) => (
            <LinkButton key={hymn.id} hymn={hymn} />
          ))}
      </Stack>
    </Box>
  );
}

export default Categories;
