import React, { Fragment } from 'react';
import { IRoommate } from '../../models/roommate';
import { AddRoommate } from './roommate-add/AddRoommate';
import { ListOfRoommates } from './roommate-list/ListOfRoommates';

type Props = {
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => any;
};

export const RoommatesDisplay = (props: Props) => {
    return (
        <Fragment>
            <h1>Roommates</h1>
            <AddRoommate token={props.token} getAllRoommates={props.getAllRoommates} />
            <br/>
            <ListOfRoommates token={props.token} getAllRoommates={props.getAllRoommates} roommates={props.roommates} />
        </Fragment>
    );
};
