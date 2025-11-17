import "@mui/material/styles";

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

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    purpleTheme: true;
  }
}
