import React, { useState, useCallback, useTransition, memo } from "react";
import Logo from "../Assets/main_logo.png";
import SecondaryLogo from "../Assets/secondary_logo.png";
import { HiMenu } from "react-icons/hi";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ThemeToggle from "./ThemeToggle"; // Import ThemeToggle
import "../App.css"; // Import the common CSS file

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [, startTransition] = useTransition();
  
  const menuOptions = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "Highlights",
      link: "#highlights",
    },
    {
      text: "Why Us?",
      link: "#why-us",
    },
    {
      text: "Programs",
      link: "#programs",
    },
    {
      text: "Blogs",
      link: "#blogs",
    },
    {
      text: "Testimonials",
      link: "#testimonials",
    },
  ];

  const handleNavigation = useCallback((link) => {
    startTransition(() => {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const offset = window.innerHeight - rect.height;
        window.scrollTo({
          top: window.scrollY + rect.top - offset,
          behavior: "smooth",
        });
      }
    });
  }, []);

  return (
    <nav className="nav">
      {/* Logo and Secondary Logo */}
      <div className="logo-container">
        <div className="nav-logo-container">
          <img src={Logo} alt="Logo" loading="lazy" />
        </div>
        <div className="secondary-logo-container">
          <img src={SecondaryLogo} alt="Secondary Logo" loading="lazy" />
        </div>
      </div>

      {/* Navbar Links */}
      <ul className="navbar-links-container">
        {menuOptions.map((item) => (
          <MemoizedNavbarLink key={item.text} item={item} handleNavigation={handleNavigation} />
        ))}
      </ul>

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <ThemeToggle />
      </div>

      {/* Navbar Menu */}
      <div className="navbar-menu-container">
        <HiMenu onClick={() => setOpenMenu(true)} />
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
          className="drawer-box"
        >
          <List>
            {menuOptions.map((item) => (
              <MemoizedDrawerItem key={item.text} item={item} handleNavigation={handleNavigation} />
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

// Memoized functional component for Navbar link item
const MemoizedNavbarLink = memo(({ item, handleNavigation }) => (
  <li>
    <a
      href={item.link}
      className="navbar-link"
      onClick={(e) => {
        e.preventDefault();
        handleNavigation(item.link);
      }}
    >
      {item.text}
    </a>
  </li>
));

// Memoized functional component for Drawer item
const MemoizedDrawerItem = memo(({ item, handleNavigation }) => (
  <ListItem disablePadding>
    <ListItemButton
      component="a"
      href={item.link}
      onClick={(e) => {
        e.preventDefault();
        handleNavigation(item.link);
      }}
    >
      {item.text}
    </ListItemButton>
  </ListItem>
));

export default Navbar;
