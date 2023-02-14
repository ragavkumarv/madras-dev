"use client";
import styled from "@emotion/styled";
import { groupBy } from "ramda";
import { PastTalkDate } from "./PastTalkDate";
import { TalkCard } from "./TalkCard";

export interface Talk {
  title: string;
  authorId: string;
  references: Reference[];
  date: string;
  cover?: string;
}

export interface Reference {
  type: Type;
  icon: Icon;
  link: string;
}

export enum Icon {
  Github = "github",
  Slide = "slide",
  Youtube = "youtube",
}

export enum Type {
  Code = "code",
  Slide = "slide",
  Video = "video",
}

const PastTalkListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));
  justify-items: center;
  /* display: flex;
  flex-wrap: wrap; */
  gap: 1rem;
  row-gap: 3rem;
  position: relative;
  margin: 3rem 0px;
`;

export function PastTalkList({ talkList }: { talkList: Talk[] }) {
  const talks = talkList;

  let talksDateGrouped = groupBy((data: Talk) => data.date)(talks);

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
