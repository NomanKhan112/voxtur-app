import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Logo from "../../../../public/images/logo.png";

const HoldNavBar = ({ styles, status }) => {
  return (
    <Box
      sx={{
        backgroundColor: styles.color.black,
      }}
    >
      <Container
        sx={{ display: "flex", justifyContent: "space-between", px: 4, py: 1 }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                height: "50px",
                width: "175px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="logo"
            >
              <Image src={Logo} sx={{ width: "100%" }} alt="logo" />
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
          <Grid item xs={12} sm={9}>
            <List
              sx={{
                height: "60px",
                py: 0,
                display: " flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <ListItem
                sx={{
                  px: 0,
                  borderBottom: `3px solid  ${styles.color.lightBlue}`,
                  borderRadius: "1px",
                  marginRight: "2px",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  display="block"
                  sx={{
                    textTransform: "uppercase",
                    color: styles.color.lightWhite,
                  }}
                >
                  placement
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  px: 0,
                  borderBottom: `3px solid  ${styles.color.lightBlue}`,
                  borderRadius: "1px",
                  marginRight: "2px",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  display="block"
                  sx={{
                    textTransform: "uppercase",
                    color: styles.color.lightWhite,
                  }}
                >
                  assignment
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  px: 0,
                  justifyContent: "center",
                  marginRight: "2px",
                  borderBottom: `3px solid  ${
                    status && styles.color.lightBlue
                  }`,
                }}
              >
                <Typography
                  variant="caption"
                  display="block"
                  sx={{
                    textTransform: "uppercase",
                    color: styles.color.lightWhite,
                  }}
                >
                  valuation
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  px: 0,
                  justifyContent: "center",
                  marginRight: "2px",
                  borderBottom: `3px solid  ${
                    status && styles.color.lightBlue
                  }`,
                }}
              >
                <Typography
                  variant="caption"
                  display="block"
                  sx={{
                    textTransform: "uppercase",
                    color: styles.color.lightWhite,
                  }}
                >
                  quality control
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HoldNavBar;
