import * as React from "react";
import styled from "styled-components";
import {Session} from "../data/schedule";
import { RoomCard, RoomContent, RoomTitle } from "./room-components";

type SessionProps = {
    session: Session,
    roomNumber: number
}


const Hosted = styled.span`
  color: #f4f2ff;
  font-size: 0.75rem;
`

const SessionRoom = ({session, roomNumber}: SessionProps) => {
    return <RoomCard>
        <RoomTitle><span>Room {roomNumber}</span><Hosted>by {session.host}</Hosted></RoomTitle>
        <RoomContent>{session.name}</RoomContent>
    </RoomCard>
}

export default SessionRoom;
