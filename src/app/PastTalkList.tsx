"use client";
import styled from "@emotion/styled";
import { groupBy } from "ramda";
import { PastTalkDate } from "./PastTalkDate";
import { TalkCard } from "./Speaker";

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
export function PastTalkList({ talkList }) {
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
