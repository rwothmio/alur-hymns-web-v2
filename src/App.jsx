import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/main/Main";
import MobileBottomNavigation from "./components/mobile-bottom-navigation/MobileBottomNavigation";
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LeftMenuBar from "./components/left-menu-bar/LeftMenuBar";
import RightBar from "./components/right-bar/RightBar";
import { BrowserRouter } from "react-router-dom";
import { useAppTheme } from "./hooks";
import { Provider } from "react-redux";
import store from "../src/store";

function App() {
  const isSmallOrLessScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );
  const isMediumOrAboveScreen = useMediaQuery((theme) =>
    theme.breakpoints.up("md")
  );
  const isLargeOrAboveScreen = useMediaQuery((theme) =>
    theme.breakpoints.up("lg")
  );

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <Container>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              maxWidth="xl"
              p={{ xs: 2, md: 4 }}
            >
              {isMediumOrAboveScreen && <LeftMenuBar />}
              <Main />
              {isSmallOrLessScreen && <MobileBottomNavigation />}
              {isLargeOrAboveScreen && <RightBar />}
            </Stack>
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
