// // import React from "react";
// import {
//   Box,
//   Typography,
//   Grid2 as Grid,
//   Stack,
//   IconButton,
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import data from "../../myData.js";
// import { ContactPage } from "@mui/icons-material";

// const contactMethods = [
//   {
//     icon: <LocationOnIcon fontSize="large" />,
//     label: "Location",
//     value: data.location,
//   },
//   {
//     icon: <EmailIcon fontSize="large" />,
//     label: "Email",
//     value: data.email,
//     href: `mailto:${data.email}`,
//   },
//   {
//     icon: <PhoneIcon fontSize="large" />,
//     label: "Phone",
//     value: data.phone,
//     href: `tel:${data.phone}`,
//   },
//   {
//     icon: <LinkedInIcon fontSize="large" />,
//     label: "LinkedIn",
//     value: data.links.linkedin.label,
//     href: data.links.linkedin.url,
//   },
//   {
//     icon: <GitHubIcon fontSize="large" />,
//     label: "GitHub",
//     value: data.links.github.label,
//     href: data.links.github.url,
//   },
//   {
//     icon: <ContactPage fontSize="large" />,
//     label: "Resume",
//     value: data.links.cv.label,
//     href: data.links.cv.url,
//   },
// ];

// const Contact = () => {
//   return (
//     <Box id="contact" sx={{ p: 4 }}>
//       <Typography
//         variant="h3"
//         color="tertiary.dark"
//         sx={{ textAlign: "center" }}
//       >
//         Contact Me
//       </Typography>
//       <Typography color="textSecondary" mt={2} sx={{ textAlign: "center" }}>
//         Feel free to reach out to me through any of the following methods:
//       </Typography>
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         gap={2}
//       >
//         {contactMethods.map((method, index) => (
//           <Box
//             sx={{
//               p: 3,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               textAlign: "center",
//               bgcolor: "tertiary.dark",
//               borderRadius: 2,
//               width: { xs: "100%", md: "auto" },
//               height: "100%",
//               justifyContent: "space-evenly",
//             }}
//           >
//             <IconButton
//               href={method.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ mb: 2 }}
//             >
//               {method.icon}
//             </IconButton>
//             <Typography variant="h6">{method.label}</Typography>
//             <Typography variant="body1" color="textSecondary">
//               {method.value}
//             </Typography>
//           </Box>
//         ))}
//       </Stack>
//     </Box>
//   );
// };

// export default Contact;
import React from "react";
import {
  Box,
  Typography,
  Grid2 as Grid,
  IconButton,
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
import data from "../../myData.js";

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
      <Typography mt={2} pl={2} sx={{ textAlign: "left" }}>
        Feel free to reach out to me through any of the following methods:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 4,
        }}
      >
        <List>
          {contactMethods.map((method, index) => (
            <ListItem key={index} sx={{ p: { xs: 1, md: 2 } }}>
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
        <Box
          component="img"
          src="/contact.png"
          alt="Illustration"
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
