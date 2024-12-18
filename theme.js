"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FBBF20",
    },
    secondary: {
      main: "#f50057",
    },
    border: {
      main: "#50AEC3",
      background: "#DCEFF3",
      backgroundDark: "#F9F9F9",
    },
  },
  typography: {
    fontFamily: "var(--font-gmarket)",
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
});
