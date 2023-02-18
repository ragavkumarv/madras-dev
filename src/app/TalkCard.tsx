"use client";
import styled from "@emotion/styled";
import { ShareSocialLinks } from "./ShareSocialLinks";
import NextImage from "next/image";
import speakersData from "./speakers.json";
import { Talk } from "./PastTalkList";

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
  object-fit: contain;
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
            {author.social?.twitter && (
              <a href={author.social?.twitter}>{ShareSocialLinks.twitter}</a>
            )}
            {author.social?.linkedIn && (
              <a href={author.social?.linkedIn}>{ShareSocialLinks.linkedIn}</a>
            )}
          </SocialContainer>
        </SpeakerDetails>
      </SpeakerContainer>
    </TalkCardContainer>
  );
}
