"use client";
import styled from "@emotion/styled";
import { PrimaryButton } from "./PrimaryButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import upcomingTalkRegistration from "./upcoming-meetup-details.json";
import { dateFormatter } from "./dateFormatter";
import { MeetupDetail } from "@/pages";

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
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DateTimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  /* gap: 1rem; */
  text-transform: uppercase;

  @media (min-width: 500px) {
    font-size: 2rem;
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
export function UpcomingRegistration({
  meetupDetail,
}: {
  meetupDetail: MeetupDetail;
}) {
  const today = dateFormatter(meetupDetail.date);
  let fromDate = new Date(`${meetupDetail.date}T${meetupDetail.fromTime}`);
  const fromTime = fromDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  let endDate = new Date(`${meetupDetail.date}T${meetupDetail.endTime}`);
  const endTime = endDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <RegistrationContainer>
      <DateTimeContainer>
        <p>
          {today.month} <strong>{today.day}</strong> {today.year}
        </p>
        <DateTime>
          <AccessTimeIcon
            sx={{
              fontSize: "2rem",
            }}
          />
          {fromTime} - {endTime} IST
        </DateTime>
      </DateTimeContainer>
      <Place target="_blank" href={meetupDetail.venue.data.attributes.mapLink}>
        <PlaceIcon
          sx={{
            color: "var(--accent-clr)",
            fontSize: "1.75rem",
          }}
        />
        {meetupDetail.venue.data.attributes.name}
      </Place>
      <PrimaryButton
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => {
          window.location.replace(meetupDetail.registrationLink);
        }}
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
