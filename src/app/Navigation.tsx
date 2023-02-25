import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { yellow } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

const drawerWidth = 250;

export const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
  },
});

const NavContainer = styled.nav`
  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem 0;
    font-size: 1.25rem;
    font-family: var(--ff-sans-serif);
    font-weight: 600;
  }
`;

export const Navigation = () => {
  const navItems = [
    // { name: "Home", path: "/#" },
    { name: "Upcoming", path: "/#upcoming-talks" },
    { name: "Past", path: "/#past-talks" },
    // { name: "Speakers", path: "/#speakers" },
    // { name: "Organisers", path: "/#organisers" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useRouter();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          height: "150px",
          width: "150px",
          margin: "0 auto",
          alignContent: "center",
        }}
      >
        <Link href="/">
          <Logo />
        </Link>
      </Box>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={() => navigate.push(item.path)}
              sx={{
                textAlign: "center",
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      display: "inline",
                      fontWeight: "500",
                    }}
                    component="span"
                    variant="h5"
                  >
                    {item.name}
                  </Typography>
                }
                className="nav-side-bar-text"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <PrimaryButton sx={{ width: "100%" }} size="large">
        Join Us
      </PrimaryButton>
    </Box>
  );

  return (
    <>
      <NavContainer>
        <ul>
          <li style={{ height: "40px", marginRight: "auto" }}>
            <Link href="/">
              <Logo />
            </Link>
          </li>

          {navItems.map((item, index) => (
            <Box
              key={item.path + index}
              component={"li"}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <a href={item.path}>{item.name}</a>
            </Box>
          ))}

          <li>
            <PrimaryButton
              sx={{ display: { xs: "none", md: "block" } }}
              size="large"
            >
              Join Us
            </PrimaryButton>
          </li>

          <Box sx={{ display: { md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </ul>

        <Drawer
          // container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "var(--body-bg)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </NavContainer>
    </>
  );
};

const Logo = () => {
  return <h1>Chennai Dev</h1>;
};
