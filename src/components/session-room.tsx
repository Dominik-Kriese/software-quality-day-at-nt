import * as React from "react";
import styled from "styled-components";
import {Session} from "../data/schedule";
import { RoomCard, RoomContent, RoomTitle } from "./room-components";
import {useContext, useEffect, useState} from "react";
import {addMarkedSession, isMarkedSession, removeMarkedSession} from "../data/mark-sessions";

type SessionProps = {
    session: Session,
    roomNumber: number,
    fromTime: Date
}


const Hosted = styled.span`
  color: #f4f2ff;
  font-size: 0.75rem;
`

const CheckSession = styled.input`
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: rgb(29, 29, 29);
  /* Not removed via appearance */
  margin: 0;
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 0.25rem;
  transform: translateY(-0.075em);
  
  &:before {
    content: "";
    width: 0.875rem;
    height: 0.875rem;
    transform: scale(0) translate(-100%, -100%);
    top: 50%;
    left: 50%;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #E9454E;
    display: block;
    position: absolute;
    border-radius: 0.25rem;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  
  &:checked:before {
    transform: scale(1) translate(-50%, -50%);
  }
`

const SessionRoom = ({session, roomNumber, fromTime}: SessionProps) => {
    const [isMarked, setIsMarked] = useState(() => false);

    useEffect(() => {
        setIsMarked(isMarkedSession(roomNumber, fromTime));
    })

    const addAsMarked = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('adding');
        addMarkedSession(roomNumber, fromTime);
        setIsMarked(true);
    }

    const removeAsMarked = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('removing');
        removeMarkedSession(roomNumber, fromTime);
        setIsMarked(false);
    }

    const id = `${session.roomNumber}${fromTime.getTime()}`

    return <RoomCard onClick={isMarked ? removeAsMarked : addAsMarked}>
        <RoomTitle role={isMarked ? 'alert' : 'heading'}>
            <CheckSession id={id} type={"checkbox"} checked={isMarked}/>
            <label htmlFor={id}>
                <span>Room {roomNumber}</span>
                <Hosted>by {session.host}</Hosted>
            </label>
        </RoomTitle>
        <RoomContent>{session.name}</RoomContent>
    </RoomCard>
}

export default SessionRoom;
