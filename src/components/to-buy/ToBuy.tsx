import React, { Fragment } from 'react';
import { IStoreItem } from '../../models/IStoreItem';
import { ToBuyDisplay } from './ToBuyDisplay';

type Props = {
    token: string;
    getAllStoreItems: () => void;
    storeItems: IStoreItem[];
};

export const ToBuy = (props: Props) => {
    return (
        <Fragment>
            <ToBuyDisplay 
                token={props.token}
                getAllStoreItems={props.getAllStoreItems}
                storeItems={props.storeItems}
            />
        </Fragment>
    );
};
