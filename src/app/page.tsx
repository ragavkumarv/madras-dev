"use client";

import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import styled from "@emotion/styled";
import { PrimaryButton } from "./PrimaryButton";
// const inter = Inter({ subsets: ["latin"] });
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const H2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const UpcomingContainer = styled.section`
  p {
    font-size: 1.5rem;
  }
`;

export const Spacer4 = styled.div`
  width: 100%;
  height: 68px;
`;

export default function Home() {
  return (
    <main>
      <Spacer4 />
      <UpcomingContainer>
        <H2 id="upcoming-talks">Upcoming talks</H2>
        <p>
          Slots are <strong>open</strong> contact the organiser for presenting
          your talk.
          <br /> People who are interested attend kindly register now in the
          link below
        </p>
      </UpcomingContainer>
      <Spacer4 />
      <section>
        <H2>Topics</H2>
        <p>FEB 15 2023</p> <p>2:00 - 5:00 PM IST</p>
        <p>Qube Cinemas</p>
        <PrimaryButton
          endIcon={<ArrowForwardIosIcon />}
          sx={{ fontWeight: "400", fontSize: "1.25rem" }}
          size="large"
        >
          Register now
        </PrimaryButton>
      </section>
      <Spacer4 />
      <section>
        <H2 id="past-talks">Past Talks</H2>
      </section>
    </main>
  );
}
