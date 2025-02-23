import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
import SkillItem from "../components/SkillItem";
import JavaIcon from "../assets/icons/java.png";
import CIcon from "../assets/icons/c.png";
import JavaScriptIcon from "../assets/icons/javascript.png";
import HTMLIcon from "../assets/icons/html.png";
import CSSIcon from "../assets/icons/css.png";
import MySQLIcon from "../assets/icons/mysql.png";
import MongoDBIcon from "../assets/icons/mongodb.png";
import NodeIcon from "../assets/icons/node.png";
import ReactIcon from "../assets/icons/react.png";
import GitIcon from "../assets/icons/git.png";
import DockerIcon from "../assets/icons/docker.png";
import PostmanIcon from "../assets/icons/postman.png";
import AWSIcon from "../assets/icons/aws.png";
import LinuxIcon from "../assets/icons/linux.png";

const skills = [
  { name: "Java", icon: JavaIcon },
  { name: "C", icon: CIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "React", icon: ReactIcon },
  { name: "Git", icon: GitIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "Linux", icon: LinuxIcon },
];

const About = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="about">
      <Typography
        variant="h3"
        color="tertiary.dark"
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        About Me
      </Typography>
      <Typography color="secondary.dark" my={4}>
        Here's a little bit about me:
      </Typography>

      <Box
        flexDirection={"column"}
        display={"flex"}
        gap={2}
        sx={{ bgcolor: "tertiary.dark", p: { xs: 3, md: 4 }, borderRadius: 3 }}
      >
        <Typography>
          I'm a full-stack software developer with a passion for building
          scalable and efficient solutions. I trained at Infinity Labs R&D,
          where I gained hands-on experience in data structures and algorithms,
          design patterns, and multi-threaded synchronization. The program’s
          project-based approach emphasized writing clean, maintainable code and
          applying UML diagrams to plan and visualize system architecture.
        </Typography>
        <Typography>
          The training simulated Agile development, allowing me to experience
          iterative workflows and collaborative problem-solving. With a strong
          foundation in both back-end development and system design, I excel at
          building robust applications and optimizing performance. I thrive in
          collaborative environments where I can apply my analytical thinking to
          create innovative solutions.
        </Typography>
        <Typography>
          Outside of coding, I’m a proud husband and father of three boys,
          living in Beit Shemesh, Israel. I love spending time with my family,
          listening to music, and playing sudoku. If you're looking for a
          developer with strong problem-solving abilities and a passion for
          tackling complex challenges, I’d love to connect!
        </Typography>
        <Box sx={{ mt: 1 }} display={"flex"} flexDirection={"row"} gap={2}>
          <Button
            variant="contained"
            color="secondary"
            align="center"
            component={RouterLink}
            to="/projects"
          >
            View My Projects
          </Button>
          <Button
            variant="outlined"
            align="center"
            color="secondary"
            component={RouterLink}
            to="/contact"
          >
            Connect with Me
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 4,
          px: { xs: 2, md: 8 },
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            my: { xs: 2, md: 4 },
          }}
        >
          <Typography color="secondary.dark" variant="h5" mt={4}>
            Skills
          </Typography>
        </Box>
        <Box>
          <Slider {...settings}>
            {skills.map((skill) => (
              <SkillItem key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
