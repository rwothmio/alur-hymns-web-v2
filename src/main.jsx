import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, useTheme } from "@mui/material";
import useAppTheme from "./hooks/useAppTheme.js";

const RenderApp = () => {
  const { theme } = useAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RenderApp />
  </React.StrictMode>
);
