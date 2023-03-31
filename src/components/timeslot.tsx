import {Session, TimeSlot} from "../data/schedule";
import SessionRoom from "./session-room";
import * as React from "react";
import styled from "styled-components";
import MainRoom from "./main-room";
import TimeSlotHeadline from "./timeslot-headline";

export type TimeslotProps = {
    timeslot: TimeSlot;
}

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

const Timeslot = ({timeslot}: TimeslotProps) => {

    const renderSession = (session: Session) => {
        return <SessionRoom session={session} roomNumber={session.roomNumber} fromTime={timeslot.from} key={`r${timeslot.from.getHours()}${session.roomNumber}`}/>
    };
    return <>
        <TimeSlotHeadline timeslot={timeslot}></TimeSlotHeadline>
        {
            timeslot.sessions && !timeslot.overarchingTopic
                ? <Sessions>{timeslot.sessions.map(renderSession)}</Sessions>
                : <MainRoom title={timeslot.overarchingTopic!}/>
        }
    </>
}

export default Timeslot;
