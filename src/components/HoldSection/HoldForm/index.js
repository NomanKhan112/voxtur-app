import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import SendIcon from "@mui/icons-material/Send";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PanToolIcon from "@mui/icons-material/PanTool";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import ListAltIcon from "@mui/icons-material/ListAlt";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import ActionRequired from "../../../../public/images/attention.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HoldForm = ({ styles }) => {
  const Input = styled("input")({
    display: "none",
  });
  const label = { inputProps: { "aria-label": "marked as recieved" } };
  return (
    <Box
      sx={{ backgroundColor: styles.color.black, minHeight: "100vh", pb: 4 }}
    >
      <Container>
        <Grid container spacing={2} sx={(styles, { pt: 8 })}>
          <Grid item xs={12} sm={2} md={1}>
            <Box sx={{ width: "90px", height: "100px", mb: 2 }}>
              <Image
                src={ActionRequired}
                style={{ width: "100%", height: "100%" }}
                alt="attention required"
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
                    textAlign: "left",
                    color: styles.color.yellow,
                  }}
                  gutterBottom
                >
                  on hold!-action required
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
                      borderColor: styles.color.lightDark,
                      color: styles.color.lightDark,
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
                      borderColor: styles.color.green,
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
          <Grid item xs={12} sm={6} md={6}>
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
                  backgroundColor: styles.color.darkGrey,
                  px: 0,
                  overflowY: "scroll",
                }}
              >
                <CardContent sx={{ px: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      px: 2,
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        textTransform: "capitalize",
                        fontWeight: "500",
                        color: styles.color.white,
                      }}
                    >
                      purchase contract missing
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        mb: 1.5,
                        color: styles.color.lightDark,
                        textTransform: "capitalize",
                      }}
                    >
                      Apr 2,2022 2:12PM
                    </Typography>
                    <Box>
                      <Typography
                        paragraph
                        sx={{
                          fontSize: styles.font.small,
                          textTransform: "capitalize",
                          fontWeight: "500",
                          color: styles.color.lightDark,
                        }}
                        gutterBottom
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 4, mb: 1 }}>
                      <Typography
                        sx={{
                          fontSize: styles.font.small,
                          color: styles.color.lightDark,
                          textTransform: "capitalize",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam,
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 4, mb: 1 }}>
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          color: styles.color.white,
                          textTransform: "uppercase",
                        }}
                      >
                        you -{" "}
                        <span
                          style={{
                            color: styles.color.lightDark,
                            textTransform: "capitalize",
                          }}
                        >
                          {" "}
                          April 2,2022-2:12pm{" "}
                        </span>
                      </Typography>
                    </Box>
                    <Box sx={{ my: 2, width: "100%" }}>
                      <FormHelperText
                        sx={{
                          textTransform: "uppercase",
                          ml: 0,
                          color: styles.color.lightWhite,
                        }}
                      >
                        add comments
                      </FormHelperText>
                      <TextField
                        className="hold-textarea"
                        multiline
                        rows={4}
                        fullWidth={true}
                        defaultValue=""
                        sx={{
                          color: styles.color.white,
                          border: `1px solid  ${styles.color.lightDark}`,
                          backgroundColor: "#000",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span>
                        <Checkbox
                          defaultChecked
                          {...label}
                          sx={{ color: styles.color.lightDark }}
                        />{" "}
                        <span
                          style={{
                            color: styles.color.lightWhite,
                            fontSize: styles.font.medium,
                            padding: "0px",
                          }}
                        >
                          Marked as resolved
                        </span>
                      </span>
                      <span>
                        <Button
                          variant="contained"
                          sx={
                            (styles,
                            {
                              py: 1.5,
                              minWidth: "40px",
                              backgroundColor: styles.color.lime,
                            })
                          }
                        >
                          <SendIcon sx={{ fontSize: "1.5rem" }} />
                        </Button>
                      </span>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
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
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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

export default HoldForm;
