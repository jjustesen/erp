import { createContext, useCallback, useMemo, useState } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { deepOrange, deepPurple, orange } from "@material-ui/core/colors";

import { getTheme, setTheme } from "../services/theme";

export const ThemeContext = createContext("theme");

const Theme = ({ children }) => {
  const [palletMode, setPallet] = useState(getTheme() || "light");

  const togglePallet = useCallback(() => {
    const newPallet = palletMode === "light" ? "dark" : "light";

    setPallet(newPallet);
    setTheme(newPallet);
  }, [palletMode, setPallet]);

  const darkTheme = useMemo(
    () => ({
      palette: {
        type: "dark",
        primary: {
          main: orange[500],
        },
        secondary: {
          main: deepOrange[900],
        },
      },
    }),
    []
  );

  const lightTheme = useMemo(
    () => ({
      palette: {
        type: "light",
        primary: {
          main: "#25A8AF",
        },
        secondary: {
          main: deepPurple[500],
        },
        error: {
          main: deepOrange[900],
        },
        warning: {
          main: deepOrange[900],
        },
        success: {
          main: deepOrange[900],
        },
        white: { main: "#111" },
      },
    }),
    []
  );

  const theme = createMuiTheme(palletMode === "light" ? lightTheme : darkTheme);

  return (
    <ThemeContext.Provider
      value={{
        palletMode,
        togglePallet,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
