import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";

import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { styles } from "../../styles";

const ProductForm = () => {
  const [product, setProduct] = React.useState("");

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const Input = styled("input")({
    display: "none",
  });
  const label = { inputProps: { "aria-label": "Rush Order" } };

  return (
    <Container
      sx={{
        backgroundColor: styles.color.black,
        height: "100%",
        minheight: "100vh",
        my: 6,
        px: 0.5,
      }}
    >
      <Grid container spacing={2} sx={styles}>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mY: 2,
            }}
          >
            <FormControl sx={{ mb: 2, mt: 1 }} fullWidth>
              <FormHelperText
                sx={{
                  textTransform: "uppercase",
                  ml: 0,
                  color: styles.color.lightWhite,
                }}
              >
                select a product
              </FormHelperText>
              <Select
                value={product}
                onChange={handleChange}
                displayEmpty
                sx={{
                  border: `1px solid  ${styles.color.lightDark}`,
                  borderRadius: 0,
                  color: styles.color.lightWhite,
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  Appraisal from 1004D Update and Compilition
                </MenuItem>
                <MenuItem value={10}>
                  Appraisal from 1004D Update and Compilition
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Stack
                component="form"
                noValidate
                spacing={0}
                sx={{ position: "relative", mb: 1 }}
                className="w-48"
              >
                <FormHelperText
                  sx={{
                    textTransform: "uppercase",
                    ml: 0,
                    color: styles.color.lightWhite,
                  }}
                >
                  need by (Optional)
                </FormHelperText>
                <TextField
                  type="date"
                  defaultValue=""
                  sx={{
                    border: `1px solid  ${styles.color.lightDark}`,
                    color: styles.color.lightWhite,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <CalendarMonthIcon
                  sx={{
                    color: styles.color.lightWhite,
                    position: "absolute",
                    top: "36px",
                    right: "5px",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                  }}
                />
              </Stack>
              <Stack
                component="form"
                noValidate
                spacing={0}
                sx={{ position: "relative" }}
                className="w-48"
              >
                <FormHelperText
                  sx={{
                    textTransform: "uppercase",
                    ml: 0,
                    color: styles.color.lightWhite,
                  }}
                >
                  estimated closed (Optional)
                </FormHelperText>
                <TextField
                  type="date"
                  defaultValue=""
                  sx={{
                    border: `1px solid  ${styles.color.lightDark}`,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <CalendarMonthIcon
                  sx={{
                    color: styles.color.lightWhite,
                    position: "absolute",
                    top: "36px",
                    right: "5px",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                  }}
                />
              </Stack>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ mt: 1 }} className="product-textarea">
            <FormHelperText
              sx={{
                textTransform: "uppercase",
                ml: 0,
                color: styles.color.lightWhite,
              }}
            >
              instruction
            </FormHelperText>
            <TextField
              className="hold-textarea"
              multiline
              rows={4}
              fullWidth={true}
              defaultValue="Add as many details as possible. The more the better..."
              sx={{
                border: `1px solid  ${styles.color.lightDark}`,
                backgroundColor: "#000",
                p: "0 !inportant",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Checkbox {...label} sx={{ color: styles.color.lightDark, p: 0.2 }} />{" "}
          <span
            style={{
              color: styles.color.lightWhite,
              fontSize: styles.font.medium,
            }}
          >
            Rush order
          </span>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <InputLabel
          sx={{
            color: styles.color.lightWhite,
            textTransform: "uppercase",
            fontSize: styles.font.small,
            mb: 0.5,
          }}
        >
          attachment
        </InputLabel>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            width: "100%",
            height: "140px",
            border: `2px dotted ${styles.color.lightDark}`,
            backgroundColor: styles.color.lightGreen,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            p: 1,
          }}
        >
          <Typography
            sx={{ mr: 2, color: styles.color.green, display: "flex" }}
          >
            <FilterNoneOutlinedIcon sx={{ mr: 1 }} /> Drag and drop your file
            here, or
          </Typography>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button
              variant="outlined"
              component="span"
              sx={{
                p: 2,
                borderColor: styles.color.green,
                textTransform: "capitalize",
              }}
            >
              Browse your computer
            </Button>
          </label>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            ></IconButton>
          </label>
        </Stack>
      </Box>
      <Box>
        <ListItem
          sx={{
            px: 0,
            color: styles.color.lightWhite,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            mt: 3,
          }}
        >
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
            <CancelOutlinedIcon
              sx={{
                ml: 1,
                fontSize: styles.font.large,
              }}
            />
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
            <CancelOutlinedIcon
              sx={{
                ml: 1,
                fontSize: styles.font.large,
              }}
            />
          </Box>
        </ListItem>
      </Box>
      <Box sx={(styles, { float: "right" })}>
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

export default ProductForm;
