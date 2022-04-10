import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopBar from "../TopBar";
import OrderTab from "./OrderTab";

const OrderSection = () => {
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
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <OrderTab />
    </ThemeProvider>
  );
};

export default OrderSection;
