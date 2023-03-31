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

const SessionRoom = ({session, roomNumber, fromTime}: SessionProps) => {
    const [isMarked, setIsMarked] = useState(() => false);

    useEffect(() => {
        setIsMarked(isMarkedSession(roomNumber, fromTime));
    })

    const addAsMarked = () => {
        addMarkedSession(roomNumber, fromTime);
        setIsMarked(true);
    }

    const removeAsMarked = () => {
        removeMarkedSession(roomNumber, fromTime);
        setIsMarked(false);
    }

    return <RoomCard>
        <RoomTitle role={isMarked ? 'alert' : 'heading'} onClick={isMarked ? removeAsMarked : addAsMarked}>
            <span>Room {roomNumber}</span>
            <Hosted>by {session.host}</Hosted>
        </RoomTitle>
        <RoomContent>{session.name}</RoomContent>
    </RoomCard>
}

export default SessionRoom;
