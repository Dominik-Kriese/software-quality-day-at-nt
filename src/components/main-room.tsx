import {RoomCard, RoomContent, RoomTitle} from "./room-components";
import * as React from "react";

type MainRoomProps = {
    title: string;
}

const MainRoom = ({title}: MainRoomProps) => {
    return <RoomCard style={{margin: '1rem 0'}}>
        <RoomTitle><span>Main Zoom Room</span></RoomTitle>
        <RoomContent>{title}</RoomContent>
    </RoomCard>
};

export default MainRoom
