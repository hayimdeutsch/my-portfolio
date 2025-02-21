// // Single-Page Portfolio - React (Vite) + Tailwind CSS

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Navbar */}
//       <nav className="p-4 bg-gray-800 flex justify-between fixed w-full top-0 shadow-md z-10">
//         <h1 className="text-xl font-bold">Hayim Deutsch</h1>
//         <div className="space-x-4">
//           <a href="#home" className="hover:text-gray-400">Home</a>
//           <a href="#about" className="hover:text-gray-400">About</a>
//           <a href="#projects" className="hover:text-gray-400">Projects</a>
//           <a href="#contact" className="hover:text-gray-400">Contact</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8">
//         <h1 className="text-5xl font-bold">Hayim Deutsch</h1>
//         <p className="text-xl text-gray-400 mt-4 max-w-2xl">
//           Full-stack software developer with expertise in building scalable and efficient systems. 
//           Trained at Infinity Labs R&D, where I developed proficiency in Java, C, and modern web technologies like 
//           React, Node.js, and MongoDB. Passionate about solving complex problems and optimizing software performance.
//         </p>
//         <div className="mt-6 space-x-4">
//           <a href="#projects" className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">View My Work</a>
//           <a href="#contact" className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">Get in Touch</a>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="min-h-screen p-8">
//         <h2 className="text-3xl font-bold">Projects</h2>
//         <p className="text-gray-400 mt-2">Here are some of my recent projects:</p>
//         <ul className="mt-4 space-y-4">
//           <li className="bg-gray-800 p-4 rounded-lg">
//             <h3 className="text-xl font-bold">Banking Application</h3>
//             <p>Developed a secure banking application with JWT authentication, encrypted password storage, and scalable database models using Mongoose.</p>
//           </li>
//           <li className="bg-gray-800 p-4 rounded-lg">
//             <h3 className="text-xl font-bold">Generic IoT Infrastructure</h3>
//             <p>Developed a Java-based infrastructure for receiving, processing, and storing IoT data using a multiprotocol gateway server with a custom thread pool.</p>
//           </li>
//           <li className="bg-gray-800 p-4 rounded-lg">
//             <h3 className="text-xl font-bold">Student Follow-Up Manager</h3>
//             <p>Built a platform for teachers to automate student follow-ups using Google APIs for authentication, email sending, and calendar scheduling. Deployed on AWS EC2 with a custom domain and HTTPS managed by Caddy.</p>
//           </li>
//         </ul>
//       </section>

//       {/* About Section */}
//       <section id="about" className="min-h-screen p-8">
//         <h2 className="text-3xl font-bold">About Me</h2>
//         <p className="text-gray-400 mt-2">Trained at Infinity Labs R&D, where I quickly adapted to new technologies and solved real-world challenges. I bring strong problem-solving skills, technical expertise, and a collaborative mindset to building scalable and efficient software solutions.</p>
//         <h3 className="text-2xl font-bold mt-4">Skills</h3>
//         <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-300">
//           <li>Java, C, JavaScript (ES6), HTML, CSS</li>
//           <li>React, Node.js, Express, Git, Docker</li>
//           <li>MySQL, MongoDB</li>
//           <li>AWS (EC2, Route 53), Apache Tomcat, Caddy</li>
//           <li>Testing: GDB, JUnit, Postman</li>
//         </ul>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="min-h-screen p-8">
//         <h2 className="text-3xl font-bold">Contact</h2>
//         <p className="text-gray-400 mt-2">Let's connect! Feel free to reach out via email, LinkedIn, or GitHub.</p>
//         <div className="mt-4">
//           <p><strong>Email:</strong> chayimdeutsch@gmail.com</p>
//           <p><strong>Phone:</strong> +972-53-7133082</p>
//           <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/hayim-deutsch" className="text-blue-400">linkedin.com/in/hayim-deutsch</a></p>
//           <p><strong>GitHub:</strong> <a href="https://github.com/hayimdeutsch" className="text-blue-400">github.com/hayimdeutsch</a></p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="p-4 bg-gray-800 text-center mt-8">
//         <p>&copy; 2025 Hayim Deutsch</p>
//       </footer>
//     </div>
//   );
// };

// export default App;import React from 'react';

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="p-4 bg-gray-800 flex justify-between fixed w-full top-0 shadow-md z-10">
//       <h1 className="text-xl font-bold">Hayim Deutsch</h1>
//       <div className="space-x-4">
//         <a href="#home" className="hover:text-gray-400">Home</a>
//         <a href="#about" className="hover:text-gray-400">About</a>
//         <a href="#projects" className="hover:text-gray-400">Projects</a>
//         <a href="#contact" className="hover:text-gray-400">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;