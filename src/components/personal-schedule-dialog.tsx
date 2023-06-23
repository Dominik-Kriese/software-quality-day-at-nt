import * as React from 'react';
import styled from "styled-components";
import {getAllMarkedSessions} from "../data/mark-sessions";
import TimeSlotHeadline from "./timeslot-headline";
import {TimeslotProps} from "./timeslot";

const ScheduleDialogWrapper = styled.div`
  background-color: rgba(35, 35, 35, 0.62);
  backdrop-filter: blur(3px);
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScheduleDialog = styled.div`
  background-color: black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 95vh;
  max-width: 95vw;
`

const ScheduleHeader = styled.div`
  background-color: #5B4897;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

const ScheduleTitle = styled.span`
  font-size: 1.25rem;
`

const ScheduleBody = styled.div`
  padding: 0 1rem 1.5rem;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const CloseButton = styled.a`
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    color: #bbbbbb;
  }
`

const Room = styled.div`
  font-size: 0.75rem;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
  color: #9f9f9f;
`

type PersonalScheduleProps = {
    closeFn: () => void;
}

const RenderScheduleHeader = ({closeFn}: PersonalScheduleProps) => {
    return <ScheduleHeader>
        <ScheduleTitle>Your personal Schedule</ScheduleTitle>
        <CloseButton onClick={closeFn}>X</CloseButton>
    </ScheduleHeader>
}

const RenderTimeslot = ({timeslot}: TimeslotProps) => {
    return <>
        <TimeSlotHeadline key={timeslot.from.toUTCString()} timeslot={timeslot}>
        </TimeSlotHeadline>
        {
            timeslot
                .sessions
                ?.map(session => <div key={`${session.name}-${timeslot.from.toUTCString()}`}>
                    <Room>Room {session.roomNumber} - by {session.host}: </Room>
                    {session.name}
            </div>)
        }
    </>
}

const PersonalScheduleDialog = ({closeFn}: PersonalScheduleProps) => {
    const result = getAllMarkedSessions();
    const actOnScheduleDialogClick = (event) => event.stopPropagation();

    return <ScheduleDialogWrapper onClick={closeFn}>
        <ScheduleDialog onClick={actOnScheduleDialogClick}>
            <RenderScheduleHeader closeFn={closeFn}></RenderScheduleHeader>
            <ScheduleBody>
                {result.timeslots.map(timeslot => <RenderTimeslot timeslot={timeslot}></RenderTimeslot>)}
            </ScheduleBody>
        </ScheduleDialog>
    </ScheduleDialogWrapper>
}

export default PersonalScheduleDialog;
