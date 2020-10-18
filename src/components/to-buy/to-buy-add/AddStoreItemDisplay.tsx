import React, { Dispatch, Fragment, SetStateAction } from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
    token: string;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    price: string;
    setPrice: Dispatch<SetStateAction<string>>;
    recommendedPlaceToBuy: string;
    setRecommendedPlaceToBuy: Dispatch<SetStateAction<string>>;
    addStoreItem: (event: any) => void;
    cancel: () => void;
};

export const AddStoreItemDisplay = (props: Props) => {
    return (
        <Fragment>
             <form onSubmit={props.addStoreItem} autoComplete='off'>
                <input onChange={e => props.setName(e.target.value)} value={props.name} placeholder='* Item name' />
                <br/>
                <input onChange={e => props.setPrice(e.target.value)} value={props.price} placeholder='Price' />
                <br/>
                <input onChange={e => props.setRecommendedPlaceToBuy(e.target.value)} value={props.recommendedPlaceToBuy} placeholder='recommended place to buy?' />
                <br/>
                <Button type='submit'>Add</Button>
                <Button onClick={props.cancel} type='button'>Cancel</Button>
            </form>
        </Fragment>
    );
};
