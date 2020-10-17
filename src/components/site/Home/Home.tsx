import React, { Fragment, useState } from 'react';
import { IRoommate } from '../../../models/IRoommate';
import { HomeDisplay } from './HomeDisplay';
import axios from 'axios';
import APIURL from '../../../helpers/environment';
import { IStoreItem } from '../../../models/IStoreItem';

type Props = {
    clickLogout: () => void;
    token: string;
};

const Home = (props: Props) => {
    const [roommates, setRoommates] = useState<IRoommate[]>([]);
    const [storeItems, setStoreItems] = useState<IStoreItem[]>([]);
    const [roommateUpdate, setRoommateUpdate] = useState<IRoommate | undefined>();

    async function getAllRoommates() {
        const response: any = await axios.get(`${APIURL}/user/find`,
            { headers: { 'Content-Type': 'application/json', 'Authorization': props.token } });
        setRoommates(response.data.users);
        return response;
    };

    async function getAllStoreItems() {
        const response: any = await axios.get(`${APIURL}/storeitem/find`,
            { headers: { 'Content-Type': 'application/json', 'Authorization': props.token } });
            setStoreItems(response.data.storeItems)
            return response;
    };

    const editRoommate = (roommate: IRoommate) => {
        setRoommateUpdate(roommate);
    };
    
    return (
        <Fragment>
            <HomeDisplay
                clickLogout={props.clickLogout}
                token={props.token}
                roommates={roommates}
                getAllRoommates={getAllRoommates} 
                editRoommate={editRoommate}
                roommateUpdate={roommateUpdate}
                getAllStoreItems={getAllStoreItems}
                storeItems={storeItems}
            />
        </Fragment>
    );
};

export default Home;
