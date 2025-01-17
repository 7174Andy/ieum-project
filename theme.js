"use client";

import { createTheme } from "@mui/material";

export const createCustomTheme = (fontSize) => {
  return createTheme({
    palette: {
      primary: {
        main: "#FBBF20",
      },
      secondary: {
        main: "#f50057",
      },
      blue: {
        primary: {
          main: "#529DAD",
        },
        secondary: {
          main: "#A2C4C9",
        },
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
      fontSize: fontSize,
      h1: {
        fontSize: fontSize * 2,
        fontWeight: 500,
      },
      h2: {
        fontSize: fontSize * 1.8,
        fontWeight: 700,
      },
      h3: {
        fontSize: fontSize * 1.5,
        fontWeight: 700,
      },
      h4: {
        fontSize: fontSize * 1.2,
        fontWeight: 700,
      },
      h5: {
        fontSize: fontSize,
        fontWeight: 700,
      },
      body1: {
        fontSize: fontSize,
        fontWeight: 500,
      },
      body2: {
        fontSize: fontSize * 0.75,
        fontWeight: 500,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 360, // Galaxy small
        md: 390, // iPhone base
        lg: 412, // Galaxy large
        xl: 428, // iPhone Pro Max
      },
    },
  });
};
