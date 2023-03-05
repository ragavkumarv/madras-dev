"use client";

import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// const inter = Inter({ subsets: ["latin"] });

import IconButton from "@mui/material/IconButton";
import { ImageProps } from "next/image";
// import pastTalks from "./past-talks.json";
import upcomingTalks from "./upcoming-talks.json";
import { PastTalkList, Talk } from "./PastTalkList";
import {
  Spacer4,
  H2,
  UpcomingRegistration,
  ParaLarge,
} from "./UpcomingRegistration";
import { MeetupDetail } from "@/pages";

export function Welcome({
  pastTalks,
  meetupDetails,
}: {
  pastTalks: Talk[];
  meetupDetails: MeetupDetail[];
}) {
  const today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const sortedTalks = pastTalks.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <main>
      <section>
        <Spacer4 />
        <section>
          <H2 id="upcoming-talks">Upcoming talks</H2>
          <ParaLarge>
            Slots are <strong>open</strong> contact the organiser for presenting
            your talk.
            <br /> People who are interested attend kindly register now in the
            link below
          </ParaLarge>
        </section>
        <Spacer4 />
        <section>
          {meetupDetails
            .filter((data) => new Date(data.date) >= yesterday)
            .map((meetupDetail, key) => (
              <UpcomingRegistration key={key} meetupDetail={meetupDetail} />
            ))}

          <Spacer4 />
          <H2>Topics</H2>
          <PastTalkList
            talkList={sortedTalks.filter(
              (data) => new Date(data.date) >= yesterday
            )}
          />
        </section>
        <Spacer4 />
        <H2 id="past-talks">Past Talks</H2>
        <PastTalkList
          talkList={sortedTalks.filter(
            (data) => new Date(data.date) < yesterday
          )}
        />
      </section>
    </main>
  );
}
