import React, { Fragment, useEffect } from 'react';
import { ListOfRoommatesDisplay } from './ListOfRoommatesDisplay';
import { IRoommate } from '../../../models/roommate';

type Props = {
    token: string;
    getAllRoommates: () => any;
    roommates: IRoommate[];
};

export const ListOfRoommates = (props: Props) => {

    useEffect(() => {
        props.getAllRoommates();
    }, [])

    return (
        <Fragment>
            <ListOfRoommatesDisplay token={props.token} roommates={props.roommates} />
        </Fragment>
    );
};
