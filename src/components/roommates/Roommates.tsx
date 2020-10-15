import React, { Fragment, useState } from 'react';
import { IRoommate } from '../../models/roommate';
import { RoommatesDisplay } from './RoommatesDisplay';

type Props = {
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => void;
    editRoommate: (roommate: IRoommate) => void;
};

export const Roommates = (props: Props) => {
    return (
        <Fragment>
            <RoommatesDisplay 
                token={props.token} 
                roommates={props.roommates} 
                getAllRoommates={props.getAllRoommates}
                editRoommate={props.editRoommate}
            />
        </Fragment>
    );
};
