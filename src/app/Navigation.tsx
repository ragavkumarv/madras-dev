"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { orange, yellow } from "@mui/material/colors";
import { PrimaryButton } from "./PrimaryButton";

export const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
  },
});

const NavContainer = styled.nav`
  display: flex;

  @media (min-width: 800px) {
    display: block;
  }

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

  > ul a {
    color: var(--dark-white);
    text-decoration: none;

    &:hover {
      color: var(--light-white);
    }
  }
`;

export const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/#" },
    { name: "Upcoming", path: "/#upcoming-talks" },
    { name: "Past", path: "/#past-talks" },
    // { name: "Speakers", path: "/#speakers" },
    // { name: "Organisers", path: "/#organisers" },
  ];

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
              //   sx={{ display: { xs: "none", md: "block" } }}
            >
              <a href={item.path}>{item.name}</a>
            </Box>
          ))}

          <li>
            <PrimaryButton>Join Us</PrimaryButton>
          </li>
        </ul>
      </NavContainer>
    </>
  );
};

const Logo = () => {
  return <h1>Madras Dev</h1>;
};
