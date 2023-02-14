"use client";
import styled from "@emotion/styled";
import { PrimaryButton } from "./PrimaryButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import upcomingTalkRegistration from "./upcoming-meetup-details.json";
import { dateFormatter } from "./dateFormatter";

export const H2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const UpcomingContainer = styled.section`
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
const DateTimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* gap: 1rem; */
  text-transform: uppercase;

  @media (min-width: 500px) {
    gap: 2rem;
  }
`;
const Place = styled.a`
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
export function UpcomingRegistration() {
  const today = dateFormatter(upcomingTalkRegistration.date);
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
          {upcomingTalkRegistration.fromTime} -{" "}
          {upcomingTalkRegistration.endTime} IST
        </DateTime>
      </DateTimeContainer>
      <Place target="_blank" href={upcomingTalkRegistration.location.mapLink}>
        <PlaceIcon
          sx={{
            color: "var(--accent-clr)",
            fontSize: "1.75rem",
          }}
        />
        {upcomingTalkRegistration.location.name}
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
