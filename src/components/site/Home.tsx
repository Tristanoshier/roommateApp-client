import React, { Fragment, useState } from 'react';
import { IRoommate } from '../../models/roommate';
import { HomeDisplay } from './HomeDisplay';
import axios from 'axios';
import APIURL from '../../helpers/environment';

type Props = {
    clickLogout: () => void;
    token: string;
};

const Home = (props: Props) => {
    const [roommates, setRoommates] = useState<IRoommate[]>([]);

    async function getAllRoommates() {
        const response: any = await axios.get(`${APIURL}/user/find`,
            { headers: { 'Content-Type': 'application/json', 'Authorization': props.token } });
        setRoommates(response.data.users);
        return response;
    };
    
    return (
        <Fragment>
            <HomeDisplay
                clickLogout={props.clickLogout}
                token={props.token}
                roommates={roommates}
                getAllRoommates={getAllRoommates} />
        </Fragment>
    );
};

export default Home;
