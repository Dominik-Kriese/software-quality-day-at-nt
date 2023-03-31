import * as React from "react";
import styled from "styled-components";
import * as dayjs from "dayjs";
import {TimeSlot} from "../data/schedule";
import {TimeslotProps} from "./timeslot";
import {now} from "../data/now";

const Headline = styled.div`
  width: 100%;
  text-align: center;
  padding: 1.5rem 0 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
`

const SessionMarker = styled.div`
  font-size: 0.875rem;
  font-style: italic;
  color: #9f9f9f;
  width: 100%;
  border-bottom: 1px solid #9f9f9f;
  line-height: 0.1em;
  margin: 10px 0 20px;
  
  span {
    background: black;
    padding: 0 1rem;
  }
`

const calculateTimeSlotInformation = (timeslot: TimeSlot) => {
    const nowTime = now().getTime();
    const isNext = nowTime > timeslot.from.getTime() - 60 * 1000 * 60 && nowTime <= timeslot.from.getTime();
    const isCurrent = nowTime > timeslot.from.getTime() && nowTime < timeslot.to.getTime();
    const nextNote = isNext ? 'next' : '';
    const currentNote = isCurrent ? 'ongoing' : '';
    return `${nextNote}${currentNote}`;
}

const TimeSlotHeadline = ({timeslot}: TimeslotProps) => {
    const sessionMarker = calculateTimeSlotInformation(timeslot);
    return <Headline>
        { !!sessionMarker ? <SessionMarker>
            <span>{sessionMarker}</span>
        </SessionMarker> : <></> }
        <div>
            {dayjs(timeslot.from).format('HH:mm')} to {dayjs(timeslot.to).format('HH:mm')}
        </div>
    </Headline>
}

export default TimeSlotHeadline;
