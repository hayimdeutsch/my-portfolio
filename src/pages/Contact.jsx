import React from "react";
import {
  Box,
  Typography,
  Grid2 as Grid,
  List,
  ListItem,
  Link,
  ListItemIcon,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import data from "../../myData.json";
import ContactIllustartion from "../assets/contact.png";

const contactMethods = [
  {
    icon: <LocationOnIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    value: data.location,
  },
  {
    icon: <EmailIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    value: data.email,
    href: `mailto:${data.email}`,
  },
  {
    icon: <PhoneIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    value: data.phone,
    href: `tel:${data.phone}`,
  },
  {
    icon: <LinkedInIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    value: data.links.linkedin.label,
    href: data.links.linkedin.url,
  },
  {
    icon: <GitHubIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    value: data.links.github.label,
    href: data.links.github.url,
  },
  {
    icon: <ContactPageIcon fontSize="large" sx={{ color: "secondary.main" }} />,
    value: data.links.cv.label,
    href: data.links.cv.url,
  },
];

const Contact = () => {
  return (
    <Box id="contact">
      <Typography
        variant="h3"
        color="tertiary.dark"
        sx={{ textAlign: "center" }}
      >
        Contact Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box>
          {" "}
          <Typography sx={{ textAlign: "left", mb: 2 }}>
            Feel free to reach out to me through any of the following methods:
          </Typography>
          <List>
            {contactMethods.map((method, index) => (
              <ListItem
                key={index}
                sx={{ py: { xs: 1, md: 2 }, pl: { xs: 0, md: 2 } }}
              >
                <ListItemIcon color="white" sx={{ mr: 2 }}>
                  {method.icon}
                </ListItemIcon>
                {method.href ? (
                  <Link
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none", color: "textSecondary" }}
                  >
                    <Typography color="textSecondary" variant="body1">
                      {method.value}
                    </Typography>
                  </Link>
                ) : (
                  <Typography variant="body1" color="textSecondary">
                    {method.value}
                  </Typography>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          component="img"
          src={ContactIllustartion}
          alt="Contact Illustration"
          bgcolor={"none"}
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
