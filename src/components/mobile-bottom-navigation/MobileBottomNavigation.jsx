import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  MdOutlineLyrics as LyricsIcon,
  MdOutlineDashboard as DashboardIcon,
  MdOutlineFavoriteBorder as FavoriteBorderIcon,
  MdMoreHoriz as MoreHorizIcon,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import ToggleModeButton from "../toggle-mode-button/ToggleModeButton";
import { useCurrentPage, useNavItems } from "../../hooks";

function MobileBottomNavigation() {
  const { mobileNavItems } = useNavItems();
  const currentPage = useCurrentPage();
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    navigate(newValue === "lyrics" ? "/" : newValue);
  };

  const theme = useTheme();
  return (
    <Stack
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        py: 1,
        px: 2,
      }}
    >
      {/* 
      to implement dark mode
      <Box
        sx={{
          height: 56,
          width: 56,
          mb: "-28px",
          borderRadius: "50%",
          bgcolor: (theme) => theme.palette.background.paper,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          boxShadow: 15,
        }}
      >
        <ToggleModeButton />
      </Box> */}
      <BottomNavigation
        sx={{ width: 1, boxShadow: 12, borderRadius: 2 }}
        value={currentPage}
        onChange={handleChange}
      >
        {mobileNavItems.map((item) => (
          <BottomNavigationAction
            key={item.label}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Stack>
  );
}

export default MobileBottomNavigation;
