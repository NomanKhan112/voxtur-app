import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HoldNavBar from "../Common/HoldNavBar";
import DeliveredForm from "./DeliveredForm";
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
const DeliveredSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <HoldNavBar styles={styles} status="delivered" />
      <DeliveredForm styles={styles} />
    </ThemeProvider>
  );
};

export default DeliveredSection;
