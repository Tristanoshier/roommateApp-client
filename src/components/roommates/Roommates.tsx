import React, { Fragment, useState } from 'react';
import { IRoommate } from '../../models/roommate';
import { RoommatesDisplay } from './RoommatesDisplay';
import axios from 'axios';
import APIURL from '../../helpers/environment';

type Props = {
    token: string;
};

export const Roommates = (props: Props) => {
    const [roommates, setRoommates] = useState<IRoommate[]>([]);

    async function getAllRoommates() {
        const response: any =  await axios.get(`${APIURL}/user/find`,
        { headers: { 'Content-Type': 'application/json', 'Authorization': props.token } });
        setRoommates(response.data.users);
        return response;
    };

    return (
        <Fragment>
            <RoommatesDisplay 
                token={props.token} 
                roommates={roommates} 
                getAllRoommates={getAllRoommates}
            />
        </Fragment>
    );
};
