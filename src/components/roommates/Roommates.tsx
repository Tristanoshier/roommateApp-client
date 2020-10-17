import React, { Fragment } from 'react';
import { IRoommate } from '../../models/IRoommate';
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
