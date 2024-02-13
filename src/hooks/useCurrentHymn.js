import { useMemo } from "react";
import { useSelector } from "react-redux";
import allHymns from "../hymnsData";

function useCurrentHymn() {
  const currentHymnId = useSelector((state) => state.currentHymnId);
  const currentHymn = useMemo(() => {
    return allHymns.find((hymn) => hymn.id === currentHymnId);
  }, [currentHymnId]);
  return currentHymn;
}

export default useCurrentHymn;
