import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

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
  },
];
const ContactForm = () => {
  const [contactType, setContactType] = React.useState("");

  const handleChange = (event) => {
    setContactType(event.target.value);
  };
  const label = { inputProps: { "aria-label": "Rush Order" } };

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
        justifyContent: "center",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Box>
        <Grid container spacing={2} sx={styles}>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2} sx={(styles, { mt: 0 })}>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">full name</InputLabel>
                <TextField
                  id="outlined-required"
                  defaultValue="Rayan Marshall"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">company</InputLabel>
                <TextField id="outlined-required" defaultValue="Benutech" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">phone</InputLabel>
                <TextField id="outlined-required" defaultValue="" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="my-input">email</InputLabel>
                <TextField id="outlined-required" defaultValue="" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ mb: 2 }} fullWidth>
                  <FormHelperText
                    sx={{
                      textTransform: "uppercase",
                      ml: 0,
                      color: styles.color.lightWhite,
                    }}
                  >
                    contact type
                  </FormHelperText>
                  <Select
                    value={contactType}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      border: `1px solid  ${styles.color.lightDark}`,
                      borderRadius: 0,
                      color: styles.color.lightWhite,
                    }}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">none </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Checkbox {...label} sx={{ color: styles.color.lightDark }} />{" "}
                <span
                  style={{
                    color: styles.color.lightWhite,
                    fontSize: "0.9rem",
                    textTransform: "capitalize",
                  }}
                >
                  make primary
                </span>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    textTransform: "uppercase",
                    mb: 2,
                    mr: 3,
                    p: 1.5,
                  }}
                  fullWidth={false}
                >
                  <AddOutlinedIcon sx={{ mr: 1 }} /> add new contact
                </Button>
                <Typography
                  variant="body2"
                  sx={{
                    color: styles.color.red,
                    textTransform: "capitalize",
                    display: "inline-block",
                  }}
                >
                  reset
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    postion: "relative",
                    mt: 4,
                  }}
                >
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
                          isEditContacts={true}
                        />
                      </>
                    ))}
                  </Carousel>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={
            (styles,
            { display: "flex", justifyContent: "space-between", mt: 12 })
          }
        >
          <Button
            variant="outlined"
            size="large"
            sx={{ fontWeight: 700 }}
            fullWidth={false}
          >
            <ArrowBackIcon sx={{ mr: 4 }} /> back
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={(styles.button, { fontWeight: 700, ml: 1 })}
            fullWidth={false}
          >
            Next <ArrowForwardIcon sx={{ ml: 4 }} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
