"use client";
import styled from "@emotion/styled";
import { dateFormatter } from "./dateFormatter";

const PastTalkDateContainer = styled.div`
  display: flex;
  background: var(--secondary-clr);
  grid-column: 1 / -1;
  padding: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
  gap: 0.5rem;
  border-radius: 0.25rem;
  justify-content: center;
  width: 100%;

  p:nth-of-type(2) {
    font-size: 2rem;
    font-weight: 700;
  }

  @media (min-width: 1400px) {
    width: min-content;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
    position: absolute;
    left: 0px;
    gap: 0.25rem;
    transform: translateX(calc(-100% - 1rem));
  }
`;

export function PastTalkDate({ date }: { date: string }) {
  const pastDate = dateFormatter(date);
  return (
    <PastTalkDateContainer>
      <p>{pastDate.month}</p>
      <p>{pastDate.day}</p>
      <p>{pastDate.year}</p>
    </PastTalkDateContainer>
  );
}
