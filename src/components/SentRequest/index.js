import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Sent from "../../../public/images/sent.png";
import { styles } from "../../styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SentRequest = () => {
  return (
    <Box
      sx={{
        backgroundColor: styles.color.black,
        padding: " 1rem",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "50px",
          width: "175px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "boder-box",
        }}
        className="logo"
      >
        <Image src={Logo} sx={{ width: "100%", height: "60px" }} alt="logo" />
        <Typography
          sx={{
            fontSize: " 1.5rem",
            margin: 0,
            textTransform: "uppercase",
            margin: "0.5rem 0",
            fontWeight: "600",
            color: styles.color.lightWhite,
          }}
        >
          voxtur
        </Typography>
      </Box>
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          height: "100%",
          justifyContent: "center",
          my: 4,
        }}
      >
        <Box sx={{ width: "90px", height: "100px", mb: 2 }}>
          <Image
            src={Sent}
            style={{ width: "100%", height: "100%" }}
            alt="Sent"
          />
        </Box>
        <Item
          sx={{
            pt: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: styles.font.large,
              textTransform: "capitalize",
              fontWeight: "500",
              color: styles.color.lightWhite,
              opacity: "0.9",
            }}
          >
            Your request has been sent
          </Typography>
        </Item>

        <Item
          sx={{
            display: "flex",
          }}
          className="w-40"
        >
          <Typography
            sx={{
              my: 1.5,
              fontSize: styles.font.medium,
              color: styles.color.lightDark,
              textTransform: "capitalize",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd
            tempor.
          </Typography>
        </Item>
        <Item
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={
              (styles,
              {
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                m: 2,
              })
            }
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                fontWeight: 700,
                m: 2,
                px: 1.5,
                color: styles.color.green,
                border: `1px solid ${styles.color.green}`,
              }}
              fullWidth={false}
            >
              <ArrowBackIcon sx={{ mr: 2 }} /> back to home screen
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                fontWeight: 700,
                m: 2,
                px: 1.5,
                color: styles.color.black,
                backgroundImage: styles.color.gradient,
                border: `1px solid ${styles.color.green}`,
              }}
              fullWidth={false}
            >
              submit a new order <ArrowForwardIcon sx={{ ml: 2 }} />
            </Button>
          </Box>
        </Item>
      </Stack>
    </Box>
  );
};

export default SentRequest;
