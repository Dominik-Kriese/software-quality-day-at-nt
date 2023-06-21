import {Session, TimeSlot} from "../data/schedule";
import SessionRoom from "./session-room";
import * as React from "react";
import styled from "styled-components";
import MainRoom from "./main-room";
import TimeSlotHeadline from "./timeslot-headline";
import dayjs from "dayjs";

export type TimeslotProps = {
    timeslot: TimeSlot;
}

const Sessions = styled.div`
  --min: 25ch;
  --gap: 1rem;

  display: grid;
  gap: var(--gap);
  /* min() with 100% prevents overflow
  in extra narrow spaces */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
`

const Timeslot = ({timeslot}: TimeslotProps) => {

    const renderSession = (session: Session) => {
        return <SessionRoom session={session} roomNumber={session.roomNumber} fromTime={timeslot.from} key={`r${timeslot.from.getHours()}${session.roomNumber}`}/>
    };
    
    const headlineId = `headline_${dayjs(timeslot.from).format('HH')}`;
    return <fieldset aria-labelledby={headlineId}>
        <TimeSlotHeadline timeslot={timeslot}></TimeSlotHeadline>
        {
            timeslot.sessions && !timeslot.overarchingTopic
                ? <Sessions>{timeslot.sessions.map(renderSession)}</Sessions>
                : <MainRoom title={timeslot.overarchingTopic!}/>
        }
    </fieldset>
}

export default Timeslot;
