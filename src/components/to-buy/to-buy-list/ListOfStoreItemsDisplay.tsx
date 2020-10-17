import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { IStoreItem } from '../../../models/IStoreItem';

type Props = {
    token: string;
    storeItems: IStoreItem[];
    deleteStoreItem: (id: number) => void;
};

export const ListOfStoreItemsDisplay = (props: Props) => {
    return (
        <Fragment>
            {props.storeItems.map((storeItem, index) => {
                return (
                    <ul key={index}>
                        <li>{storeItem.name} {storeItem.price} {storeItem.recommendedPlaceToBuy}</li>
                        {/* <Button as={Link} to={'/storeitem/update'} onClick={() => props.editRoommate(roommate)}>edit</Button> */}
                        <button onClick={() => props.deleteStoreItem(storeItem.id)}>X</button>
                    </ul>
                )
            })}
        </Fragment>
    );
};
