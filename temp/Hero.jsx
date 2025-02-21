// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8">
//       <h1 className="text-5xl font-bold">Hayim Deutsch</h1>
//       <p className="text-xl text-gray-400 mt-4 max-w-2xl">
//         Full-stack software developer with expertise in building scalable and efficient systems. 
//         Trained at Infinity Labs R&D, where I developed proficiency in Java, C, and modern web technologies like 
//         React, Node.js, and MongoDB. Passionate about solving complex problems and optimizing software performance.
//       </p>
//       <div className="mt-6 space-x-4">
//         <a href="#projects" className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">View My Work</a>
//         <a href="#contact" className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">Get in Touch</a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 8,
      }}
    >
      <Typography variant="h2" component="h1">
        Hayim Deutsch
      </Typography>
      <Typography variant="h5" color="textSecondary" mt={4} maxWidth="md">
        Full-stack software developer with expertise in building scalable and efficient systems. 
        Trained at Infinity Labs R&D, where I developed proficiency in Java, C, and modern web technologies like 
        React, Node.js, and MongoDB. Passionate about solving complex problems and optimizing software performance.
      </Typography>
      <Stack direction="row" spacing={2} mt={6}>
        <Button variant="contained" color="primary" href="#projects">View My Work</Button>
        <Button variant="contained" color="secondary" href="#contact">Get in Touch</Button>
      </Stack>
    </Box>
  );
};

export default Hero;