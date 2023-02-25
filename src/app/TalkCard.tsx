"use client";
import styled from "@emotion/styled";
import { ShareSocialLinks } from "./ShareSocialLinks";
import NextImage from "next/image";
import speakersData from "./speakers.json";
import { Talk } from "./PastTalkList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Spacer4 } from "./UpcomingRegistration";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const defaultUserIcon =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=1380&t=st=1677346403~exp=1677347003~hmac=fbc7e4fc15964fc33481d547ec91c2c80acd21aaf1f826ea59ea36b49d4a9485";
export interface Speaker {
  id: string;
  name: string;
  pic: string;
  social: Social;
}

export interface Social {
  twitter?: string;
  linkendIn?: string;
}
const SPEAKERS: Speaker[] = speakersData;

const TalkCover = styled(NextImage)`
  object-fit: cover;
  object-position: center bottom;
  width: 100%;
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
    height: 28px;
  }
`;

const SocialContainerX = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0px;
  transform: translateY(calc(-50% - 1rem));

  svg {
    height: 36px;
  }
`;

const SpeakerContainer = styled.div`
  margin-top: auto;
  /* flex-grow: 1; */
  display: flex;
  gap: 1rem;

  p {
    font-size: 24px;
  }

  svg {
    height: 26px;
  }
`;
const SpeakerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TalkCardContainer = styled(Card)`
  width: 100%;
  max-width: 445px;
  /* min-height: 450px; */
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 28px;
  }
`;

const TalkTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;

const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 41.41px;
  height: 41.41px;

  background: #ffffff;
  box-shadow: 0px 4.35882px 4.35882px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;

export function TalkCard({ talk }: { talk: Talk }) {
  // const author = SPEAKERS.find(
  //   (author) => author.id === talk.authorId
  // ) as Speaker;

  const author = talk?.speaker?.data?.attributes || {};

  console.log(author);

  return (
    <TalkCardContainer>
      {talk.cover?.data?.attributes?.url && (
        <TalkCover
          src={talk.cover?.data?.attributes?.url}
          alt={talk.title}
          quality={100}
          height="243"
          width="445"
        />
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <SocialContainerX>
          {talk.references.map(
            (tk, index) =>
              tk.link && (
                <SocialIcon key={index}>
                  <a href={tk.link} className={`${tk.icon}-icon`}>
                    {ShareSocialLinks[tk.icon]}
                  </a>
                </SocialIcon>
              )
          )}
        </SocialContainerX>
        <Tooltip title={talk.title}>
          <TalkTitle>{talk.title}</TalkTitle>
        </Tooltip>
        <Spacer4 />
        <SpeakerContainer>
          <SpeakerPic src={author.pic || defaultUserIcon} alt={author.name} />
          <SpeakerDetails>
            <p>{author.name}</p>
            <SocialContainer>
              {author.social?.twitter && (
                <a href={author.social?.twitter}>{ShareSocialLinks.twitter}</a>
              )}
              {author.social?.linkedIn && (
                <a href={author.social?.linkedIn}>
                  {ShareSocialLinks.linkedIn}
                </a>
              )}
            </SocialContainer>
          </SpeakerDetails>
        </SpeakerContainer>
      </CardContent>
    </TalkCardContainer>
  );
}
