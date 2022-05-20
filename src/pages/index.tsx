import * as React from "react";
import "../styles/style.css";
import styled from "styled-components";
import {schedule} from "../data/schedule";
import * as dayjs from "dayjs";
import 'dayjs/locale/de'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";

// TODO insert start and end.
// TODO insert zoom link.

const Timeslot = styled.div`
  width: 100%;
`

const Wrapper = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  
  @media (min-width: 960px) {
    width: 960px;
    margin: 0 auto;
  }

  @media (max-width: 959px) {
    width: calc(100% - 2rem);
    padding: 1rem;
  }
`

const Headline = styled.h1`
  margin: 2rem 0 2rem;
  text-align: center;
`

const TimeslotHeadline = styled.div`
  width: 100%;
  text-align: center;
  padding: 1.5rem 0 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`

const TimeSlotContent = styled.div`
  display: grid;
  gap: 1rem;
  margin: 1rem 0;
  width: 100%;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 959px) {
    grid-template-columns: 1fr 1fr;
  }
`

const RoomCard = styled.div`
  background-color: #1d1d1d;
  border-radius: 5px;
  overflow: hidden;
`

const RoomTitle = styled.div`
  font-weight: bold;
  background-color: #5B4897;
  padding: 0.75rem 0.75rem 0.5rem;
  display: flex;
  justify-content: space-between;
`

const RoomContent = styled.div`
  padding: 0.5rem 0.75rem 0.75rem;
`

const JoinLink = styled.a`
  background-color: #E9454E;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #b7434b;
  }
`

const Hosted = styled.span`
  color: #f4f2ff;
  font-size: 0.75rem;
`

const IndexPage = () => {
    return (
        <Wrapper>
            <Headline>Software Quality Day Schedule</Headline>
            <JoinLink href={'http://www.google.de'} target={'_blank'}>Join us in Zoom <FontAwesomeIcon icon={faVideo}/></JoinLink>
            {schedule.timeslots.map((timeslot, i) => <Timeslot key={`ts${i}`}>
                <TimeslotHeadline>
                    {dayjs(timeslot.from).format('HH:mm')} to {dayjs(timeslot.to).format('HH:mm')}
                </TimeslotHeadline>
                <TimeSlotContent>
                    {
                        timeslot.sessions.map((session, j) =>
                            <RoomCard key={`ts${i}${j}`}>
                                <RoomTitle><span>Room {j+1}</span><Hosted>by {session.host}</Hosted></RoomTitle>
                                <RoomContent>{session.name}</RoomContent>
                            </RoomCard>)
                    }
                </TimeSlotContent>
            </Timeslot>)}
        </Wrapper>
    )
};

export default IndexPage;
