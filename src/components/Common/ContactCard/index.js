import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

import EditIcon from "@mui/icons-material/Edit";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import EmailIcon from "@mui/icons-material/Email";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const ContactCard = ({ item, styles, isEditContacts }) => {
  return (
    <>
      <Card
        sx={{
          height: "100%",
          minWidth: "245px",
          py: 1,
          mr: 3,
          backgroundColor: styles.color.dark,
        }}
      >
        {item.isPrimary ? (
          <Box
            sx={{
              width: "65px",
              backgroundColor: styles.color.lime,
              textTransform: "uppercase",
              fontSize: styles.font.small,
              px: 1,
              fontWeight: 700,
            }}
          >
            primary
          </Box>
        ) : (
          <Box sx={{ mb: 2 }}></Box>
        )}

        <Box sx={{ px: 3 }}>
          <CardContent sx={{ px: 1 }}>
            <Typography
              sx={{
                fontSize: styles.font.large,
                textTransform: "capitalize",
                fontWeight: "500",
              }}
              color="secondary"
              gutterBottom
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: styles.font.medium,
                color: styles.color.lightDark,
                textTransform: "capitalize",
              }}
            >
              {item.loanStatus}
            </Typography>
            <Divider
              sx={{
                width: "50px",
                backgroundColor: styles.color.lime,
                mb: 1,
              }}
            />
            <List
              sx={{
                width: "100%",
                py: 0,
              }}
            >
              <ListItem sx={{ px: 0 }}>
                <LocationCityOutlinedIcon
                  color="primary"
                  sx={{
                    mr: 1,
                    fontSize: "1.2rem",
                  }}
                />
                <Typography
                  variant="caption"
                  display="block"
                  color="secondary"
                  sx={{ textTransform: "capitalize" }}
                >
                  {item.address}
                </Typography>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <EmailIcon
                  color="primary"
                  sx={{
                    mr: 1,
                    fontSize: "1.2rem",
                  }}
                />
                <Typography variant="caption" display="block" color="secondary">
                  {item.email}
                </Typography>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <EmailIcon
                  color="primary"
                  sx={{
                    mr: 1,
                    fontSize: "1.2rem",
                  }}
                />
                <Typography variant="caption" display="block" color="secondary">
                  {item.phoneNo}
                </Typography>
              </ListItem>
            </List>
          </CardContent>
          {isEditContacts && (
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link
                href="#"
                underline="none"
                sx={{ fontSize: styles.font.medium, display: "flex" }}
              >
                <EditIcon sx={{ mr: 1, fontSize: "1.2rem" }} /> Edit details
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: styles.color.red,
                  fontSize: styles.font.small,
                }}
              >
                Remove
              </Link>
            </CardActions>
          )}
        </Box>
      </Card>
    </>
  );
};

export default ContactCard;
