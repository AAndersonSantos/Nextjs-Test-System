"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    purpleTheme: Palette["primary"];
  }
  interface PaletteOptions {
    purpleTheme?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    purpleTheme: true;
  }
}

declare module "@mui/material/Pagination" {
  interface PaginationPropsColorOverrides {
    purpleTheme: true;
  }
}

export const theme = createTheme({
  palette: {
    purpleTheme: {
      main: "#BF3EFF",
      dark: "#9A32CD",
      contrastText: "#ffffff"
    }
  },

  typography: {
    fontFamily: "var(--font-poppins), system-ui, Arial, sans-serif",
    h4: {
      fontFamily: "var(--font-slab), var(--font-poppins), system-ui, Arial, sans-serif",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "var(--font-inter), var(--font-poppins), system-ui, Arial, sans-serif",
      fontWeight: 900,
    },
  },

});
