import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LoanInfoForm = () => {
  const styles = {
    "& .MuiTextField-root": {
      mb: 2,
      width: "100%",
      border: "1px solid #7F7F7F",
      backgroundColor: "#222222",
      borderRadius: 0,
    },
    "& .Mui-focused": {
      borderRadius: 0,
    },
    "& .MuiInputBase-input": {
      color: "#adadad",
      height: "1rem",
      padding: "14px",
      textTransform: "capitalize",
    },
    "label ": {
      color: "#E5E5E5",
      textTransform: "uppercase",
      fontSize: "0.6rem",
      display: "inline-block",
    },
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
      <Grid container spacing={2} sx={styles}>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="my-input">loan purpose</InputLabel>
          <TextField id="outlined-required" defaultValue="purchase sale" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="my-input">loan amount</InputLabel>
          <TextField id="outlined-required" defaultValue="$10000.00" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="my-input">loan number</InputLabel>
          <TextField id="outlined-required" defaultValue="12345-3-10" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="my-input">sale amount</InputLabel>
          <TextField id="outlined-required" defaultValue="$987.00" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="my-input">loan type</InputLabel>
          <TextField id="outlined-required" defaultValue="conventional" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="my-input">loan program</InputLabel>
          <TextField
            id="outlined-required"
            defaultValue="optional"
            style={{ backgroundColor: "transparent" }}
          />
        </Grid>
      </Grid>
      <Box
        sx={
          (styles, { display: "flex", justifyContent: "space-between", mt: 12 })
        }
      >
        <Button
          variant="outlined"
          size="large"
          sx={{ fontWeight: 700, mr: 2 }}
          fullWidth={false}
        >
          <ArrowBackIcon sx={{ mr: 4 }} /> back
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ fontWeight: 700 }}
          fullWidth={false}
        >
          Next <ArrowForwardIcon sx={{ ml: 4 }} />
        </Button>
      </Box>
    </Container>
  );
};

export default LoanInfoForm;
