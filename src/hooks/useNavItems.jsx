import React from "react";
import {
  MdOutlineLyrics as LyricsIcon,
  MdOutlineDashboard as DashboardIcon,
  MdOutlineFavoriteBorder as FavoriteBorderIcon,
} from "react-icons/md";
import { FiSearch as SearchIcon } from "react-icons/fi";

const mainNavItems = [
  { label: "lyrics", value: "lyrics", icon: <LyricsIcon /> },
  { label: "categories", value: "categories", icon: <DashboardIcon /> },
  { label: "search", value: "search", icon: <SearchIcon /> },
];

const mobileNavItems = [
  ...mainNavItems,
  {
    label: "favorites",
    value: "favorites",
    icon: <FavoriteBorderIcon />,
  },
];

function useNavItems() {
  return { mainNavItems, mobileNavItems };
}

export default useNavItems;
