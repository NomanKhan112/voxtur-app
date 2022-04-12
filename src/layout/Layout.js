import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Layout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#8CEBAF",
      },
      secondary: {
        main: "#fff",
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
