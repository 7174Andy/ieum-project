"use client";

import React, { createContext, useMemo, useState } from "react";
import { createCustomTheme } from "../theme";
import { ThemeProvider } from "@mui/material";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const theme = useMemo(() => createCustomTheme(fontSize), [fontSize]);

  return (
    <ThemeContext.Provider value={{ fontSize, setFontSize }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
