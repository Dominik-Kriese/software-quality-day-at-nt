import {Session, TimeSlot} from "../data/schedule";
import * as dayjs from "dayjs";
import SessionRoom from "./session-room";
import * as React from "react";
import styled from "styled-components";
import MainRoom from "./main-room";

type TimeslotProps = {
    timeslot: TimeSlot;
}
const TimeslotHeadline = styled.div`
  width: 100%;
  text-align: center;
  padding: 1.5rem 0 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`

const Sessions = styled.div`
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

const OverarchingTopic = styled.div`
  display: block;
  width: calc(100% - 1.5rem);
  margin: 1rem 0;
  background-color: #5B4897;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  padding: 0.75rem;
`

const calculateTimeSlotInformation = (timeslot: TimeSlot) => {
    const now = new Date().getTime();
    const isNext = now > timeslot.from.getTime() - 60 * 1000 * 60 && now <= timeslot.from.getTime();
    const isCurrent = now > timeslot.from.getTime() && now < timeslot.to.getTime();
    const nextSuffix = isNext ? ' - next' : '';
    const currentSuffix = isCurrent ? ' - ongoing' : '';
    return `${nextSuffix}${currentSuffix}`;
}

const Timeslot = ({timeslot}: TimeslotProps) => {
    const renderSession = (session: Session, j: number) => {
        return <SessionRoom session={session} roomNumber={j+1} key={`r${timeslot.from.getHours()}${j}`}/>
    };
    const suffix = calculateTimeSlotInformation(timeslot);
    const timeslotHeadline = <>{dayjs(timeslot.from).format('HH:mm')} to {dayjs(timeslot.to).format('HH:mm')}{suffix}</>;
    return <>
        <TimeslotHeadline>
            {timeslotHeadline}
        </TimeslotHeadline>
        {
            timeslot.sessions && !timeslot.overarchingTopic
                ? <Sessions>{timeslot.sessions.map(renderSession)}</Sessions>
                : <MainRoom title={timeslot.overarchingTopic!}/>
        }
    </>
}

export default Timeslot;
