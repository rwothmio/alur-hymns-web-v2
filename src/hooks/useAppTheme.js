import { createTheme } from "@mui/material";
import { useState } from "react";
import { themeConfig } from "../config";

function useAppTheme() {
  const [currentMode, setCurrentMode] = useState("light");

  const toggleMode = () => {
    const newMode = currentMode === "light" ? "dark" : "light";
    setCurrentMode(newMode);
  };

  const lightTheme = createTheme({
    ...themeConfig,
    palette: {
      ...themeConfig.palette,
      mode: "light",
      background: { default: "#FFF4E0", paper: "#FFF4E0" },
    },
  });
  const darkTheme = createTheme({
    ...themeConfig,
    palette: { ...themeConfig.palette, mode: "dark" },
  });

  const theme = currentMode === "light" ? lightTheme : darkTheme;
  return { theme, toggleMode };
}

export default useAppTheme;
