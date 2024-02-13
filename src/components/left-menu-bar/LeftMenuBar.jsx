import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  MdInfoOutline as InfoIcon,
  MdLightMode as LightModeIcon,
  MdDarkMode as DarkModeIcon,
} from "react-icons/md";
import { useAppTheme, useCurrentPage, useNavItems } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LeftMenuBar() {
  //const theme = useTheme();
  const currentHymnId = useSelector((state) => state.currentHymnId);
  const { theme, toggleMode } = useAppTheme();
  const { mainNavItems } = useNavItems();
  const navigate = useNavigate();
  const currentPage = useCurrentPage();

  const handleClick = (value) => {
    if (value === "lyrics") {
      navigate(`/hymns/${currentHymnId || 1}`);
    } else navigate(`/${value}`);
  };

  return (
    <Stack direction="column">
      <Stack>
        {mainNavItems.map((item) => (
          <Box key={item.label}>
            <IconButton
              onClick={() => handleClick(item.value)}
              title={item.value}
              sx={{
                color: currentPage === item.value && "primary.main",
                fontSize: 32,
                mb: 4,
              }}
            >
              {item.icon}
            </IconButton>
          </Box>
        ))}
      </Stack>
      {/* 
      to be used to implement dark mode
      <Box>
        <Button title="about" onClick={() => navigate("/about")}>
          <InfoIcon />
        </Button>
        {theme.palette.mode === "light" ? (
          <Button title="light mode" onClick={toggleMode}>
            <LightModeIcon />
          </Button>
        ) : (
          <Button title="dark mode" onClick={toggleMode}>
            <DarkModeIcon />
          </Button>
        )}
      </Box> */}
    </Stack>
  );
}

export default LeftMenuBar;
