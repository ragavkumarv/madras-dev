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
        <UpcomingRegistration />
      </section>
      <Spacer4 />
      <section>
        <H2 id="past-talks">Past Talks</H2>
        {/* <PastTalkDate /> */}
        <TalkCard />
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

  p:nth-child(2) {
    font-size: 2.25rem;
    font-weight: 700;
  }
`;

function PastTalkDate() {
  const pastDate = dateFormatter("26/01/2023");
  return (
    <PastTalkDateContainer>
      <p>{pastDate.month}</p>
      <p>{pastDate.day}</p>
      <p>{pastDate.year}</p>
    </PastTalkDateContainer>
  );
}

export interface Author {
  id: string;
  name: string;
  pic: string;
  social: Social;
}

export interface Social {
  twitter: string;
  linkendIn: string;
}

const AUTHORS: Author[] = [
  {
    id: "ragavkumarv",
    name: "Ragav Kumar V",
    pic: "https://ik.imagekit.io/ragavkumarv/tr:450/potraits/ragavkumarv-coat-clean-high-res-touch-pos-sm.png",
    social: {
      twitter: "ragavkumarv",
      linkendIn: "ragavkumarv",
    },
  },
];

const TalkCover = styled(NextImage)`
  object-fit: cover;
`;

const AuthorPic = styled.img`
  height: 78px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  svg {
    height: 28px;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  gap: 1rem;

  p {
    font-size: 24px;
  }
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const TalkCardContainer = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 28px;
  }
`;

function TalkCard() {
  const talk = {
    cover:
      "https://ik.imagekit.io/ragavkumarv/talks/chennai-js-qwik-a-zero-js-resumable-framework.png",
    title: "Qwik - A Zero JS Resumable Framework",
    authorId: "ragavkumarv",
    references: [
      { type: "video", icon: "youtube", link: "" },
      { type: "slide", icon: "slide", link: "" },
      { type: "code", icon: "github", link: "" },
    ],
  };

  const author = AUTHORS.find(
    (author) => author.id === talk.authorId
  ) as Author;
  return (
    <TalkCardContainer>
      <TalkCover
        src={talk.cover}
        alt={talk.title}
        quality={100}
        height="243"
        width="445"
      />
      <SocialContainer>
        {talk.references.map((tk, index) => (
          <a key={index} href={tk.link}>
            {ShareSocialLinks[tk.icon]}
          </a>
        ))}
      </SocialContainer>
      <h3>{talk.title}</h3>
      <AuthorContainer>
        <AuthorPic src={author.pic} alt={author.name} />
        <AuthorDetails>
          <p>{author.name}</p>
          <SocialContainer>
            <a href={author.social.twitter}>{ShareSocialLinks.twitter}</a>
            <a href={author.social.linkendIn}>{ShareSocialLinks.linkendIn}</a>
          </SocialContainer>
        </AuthorDetails>
      </AuthorContainer>
    </TalkCardContainer>
  );
}
