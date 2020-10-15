import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { IRoommate } from '../../../models/roommate';

type Props = {
    token: string;
    roommates: IRoommate[];
    deleteRoommate: (id: number) => void;
    editRoommate: (roommate: IRoommate) => void;
};

export const ListOfRoommatesDisplay = (props: Props) => {
    return (
        <Fragment>
            {props.roommates.map((roommate, index) => {
                return (
                    <ul key={index}>
                        <li>{roommate.firstName} {roommate.lastName} {roommate.phoneNumber}</li>
                        <Button as={Link} to={'/roommates/update'} onClick={() => props.editRoommate(roommate)}>edit</Button>
                        <button onClick={() => props.deleteRoommate(roommate.id)}>X</button>
                    </ul>
                )
            })}
        </Fragment>
    );
};
