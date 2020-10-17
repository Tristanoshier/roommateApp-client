import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { IStoreItem } from '../../models/IStoreItem';
import { ListOfStoreItems } from './to-buy-list/ListOfStoreItems';

type Props = {
    token: string;
    storeItems: IStoreItem[];
    getAllStoreItems: () => void;
};

export const ToBuyDisplay = (props: Props) => {
    return (
        <Fragment>
            <h1>Things we need to Buy</h1>
            <Button as={Link} to={'/tobuy/add'}>Add Item +</Button>
            <br />
            <ListOfStoreItems
                token={props.token}
                getAllStoreItems={props.getAllStoreItems}
                storeItems={props.storeItems}
            />
        </Fragment>
    );
};
