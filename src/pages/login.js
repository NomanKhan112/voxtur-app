import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { styles } from "../styles";

const Login = () => {
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
      <div className="login-container">
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} sm={0} lg={2}>
              {" "}
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <div className="login-wrapper">
                <Box className="login-form" sx={styles}>
                  <Typography
                    sx={{
                      fontSize: styles.font.xlarge,
                      margin: 0,
                      textTransform: "uppercase",
                      margin: "0.5rem 0",
                      fontWeight: "600",
                      color: styles.color.white,
                    }}
                  >
                    login information
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: styles.font.medium,
                      color: styles.color.lightDark,
                    }}
                  >
                    Sed ut perspiciatis un de omnis
                  </Typography>

                  <Box component="form" sx={{ my: 4 }}>
                    <>
                      <InputLabel htmlFor="my-input">
                        Email / username
                      </InputLabel>
                      <TextField
                        id="outlined-required"
                        defaultValue=""
                        sx={{ border: `1px solid  ${styles.color.lightDark}` }}
                      />
                    </>
                    <>
                      <InputLabel htmlFor="my-input">password</InputLabel>
                      <span htmlFor="my-input" className="input-error">
                        forget your password
                      </span>
                      <TextField
                        id="outlined-required"
                        defaultValue=""
                        sx={{ border: `1px solid  ${styles.color.lightDark}` }}
                      />
                    </>
                    <Box sx={styles}>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: styles.color.lime }}
                        size="large"
                        fullWidth={true}
                      >
                        login
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Link href="#" className="">
                  Need an account? Signup
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <div className="login-image"></div>
            </Grid>
            <Grid item xs={12} sm={0} lg={2}>
              {" "}
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default Login;
