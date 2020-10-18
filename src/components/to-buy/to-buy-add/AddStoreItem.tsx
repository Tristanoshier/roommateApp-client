import React, { Fragment, useState } from 'react';
import { IStoreItem } from '../../../models/IStoreItem';
import { AddStoreItemDisplay } from './AddStoreItemDisplay';
import axios from 'axios';
import APIURL from '../../../helpers/environment';
import { Redirect } from 'react-router-dom';

type Props = {
    token: string;
    storeItems: IStoreItem[];
    getAllStoreItems: () => void;
};

export const AddStoreItem = (props: Props) => {
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [price, setPrice] = useState('');
    const [recommendedPlaceToBuy, setRecommendedPlaceToBuy] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function addStoreItem(event: any) {
        event.preventDefault();
        if (name) {
            var response = await axios.post(`${APIURL}/storeitem/create`,
                { name: name, isActive: isActive, price: price, recommendedPlaceToBuy: recommendedPlaceToBuy },
                { headers: { 'Content-Type': 'application/json', 'Authorization': props.token } }
            ).then(() => {
                setName('');
                setIsActive(true);
                setPrice('');
                setRecommendedPlaceToBuy('');
                setRedirect(true);
                props.getAllStoreItems();
            });
        } else {
            alert('Please fill out all required fields');
        };
        return response;
    };

    const cancel = () => {
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to='/tobuy' />
    };

    return (
        <Fragment>
            <AddStoreItemDisplay
                token={props.token}
                name={name}
                setName={setName}
                isActive={isActive}
                setIsActive={setIsActive}
                price={price}
                setPrice={setPrice}
                recommendedPlaceToBuy={recommendedPlaceToBuy}
                setRecommendedPlaceToBuy={setRecommendedPlaceToBuy}
                addStoreItem={addStoreItem}
                cancel={cancel}
            />
        </Fragment>
    );
};
