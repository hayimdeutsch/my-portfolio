// import React from 'react';

// const Projects = () => {
//   return (
//     <section id="projects" className="min-h-screen p-8">
//       <h2 className="text-3xl font-bold">Projects</h2>
//       <p className="text-gray-400 mt-2">Here are some of my recent projects:</p>
//       <ul className="mt-4 space-y-4">
//         <li className="bg-gray-800 p-4 rounded-lg">
//           <h3 className="text-xl font-bold">Banking Application</h3>
//           <p>Developed a secure banking application with JWT authentication, encrypted password storage, and scalable database models using Mongoose.</p>
//         </li>
//         <li className="bg-gray-800 p-4 rounded-lg">
//           <h3 className="text-xl font-bold">Generic IoT Infrastructure</h3>
//           <p>Developed a Java-based infrastructure for receiving, processing, and storing IoT data using a multiprotocol gateway server with a custom thread pool.</p>
//         </li>
//         <li className="bg-gray-800 p-4 rounded-lg">
//           <h3 className="text-xl font-bold">Student Follow-Up Manager</h3>
//           <p>Built a platform for teachers to automate student follow-ups using Google APIs for authentication, email sending, and calendar scheduling. Deployed on AWS EC2 with a custom domain and HTTPS managed by Caddy.</p>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default Projects;


import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';

const Projects = () => {
  return (
    <Box id="projects" sx={{ minHeight: '100vh', p: 8 }}>
      <Typography variant="h4" component="h2">
        Projects
      </Typography>
      <Typography color="textSecondary" mt={2}>
        Here are some of my recent projects:
      </Typography>
      <List>
        <ListItem>
          <Paper sx={{ p: 4, width: '100%' }}>
            <Typography variant="h6" component="h3">
              Banking Application
            </Typography>
            <Typography>
              Developed a secure banking application with JWT authentication, encrypted password storage, and scalable database models using Mongoose.
            </Typography>
          </Paper>
        </ListItem>
        <ListItem>
          <Paper sx={{ p: 4, width: '100%' }}>
            <Typography variant="h6" component="h3">
              Generic IoT Infrastructure
            </Typography>
            <Typography>
              Developed a Java-based infrastructure for receiving, processing, and storing IoT data using a multiprotocol gateway server with a custom thread pool.
            </Typography>
          </Paper>
        </ListItem>
        <ListItem>
          <Paper sx={{ p: 4, width: '100%' }}>
            <Typography variant="h6" component="h3">
              Student Follow-Up Manager
            </Typography>
            <Typography>
              Built a platform for teachers to automate student follow-ups using Google APIs for authentication, email sending, and calendar scheduling. Deployed on AWS EC2 with a custom domain and HTTPS managed by Caddy.
            </Typography>
          </Paper>
        </ListItem>
      </List>
    </Box>
  );
};

export default Projects;