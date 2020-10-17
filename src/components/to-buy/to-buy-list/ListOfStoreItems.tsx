import React, { Fragment, useEffect } from 'react';
import { IStoreItem } from '../../../models/IStoreItem';
import axios from 'axios';
import APIURL from '../../../helpers/environment';
import { ListOfStoreItemsDisplay } from './ListOfStoreItemsDisplay';

type Props = {
    token: string;
    getAllStoreItems: () => void;
    storeItems: IStoreItem[];   
}

export const ListOfStoreItems = (props: Props) => {

    useEffect(() => {
        props.getAllStoreItems();
    }, []);

    async function deleteStoreItem(id: number) {
        var response: any = await axios.delete(`${APIURL}/storeitem/delete/${id}`, {
            headers:{'Content-Type': 'application/json', 'Authorization': props.token}
        }).then(() => props.getAllStoreItems());
        return response.data;
    };

    return (
        <Fragment>
            <ListOfStoreItemsDisplay
                token={props.token}
                storeItems={props.storeItems}
                deleteStoreItem={deleteStoreItem}
            />
        </Fragment>
    );
};
