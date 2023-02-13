"use client";
import styled from "@emotion/styled";
import { dateFormatter } from "./dateFormatter";

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
export function PastTalkDate({ date }) {
  const pastDate = dateFormatter(date);
  return (
    <PastTalkDateContainer>
      <p>{pastDate.month}</p>
      <p>{pastDate.day}</p>
      <p>{pastDate.year}</p>
    </PastTalkDateContainer>
  );
}
