import { useLocation } from "react-router-dom";
import _ from "lodash";

const isHymnsPath = (pathname) => {
  if (!_.isString(pathname || pathname.length < 7)) return false;
  return pathname.slice(0, 7) === "/hymns/";
};

function useCurrentPage() {
  const { pathname } = useLocation();
  if (isHymnsPath(pathname)) return "lyrics";
  switch (pathname) {
    case "/search":
      return "search";
    case "/":
      return "lyrics";
    case "/about":
      return "about";
    case "/favorites":
      return "favorites";
    case "/categories":
      return "categories";
  }
}

export default useCurrentPage;
