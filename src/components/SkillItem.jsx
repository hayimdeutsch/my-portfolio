import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SkillItem = ({ icon, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 1,
        p: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: 50, md: 80 },
          height: { xs: 50, md: 80 },
          borderRadius: "50%",
          backgroundColor: "#dddddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={name}
          sx={{
            width: { xs: 30, md: 40 },
            height: { xs: 30, md: 40 },
          }}
        />
      </Box>
      <Typography color="#dddddd" variant="body1">
        {name}
      </Typography>
    </Box>
  );
};

export default SkillItem;
