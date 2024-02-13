import React from "react";
import { useAppTheme } from "../../hooks";
import { Button } from "@mui/material";
import {
  MdLightMode as LightModeIcon,
  MdDarkMode as DarkModeIcon,
} from "react-icons/md";

const ModeButton = ({ title, icon }) => {
  const { toggleMode } = useAppTheme();
  return (
    <Button title={title} onClick={toggleMode} color="secondary">
      {icon}
    </Button>
  );
};

function ToggleModeButton() {
  const { theme, toggleMode } = useAppTheme();
  return theme.palette.mode === "light" ? (
    <ModeButton title={"light mode"} icon={<LightModeIcon />} />
  ) : (
    <ModeButton title={"dark mode"} icon={<DarkModeIcon />} />
  );
}

export default ToggleModeButton;
