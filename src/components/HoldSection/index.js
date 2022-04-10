import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HoldNavBar from "../Common/HoldNavBar";
import HoldForm from "./HoldForm";
import { styles } from "../../styles";

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
const HoldSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <HoldNavBar styles={styles} />
      <HoldForm styles={styles} />
    </ThemeProvider>
  );
};

export default HoldSection;
