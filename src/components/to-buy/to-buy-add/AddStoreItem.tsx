import React, { Fragment, useState } from 'react';
import { IStoreItem } from '../../../models/IStoreItem';
import { AddStoreItemDisplay } from './AddStoreItemDisplay';

type Props = {
    token: string;
    storeItems: IStoreItem[];
    getAllStoreItems: () => void;
}

export const AddStoreItem = (props: Props) => {
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [price, setPrice] = useState(undefined);

    return (
        <Fragment>
            <AddStoreItemDisplay
                token={props.token}
            />
        </Fragment>
    );
};
