import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CheckIcon from "@mui/icons-material/Check";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ContactCard from "../Common/ContactCard";
import { Carousel } from "@trendyol-js/react-carousel";
import { styles } from "../../styles";

const contactInfo = [
  {
    name: "rayan marshall",
    loanStatus: "borrower",
    address: "benutech",
    email: "rayan.marshall@benutech.net",
    phoneNo: "210-219-2798",
    isPrimary: true,
  },
  {
    name: "robin thompson",
    loanStatus: "borrower",
    address: "benutech inc",
    email: "robin@benutech.net",
    phoneNo: "210-219-2798",
    isPrimary: false,
  },
  {
    name: "robin thompson",
    loanStatus: "borrower",
    address: "benutech inc",
    email: "robin@benutech.net",
    phoneNo: "210-219-2798",
    isPrimary: false,
  },
];

const SubmitData = () => {
  const settings = {
    show: 2.2,
    slide: 1,
    transition: 0.5,
    swiping: true,
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
        mt: 8,
      }}
    >
      <Grid container spacing={2} sx={styles}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              sx={{
                fontSize: styles.font.large,
                fontWeight: "600",
                display: "flex",
              }}
              color="secondary"
              gutterBottom
            >
              Product info{" "}
              <Link href="#" underline="none" sx={{ fontSize: "0.8rem" }}>
                <EditIcon sx={{ ml: 2, fontSize: "1rem" }} /> Edit
              </Link>
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                fontSize: styles.font.small,
                display: "flex",
                textTransform: "uppercase",
                mb: 1,
              }}
              color="secondary"
            >
              product
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: styles.color.lightDark,
                fontSize: styles.font.large,
              }}
            >
              Appraisal from 100D update and Compilition
            </Typography>
          </Box>
          <List
            sx={{
              py: 0,
              mt: 2,
            }}
            className="w-75"
          >
            <ListItem
              sx={{
                px: 0,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                  gutterBottom
                >
                  need by
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                  }}
                >
                  02-02-2030
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                  gutterBottom
                >
                  est close
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                  }}
                >
                  02-02-2030
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                  gutterBottom
                >
                  rushed
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                  }}
                >
                  yes
                </Typography>
              </Box>
            </ListItem>
            <ListItem
              sx={{
                px: 0,
                color: styles.color.lightDark,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  fontSize: styles.font.small,
                  display: "flex",
                  my: 1,
                  textTransform: "uppercase",
                }}
                color="secondary"
              >
                attachments
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  wordBreak: " break-all",
                }}
              >
                <DescriptionOutlinedIcon
                  sx={{
                    mr: 1,
                    fontSize: styles.font.large,
                  }}
                />
                Purchased_order_signed_2020_2021_final.pdf
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                  wordBreak: " break-all",
                }}
              >
                <DescriptionOutlinedIcon
                  sx={{
                    mr: 1,
                    fontSize: styles.font.large,
                  }}
                />
                Another_Document_signed_2020_2021_final.pdf
              </Box>
            </ListItem>
            <ListItem
              sx={{
                px: 0,
                color: styles.color.lightDark,
              }}
            >
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                  gutterBottom
                >
                  instruction
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              sx={{
                fontSize: styles.font.large,
                fontWeight: "600",
                display: "flex",
              }}
              color="secondary"
              gutterBottom
            >
              Loan info{" "}
              <Link href="#" underline="none" sx={{ fontSize: "0.8rem" }}>
                <EditIcon sx={{ ml: 2, fontSize: "1rem" }} /> Edit
              </Link>
            </Typography>
          </Box>
          <List
            sx={{
              py: 0,
              mt: 2,
            }}
            className="w-75"
          >
            <ListItem
              sx={{
                px: 0,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                  gutterBottom
                >
                  loan purpose
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                    textTransform: "capitalize",
                  }}
                >
                  purchase sale
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                  gutterBottom
                >
                  loan amount
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                  }}
                >
                  $1,000,000
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                  gutterBottom
                >
                  loan number
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                  }}
                >
                  127821-091-10
                </Typography>
              </Box>
            </ListItem>
            <ListItem
              sx={{
                px: 0,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                >
                  sale amount
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                  }}
                >
                  $987654,00
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                >
                  loan type
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                    textTransform: "capitalize",
                  }}
                >
                  Conventional
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: styles.font.small,
                    display: "flex",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                  color="secondary"
                >
                  loan program
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: styles.font.large,
                    color: styles.color.lightDark,
                  }}
                >
                  --
                </Typography>
              </Box>
            </ListItem>
            <Box>
              <Typography
                sx={{
                  fontSize: styles.font.large,
                  fontWeight: "600",
                  display: "flex",
                  mt: 3,
                }}
                color="secondary"
              >
                Contacts
                <Link href="#" underline="none" sx={{ fontSize: "0.8rem" }}>
                  <EditIcon sx={{ ml: 2, fontSize: "1rem" }} /> Edit
                </Link>
              </Typography>
            </Box>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", mt: 3 }}>
                <Carousel
                  className="carosusel"
                  {...settings}
                  rightArrow={
                    <ArrowForwardIcon
                      className="rightArrow"
                      sx={{ color: styles.color.green }}
                    />
                  }
                  leftArrow={
                    <ArrowBackIcon
                      className="backArrow"
                      sx={{ color: styles.color.green }}
                    />
                  }
                >
                  {contactInfo.map((item) => (
                    <>
                      <ContactCard
                        item={item}
                        styles={styles}
                        isEditContacts={false}
                      />
                    </>
                  ))}
                </Carousel>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={(styles, { display: "flex", justifyContent: "center", mt: 6 })}
          >
            <Button
              variant="contained"
              size="large"
              sx={(styles.button, { fontWeight: 700 })}
              fullWidth={false}
            >
              accept and submit order <CheckIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubmitData;
