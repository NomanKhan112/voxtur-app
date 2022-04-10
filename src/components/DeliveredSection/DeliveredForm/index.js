import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PanToolIcon from "@mui/icons-material/PanTool";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import ListAltIcon from "@mui/icons-material/ListAlt";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Image from "next/image";

import Delivered from "../../../../public/images/delivered.png";
import Clear from "../../../../public/images/clear.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DeliveredForm = ({ styles }) => {
  const Input = styled("input")({
    display: "none",
  });
  const label = { inputProps: { "aria-label": "marked as recieved" } };
  return (
    <Box
      sx={{
        backgroundColor: styles.color.black,
        minHeight: "100vh",
        height: "100%",
        pb: 6,
      }}
    >
      <Container>
        <Grid container spacing={2} sx={(styles, { pt: 8 })}>
          <Grid item xs={12} sm={2} md={1}>
            <Box sx={{ width: "120px", height: "120px" }}>
              <Image
                src={Delivered}
                style={{ width: "100%", height: "100%" }}
                alt="Delivered"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={7} lg={8}>
            <Stack sx={{ ml: 3, width: "100%" }}>
              <Item sx={{ display: "flex", alignItems: "center", py: 0 }}>
                <Typography
                  sx={{
                    fontSize: styles.font.large,
                    fontWeight: "600",
                    display: "flex",
                    textTransform: "uppercase",
                    color: "#499b36",
                  }}
                  gutterBottom
                >
                  Delivered
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    color: styles.color.lightDark,
                    ml: 0.5,
                  }}
                  gutterBottom
                >
                  April 2,2022-2:12pm
                </Typography>
              </Item>
              <Item sx={{ py: 0 }}>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    display: "flex",
                    textAlign: "left",
                    color: styles.color.lightWhite,
                  }}
                  gutterBottom
                >
                  Appraisal from 1004D Update and Compilition
                </Typography>
              </Item>
              <Item
                sx={{
                  display: "flex",
                  mb: 1,
                  flexWrap: "wrap",
                  py: 0,
                }}
              >
                <Box sx={{ display: "flex", mr: 2 }}>
                  <Typography
                    sx={{
                      fontSize: styles.font.large,
                      display: "flex",
                      textAlign: "left",
                      textTransform: "capitalize",
                      color: styles.color.lightDark,
                    }}
                    gutterBottom
                  >
                    order number:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: styles.font.large,
                      display: "flex",
                      ml: 0.5,
                      color: styles.color.lightDark,
                    }}
                    gutterBottom
                  >
                    0984567566345243434
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mr: 2 }}>
                  <Typography
                    sx={{
                      fontSize: styles.font.large,
                      display: "flex",
                      textTransform: "capitalize",
                      color: styles.color.lightDark,
                    }}
                    gutterBottom
                  >
                    Date:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: styles.font.large,
                      display: "flex",
                      ml: 0.5,
                      color: styles.color.lightDark,
                    }}
                    gutterBottom
                  >
                    05/07/2022
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mr: 2 }}>
                  <Typography
                    sx={{
                      fontSize: styles.font.large,
                      display: "flex",
                      textTransform: "capitalize",
                      color: styles.color.lightDark,
                    }}
                    gutterBottom
                  >
                    Due on:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: styles.font.large,
                      display: "flex",
                      ml: 0.5,
                      color: styles.color.lightDark,
                    }}
                    gutterBottom
                  >
                    10/9/2022
                  </Typography>
                </Box>
              </Item>
              <Item
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  py: 0,
                }}
              >
                <Box sx={{ display: "flex" }}>
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
                        borderColor: styles.color.green,
                        textTransform: "capitalize",
                        py: 1.5,
                        m: 0.5,
                      }}
                    >
                      <ArrowUpwardIcon sx={{ fontSize: styles.font.large }} />{" "}
                      Upload doc
                    </Button>
                  </label>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Button
                    variant="outlined"
                    component="span"
                    sx={{
                      borderColor: styles.color.lightDark,
                      color: styles.color.lightDark,
                      textTransform: "capitalize",
                      py: 1.5,
                      m: 0.5,
                    }}
                  >
                    <PanToolIcon
                      sx={{ fontSize: styles.font.large, mr: 0.5 }}
                    />{" "}
                    Request hold
                  </Button>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Button
                    variant="outlined"
                    component="span"
                    sx={{
                      borderColor: styles.color.green,
                      color: styles.color.green,
                      textTransform: "capitalize",
                      py: 1.5,
                      m: 0.5,
                    }}
                  >
                    <ListAltIcon
                      sx={{ fontSize: styles.font.large, mr: 0.5 }}
                    />{" "}
                    Request revision
                  </Button>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Button
                    variant="outlined"
                    component="span"
                    sx={{
                      borderColor: styles.color.lightDark,
                      color: styles.color.lightDark,
                      textTransform: "capitalize",
                      py: 1.5,
                      m: 0.5,
                    }}
                  >
                    <DoNotDisturbIcon
                      sx={{ fontSize: styles.font.large, mr: 0.5 }}
                    />{" "}
                    Cancel order
                  </Button>
                </Box>
              </Item>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              className="hold-scroll"
            >
              <Typography
                sx={{
                  fontSize: styles.font.medium,
                  fontWeight: "600",
                  display: "flex",
                  color: styles.color.lightWhite,
                  textTransform: "capitalize",
                }}
                gutterBottom
              >
                contacts
              </Typography>
              <Card
                sx={{
                  width: 300,
                  height: "130px",
                  backgroundColor: styles.color.darkGrey,
                  px: 0,
                  overflowY: "scroll",
                }}
              >
                <CardContent sx={{ px: 0, py: 1 }}>
                  <Stack sx={{ width: "100%" }}>
                    <Item
                      sx={{
                        display: "flex",
                        px: 2,
                        py: 0,
                        alignItems: "start",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: styles.font.medium,
                          textTransform: "capitalize",
                          fontWeight: "500",
                          color: styles.color.lightWhite,
                        }}
                      >
                        robin marshall
                      </Typography>
                      <Typography
                        sx={{
                          mb: 1.5,
                          fontSize: styles.font.small,
                          color: styles.color.lightDark,
                          textTransform: "capitalize",
                        }}
                      >
                        borrower
                      </Typography>
                    </Item>
                    <Divider
                      sx={{
                        width: "100%",
                        backgroundColor: styles.color.lightDark,
                        mb: 1,
                      }}
                    />
                    <Item
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        flexDirection: "column",
                        px: 2,
                        py: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: styles.font.medium,
                          textTransform: "capitalize",
                          fontWeight: "500",
                          color: styles.color.lightWhite,
                        }}
                      >
                        robin marshall
                      </Typography>
                      <Typography
                        sx={{
                          mb: 1.5,
                          fontSize: styles.font.small,
                          color: styles.color.lightDark,
                          textTransform: "capitalize",
                        }}
                      >
                        borrower
                      </Typography>
                    </Item>
                  </Stack>
                  <Divider
                    sx={{
                      width: "100%",
                      backgroundColor: styles.color.lightDark,
                      mb: 1,
                    }}
                  />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={(styles, { pt: 12 })}>
          <Grid item xs={12} sm={5} md={6}>
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              className="hold-scroll"
            >
              <Typography
                sx={{
                  fontSize: styles.font.medium,
                  fontWeight: "600",
                  display: "flex",
                  color: styles.color.lightWhite,
                  textTransform: "capitalize",
                }}
                gutterBottom
              >
                !! Action required
              </Typography>
              <Card
                sx={{
                  Width: "100%",
                  height: "520px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: styles.color.darkGrey,
                }}
              >
                <Image
                  src={Clear}
                  style={{ width: "100%", height: "100%" }}
                  alt="clear"
                />
                <Typography
                  sx={{
                    fontSize: styles.font.medium,
                    fontWeight: "600",
                    color: "#499b36",
                    mt: 1,
                  }}
                >
                  All clear!
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Typography
              sx={{
                fontSize: styles.font.medium,
                fontWeight: "600",
                display: "flex",
                color: styles.color.lightWhite,
                textTransform: "capitalize",
              }}
              gutterBottom
            >
              Activity
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #3d3c40",
              }}
              className="hold-scroll"
            >
              <List
                sx={{
                  width: "100%",
                  height: "30px",
                  px: 2,
                  py: 0,
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#3d3c40",
                }}
              >
                <ListItem
                  sx={{
                    px: 0,
                    marginRight: "2px",
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
                    date
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
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
                    event
                  </Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{
                      textTransform: "uppercase",
                      color: styles.color.lightWhite,
                    }}
                  >
                    details
                  </Typography>
                </ListItem>
              </List>
              <Card
                sx={{
                  Width: "100%",
                  height: "490px",
                  backgroundColor: styles.color.darkGrey,
                  px: 0,
                  overflowY: "scroll",
                }}
              >
                <CardContent
                  sx={{
                    px: 0,
                    backgroundColor: styles.color.black,
                    height: "100%",
                  }}
                >
                  <Box sx={{ p: 1.5 }}>
                    <Grid container spacing={2} sx={styles}>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          April 2,2022-2:12pm
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          On hold! Action required
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider
                    sx={{
                      width: "100%",
                      backgroundColor: styles.color.dark,
                      mb: 1,
                    }}
                  />
                  <Box sx={{ p: 1.5 }}>
                    <Grid container spacing={2} sx={styles}>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          April 2,2022-2:12pm
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          Order accepted
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider
                    sx={{
                      width: "100%",
                      backgroundColor: styles.color.dark,
                      mb: 1,
                    }}
                  />
                  <Box sx={{ p: 1.5 }}>
                    <Grid container spacing={2} sx={styles}>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          April 2,2022-2:12pm
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          Order recieved
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider
                    sx={{
                      width: "100%",
                      backgroundColor: styles.color.dark,
                      mb: 1,
                    }}
                  />
                  <Box sx={{ p: 1.5 }}>
                    <Grid container spacing={2} sx={styles}>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          April 2,2022-2:12pm
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          Order sent
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider
                    sx={{
                      width: "100%",
                      backgroundColor: styles.color.dark,
                      mb: 1,
                    }}
                  />
                  <Box sx={{ p: 1.5 }}>
                    <Grid container spacing={2} sx={styles}>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          April 2,2022-2:12pm
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{
                            color: styles.color.lightDark,
                            fontSize: styles.font.medium,
                          }}
                        >
                          Order requested
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DeliveredForm;
