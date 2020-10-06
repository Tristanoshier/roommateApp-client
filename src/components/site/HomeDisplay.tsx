import React, { Fragment } from 'react'
import { IRoommate } from '../../models/roommate';
import { Navbar } from './Navbar';

type Props = {
    clickLogout: () => void;
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => void;
};

export const HomeDisplay = (props: Props) => {
    return (
        <Fragment>
            <Navbar
                clickLogout={props.clickLogout}
                token={props.token}
                roommates={props.roommates}
                getAllRoommates={props.getAllRoommates} />
        </Fragment>
    );
};
