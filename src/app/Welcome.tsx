"use client";

import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// const inter = Inter({ subsets: ["latin"] });

import IconButton from "@mui/material/IconButton";
import { ImageProps } from "next/image";
import pastTalks from "./past-talks.json";
import upcomingTalks from "./upcoming-talks.json";
import { PastTalkList, Talk } from "./PastTalkList";
import {
  Spacer4,
  UpcomingContainer,
  H2,
  UpcomingRegistration,
} from "./UpcomingRegistration";

export function Welcome() {
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
        <UpcomingRegistration />
        <Spacer4 />
        <H2>Topics</H2>
        <PastTalkList talkList={upcomingTalks} />
      </section>
      <Spacer4 />
      <section>
        <H2 id="past-talks">Past Talks</H2>
        {/* <PastTalkDate /> */}
        <PastTalkList talkList={pastTalks as Talk[]} />
      </section>
    </main>
  );
}
