import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Link,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Router, Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const pages = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const links = [
  {
    icon: <LinkedInIcon sx={{ fontSize: "large", color: "white" }} />,
    href: "https://linkedin.com/in/hayim-deutsch",
  },
  {
    icon: <GitHubIcon sx={{ fontSize: "large", color: "white" }} />,
    href: "https://github.com/hayimdeutsch",
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const drawer = (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          pt: 4,
          textAlign: "center",
          flexGrow: 1,
          display: "flex",
          gap: 2,
          flexDirection: "column",
        }}
      >
        {pages.map((page, index) => (
          <Link
            component={RouterLink}
            to={page.to}
            sx={{ textDecoration: "none" }}
            key={index}
            onClick={handleDrawerToggle}
          >
            <Typography color="textPrimary" variant="h4">
              {page.name}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {links.map((link, index) => (
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            onClick={handleDrawerToggle}
          >
            {link.icon}
          </Link>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <AppBar position="static" sx={{ backgroundColor: "tertiary.dark" }}>
          <Toolbar sx={{ px: { xs: 2, md: 10 } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "100vw",
                  height: "100vh",
                },
              }}
            >
              {drawer}
            </Drawer>
            <Toolbar />
            <AppBar />
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: scrolling ? "primary.light" : "transparent",
            boxShadow: scrolling ? 4 : 0,
            transition: "all 0.1s",
            outline: "none",
          }}
        >
          <Toolbar sx={{ px: { xs: 2, md: 10 }, py: scrolling ? 1 : 2 }}>
            <RouterLink to="/">
              <Box
                component={"img"}
                src="/Logo.png"
                alt="Logo"
                sx={{
                  width: scrolling ? 50 : 80,
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              />
            </RouterLink>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: "flex", gap: 2 }}>
              {pages.map((page, index) => (
                <Link
                  component={RouterLink}
                  to={page.to}
                  sx={{ color: "inherit", textDecoration: "none" }}
                  key={index}
                >
                  {page.name}
                </Link>
              ))}
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {link.icon}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Navbar;
