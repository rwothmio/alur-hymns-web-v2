import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Favorites from "../favorites/Favorites";
import Lyrics from "../lyrics/Lyrics";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import About from "../about/About";
import { Box } from "@mui/material";

function Main() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") navigate("/hymns/1");
  }, [pathname]);
  return (
    <Box maxWidth="sm" pb={6} height={"100vh"} overflow="auto">
      <Routes>
        <Route path="/" Component={Lyrics} />
        <Route path="/:id" Component={Lyrics} />
        <Route path="/hymns/:id" Component={Lyrics} />
        <Route path="/categories" Component={Categories} />
        <Route path="/search" Component={Search} />
        <Route path="/favorites" Component={Favorites} />
        <Route path="/about" Component={About} />
      </Routes>
    </Box>
  );
}

export default Main;
