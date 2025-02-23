// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import theme from "./theme";

// const App = () => {
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "row" }}>
//           <Box>
//             <Navbar />
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 1,
//               backgroundColor: "primary.main",
//               color: "text.primary",
//               p: 2,
//             }}
//           >
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import theme from "./theme";

// const App = () => {
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Box sx={{ display: "flex", minHeight: "100vh" }}>
//           <Box sx={{ width: 0.1}}>
//             <Navbar />
//           </Box>
//           <Box
//             sx={{
//               flexGrow: 1,
//               backgroundColor: "primary.main",
//               color: "text.primary",
//               p: 2,
//             }}
//           >
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import theme from "./theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          overflowY: "auto",
          color: "text.primary",
          alignContent: "center",
        }}
      >
        <Router basename="/my-portfolio">
          <Navbar />
          <Box
            sx={{
              pt: { xs: 8, md: 16 },
              pb: { xs: 6, md: 10 },
              px: { xs: 4, md: 20 },
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
