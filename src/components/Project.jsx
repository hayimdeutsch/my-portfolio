import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

const DiamondListItem = styled(ListItem)(({ theme }) => ({
  "&::before": {
    content: '"♦"',
    fontSize: "12px",
    marginRight: "12px",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
    },
  },
}));

const Project = ({ title, description, details, skills, repoUrl, demoUrl }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <List dense={true}>
        {details.map((detail, index) => (
          <DiamondListItem key={index}>
            <ListItemText>{detail}</ListItemText>
          </DiamondListItem>
        ))}
      </List>
      <Grid container spacing={2} my={2}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              sx={{
                p: 0.75,
                borderRadius: 2,
                color: "text.secondary",
                border: 1,
                borderColor: "secondary.dark",
                textAlign: "center",
              }}
            >
              <Typography variant="body2">{skill}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", gap: 2 }}>
        {repoUrl && (
          <Button
            variant="contained"
            color="secondary"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repo
          </Button>
        )}
        {demoUrl && (
          <Button
            variant="contained"
            color="secondary"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Project;
