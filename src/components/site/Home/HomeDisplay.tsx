import React, { Fragment } from 'react'
import { IRoommate } from '../../../models/IRoommate';
import { IStoreItem } from '../../../models/IStoreItem';
import { Navbar } from '../Navbar';

type Props = {
    clickLogout: () => void;
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => void;
    editRoommate: (roommate: IRoommate) => void;
    roommateUpdate: IRoommate | undefined;
    getAllStoreItems: () =>  void;
    storeItems: IStoreItem[];
};

export const HomeDisplay = (props: Props) => {
    return (
        <Fragment>
            <Navbar
                clickLogout={props.clickLogout}
                token={props.token}
                roommates={props.roommates}
                getAllRoommates={props.getAllRoommates}
                editRoommate={props.editRoommate}
                roommateUpdate={props.roommateUpdate}
                getAllStoreItems={props.getAllStoreItems}
                storeItems={props.storeItems}
            />
        </Fragment>
    );
};
