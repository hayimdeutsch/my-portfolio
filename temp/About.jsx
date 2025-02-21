// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="min-h-screen p-8">
//       <h2 className="text-3xl font-bold">About Me</h2>
//       <p className="text-gray-400 mt-2">
//         Trained at Infinity Labs R&D, where I quickly adapted to new technologies and solved real-world challenges. 
//         I bring strong problem-solving skills, technical expertise, and a collaborative mindset to building scalable 
//         and efficient software solutions.
//       </p>
//       <h3 className="text-2xl font-bold mt-4">Skills</h3>
//       <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-300">
//         <li>Java, C, JavaScript (ES6), HTML, CSS</li>
//         <li>React, Node.js, Express, Git, Docker</li>
//         <li>MySQL, MongoDB</li>
//         <li>AWS (EC2, Route 53), Apache Tomcat, Caddy</li>
//         <li>Testing: GDB, JUnit, Postman</li>
//       </ul>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const About = () => {
  return (
    <Box id="about" sx={{ minHeight: '100vh', p: 8 }}>
      <Typography variant="h4" component="h2">
        About Me
      </Typography>
      <Typography color="textSecondary" mt={2}>
        Trained at Infinity Labs R&D, where I quickly adapted to new technologies and solved real-world challenges. 
        I bring strong problem-solving skills, technical expertise, and a collaborative mindset to building scalable 
        and efficient software solutions.
      </Typography>
      <Typography variant="h5" component="h3" mt={4}>
        Skills
      </Typography>
      <List>
        <ListItem>Java, C, JavaScript (ES6), HTML, CSS</ListItem>
        <ListItem>React, Node.js, Express, Git, Docker</ListItem>
        <ListItem>MySQL, MongoDB</ListItem>
        <ListItem>AWS (EC2, Route 53), Apache Tomcat, Caddy</ListItem>
        <ListItem>Testing: GDB, JUnit, Postman</ListItem>
      </List>
    </Box>
  );
};

export default About;