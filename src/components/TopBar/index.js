import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { styles } from "../../styles";

const TopBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: styles.color.black,
        py: 1,
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          sx={(styles, { backgroundColor: styles.color.black })}
        >
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: "50px",
                width: "175px",
                display: "flex",
                alignItems: "center",
                display: "flex",
              }}
              className="logo"
            >
              <Image
                src={Logo}
                sx={{ width: "100%", height: "60px" }}
                alt="logo"
              />
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
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              color: styles.color.lightWhite,
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontSize: " 1.2rem",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnOutlinedIcon sx={{ mr: 2 }} /> 3650 powers ave, los
              angles, califonia, 90210
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopBar;
