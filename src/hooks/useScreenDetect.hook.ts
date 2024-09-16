// MODULES
import { useCallback, useEffect, useState } from "react";

// RESOURCES
import {useTheme} from "@mui/material";

export function useScreenDetect() {
  const initialState = {
    isPhone: false,
    isTablet: false,
    isDesktop: false,
    isOversized: false,
  };

  const {breakpoints} = useTheme()
  const [screenType, setScreenType] = useState(initialState);

  const detectScreen = useCallback(() => {
    setScreenType({
      isPhone: window.matchMedia(`(max-width: ${breakpoints.values.tablet - 1}px)`)
        .matches,
      isTablet:
        window.matchMedia(`(min-width: ${breakpoints.values.tablet}px)`).matches &&
        window.matchMedia(`(max-width: ${breakpoints.values.desktop - 1}px)`).matches,
      isDesktop: window.matchMedia(`(min-width: ${breakpoints.values.desktop}px)`)
        .matches,
      isOversized: window.matchMedia(
        `(min-width: ${breakpoints.values.fullWidth + 1}px)`,
      ).matches,
    });
  }, []);

  useEffect(() => {
    detectScreen();
    window.addEventListener("resize", detectScreen);

    return () => {
      window.removeEventListener("resize", detectScreen);
    };
  }, [detectScreen]);

  return screenType;
}
