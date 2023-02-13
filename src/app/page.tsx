"use client";

import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import styled from "@emotion/styled";
import { PrimaryButton } from "./PrimaryButton";
// const inter = Inter({ subsets: ["latin"] });
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { format, parse } from "date-fns";
import { ShareSocialLinks } from "./ShareSocialLinks";
import IconButton from "@mui/material/IconButton";
import NextImage, { ImageProps } from "next/image";
import { groupBy } from "ramda";
import pastTalks from "./past-talks.json";
import upcomingTalks from "./upcoming-talks.json";
import speakersData from "./speakers.json";

const DATE_FORMAT = "MMM d yyyy";
export const dateFormatter = (date: string) => {
  const parsedDate = parse(date, "dd/MM/yyyy", new Date());
  return {
    month: format(parsedDate, "MMM"),
    year: format(parsedDate, "yyyy"),
    day: format(parsedDate, "d"),
  };
};

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

const DateTime = styled.p`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MeetupDate = styled.p`
  font-size: 2rem;
`;

const DateTimeContainer = styled.p`
  display: flex;
  gap: 2rem;
  text-transform: uppercase;
`;

const Place = styled.p`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
`;

function UpcomingRegistration() {
  const today = dateFormatter("15/02/2023");
  return (
    <RegistrationContainer>
      <DateTimeContainer>
        <MeetupDate>
          {today.month} <strong>{today.day}</strong> {today.year}
        </MeetupDate>
        <DateTime>
          <AccessTimeIcon
            sx={{
              fontSize: "2rem",
            }}
          />
          2:00 - 5:00 PM IST
        </DateTime>
      </DateTimeContainer>
      <Place>
        <PlaceIcon
          sx={{
            color: "var(--accent-clr)",
            fontSize: "1.75rem",
          }}
        />
        Qube Cinemas
      </Place>
      <PrimaryButton
        endIcon={<ArrowForwardIosIcon />}
        sx={{
          fontWeight: "400",
          fontSize: "1.5rem",
        }}
        size="large"
      >
        Register now
      </PrimaryButton>
    </RegistrationContainer>
  );
}

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
        <PastTalkList talkList={upcomingTalks} />
        <UpcomingRegistration />
      </section>
      <Spacer4 />
      <section>
        <H2 id="past-talks">Past Talks</H2>
        {/* <PastTalkDate /> */}
        <PastTalkList talkList={pastTalks} />
      </section>
    </main>
  );
}

const PastTalkDateContainer = styled.div`
  background: var(--secondary-clr);
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  gap: 0.25rem;
  border-radius: 0.25rem;
  position: absolute;
  left: 0px;
  transform: translateX(calc(-100% - 1rem));

  p:nth-child(2) {
    font-size: 2.25rem;
    font-weight: 700;
  }
`;

function PastTalkDate({ date }) {
  const pastDate = dateFormatter(date);
  return (
    <PastTalkDateContainer>
      <p>{pastDate.month}</p>
      <p>{pastDate.day}</p>
      <p>{pastDate.year}</p>
    </PastTalkDateContainer>
  );
}

export interface Speaker {
  id: string;
  name: string;
  pic: string;
  social: Social;
}

export interface Social {
  twitter: string;
  linkendIn: string;
}

const SPEAKERS: Speaker[] = speakersData;

const TalkCover = styled(NextImage)`
  object-fit: cover;
`;

const SpeakerPic = styled.img`
  height: 78px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  svg {
    height: 32px;
  }

  .youtube-icon svg {
    height: 28px;
  }
`;

const SpeakerContainer = styled.div`
  display: flex;
  gap: 1rem;

  p {
    font-size: 24px;
  }

  svg {
    height: 24px;
  }
`;

const SpeakerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TalkCardContainer = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 28px;
  }
`;

const PastTalkListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));

  /* display: flex;
  flex-wrap: wrap; */
  gap: 1rem;
  row-gap: 3rem;
  position: relative;
  margin: 3rem 0px;
`;

function PastTalkList({ talkList }) {
  const talks = talkList;

  let talksDateGrouped = groupBy((data) => data.date)(talks);

  // console.log("***", talksDateGrouped);

  return (
    <>
      {Object.keys(talksDateGrouped).map((date, index) => (
        <PastTalkListContainer key={index}>
          <PastTalkDate date={date} />
          {talksDateGrouped[date].map((talk, index) => (
            <TalkCard key={index} talk={talk} />
          ))}
        </PastTalkListContainer>
      ))}
    </>
  );
}

function TalkCard({ talk }) {
  const author = SPEAKERS.find(
    (author) => author.id === talk.authorId
  ) as Speaker;
  return (
    <TalkCardContainer>
      {talk.cover && (
        <TalkCover
          src={talk.cover}
          alt={talk.title}
          quality={100}
          height="243"
          width="445"
        />
      )}
      <SocialContainer>
        {talk.references.map((tk, index) => (
          <a key={index} href={tk.link} className={`${tk.icon}-icon`}>
            {ShareSocialLinks[tk.icon]}
          </a>
        ))}
      </SocialContainer>
      <h3>{talk.title}</h3>
      <SpeakerContainer>
        <SpeakerPic src={author.pic} alt={author.name} />
        <SpeakerDetails>
          <p>{author.name}</p>
          <SocialContainer>
            <a href={author.social.twitter}>{ShareSocialLinks.twitter}</a>
            <a href={author.social.linkendIn}>{ShareSocialLinks.linkendIn}</a>
          </SocialContainer>
        </SpeakerDetails>
      </SpeakerContainer>
    </TalkCardContainer>
  );
}
