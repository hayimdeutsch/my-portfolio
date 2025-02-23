import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Programmer from "../assets/Programmer.png";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.main",
        color: "text.primary",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" color="textTertiary">
          Hi, my name is
        </Typography>
        <Typography variant="h2" color="tertiary.main">
          Hayim Deutsch
        </Typography>
        <Typography variant="h4" color="textTertiary">
          a developer focused on innovative solutions
        </Typography>
        <Typography variant="body1" color="textSecondary" mt={3}>
          I'm a full-stack developer passionate about creating scalable
          applications that solve real-world problems.
        </Typography>

        <Stack direction="row" spacing={2} mt={5}>
          <Button
            variant="contained"
            color="tertiary"
            component={Link}
            to="/projects"
          >
            See My Work
          </Button>
          <Button
            variant="contained"
            color="tertiary"
            component={Link}
            to="/contact"
          >
            Let’s Connect
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="Programmer Animation"
          src={Programmer}
          sx={{ width: { xs: 300, md: 400 }, height: { xs: 400, md: 500 } }}
        />
      </Box>
    </Box>
  );
};

export default Home;
