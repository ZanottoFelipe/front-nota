import { createTheme } from "@mui/material";

export const appTheme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#f5f5f1",
      },
      secondary: {
        main: "#e50914",
      },
      text: {
        primary: "#f5f5f1",
      }
    },
});
