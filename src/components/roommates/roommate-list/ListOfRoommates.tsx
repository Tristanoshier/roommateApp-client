import React, { Fragment, useEffect } from 'react';
import { ListOfRoommatesDisplay } from './ListOfRoommatesDisplay';
import { IRoommate } from '../../../models/roommate';
import APIURL from '../../../helpers/environment';
import axios from 'axios';

type Props = {
    token: string;
    getAllRoommates: () => any;
    roommates: IRoommate[];
    editRoommate: (roommate: IRoommate) => void;
};

export const ListOfRoommates = (props: Props) => {

    useEffect(() => {
        props.getAllRoommates();
    }, []);

    async function deleteRoommate(id: number){
        var response = await axios.delete(`${APIURL}/user/delete/${id}`, {
            headers:{'Content-Type': 'application/json', 'Authorization': props.token}
        }).then(() => props.getAllRoommates());
        return response.data;
    };

    return (
        <Fragment>
            <ListOfRoommatesDisplay 
                token={props.token} 
                roommates={props.roommates} 
                deleteRoommate={deleteRoommate} 
                editRoommate={props.editRoommate}
            />
        </Fragment>
    );
};
