import React from "react";
import {
  MdOutlineLyrics as LyricsIcon,
  MdOutlineDashboard as DashboardIcon,
  MdOutlineFavoriteBorder as FavoriteBorderIcon,
} from "react-icons/md";

const mainNavItems = [
  { title: "lyrics", label: "lyrics", icon: () => <LyricsIcon /> },
  { label: "categories", value: "categories", icon: () => <DashboardIcon /> },
  { label: "search", value: "search", icon: () => <SearchIcon /> },
];

const mobileNavItems = [
  ...mainNavItems,
  {
    label: "favorites",
    value: "favorites",
    icon: () => <FavoriteBorderIcon />,
  },
];

export { mainNavItems, mobileNavItems };
