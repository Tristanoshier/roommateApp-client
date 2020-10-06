import React, { Fragment } from 'react';
import { IRoommate } from '../../../models/roommate';

type Props = {
    token: string;
    roommates: IRoommate[];
    deleteRoommate: (id: number) => void;
};

export const ListOfRoommatesDisplay = (props: Props) => {
    return (
        <Fragment>
            {props.roommates.map((roommate, index) => {
                return (
                    <ul key={index}>
                        <li >{roommate.firstName} {roommate.lastName} {roommate.phoneNumber}</li>
                        <button onClick={() => props.deleteRoommate(roommate.id)}>X</button>
                    </ul>
                )
            })}
        </Fragment>
    );
};
