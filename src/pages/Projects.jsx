import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Project from "../components/Project";
import data from "../../myData.json";

const Projects = () => {
  const projects = data.projects;

  return (
    <Box id="projects">
      <Typography
        variant="h3"
        color="tertiary.dark"
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        Projects
      </Typography>
      <Typography color="secondary.main" my={4}>
        Here are some projects that I've been working on recently:
      </Typography>
      <Box
        flexDirection={"row"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        gap={6}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              bgcolor: "tertiary.dark",
              p: { xs: 2, md: 3 },
              m: { xs: 1, md: 0 },
              borderRadius: 3,
            }}
          >
            <Project
              title={project.title}
              description={project.description}
              details={project.details}
              skills={project.skills}
              repoUrl={project.repoUrl}
              demoUrl={project.demoUrl}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ textAlign: "center", mt: { xs: 4, md: 8 } }}>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/contact"
          sx={{ mx: 2 }}
        >
          Contact Me
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href={data.cv}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 2 }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
