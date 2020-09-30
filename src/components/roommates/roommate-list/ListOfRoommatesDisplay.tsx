import React, { Fragment } from 'react';
import { IRoommate } from '../../../models/roommate';

type Props = {
    token: string;
    roommates: IRoommate[];
};

export const ListOfRoommatesDisplay = (props: Props) => {
    return (
        <Fragment>
            {props.roommates.map((roommate, index) => {
                return (
                    <ul key={index}>
                        <li >{roommate.firstName} {roommate.lastName}</li>
                    </ul>
                )
            })}
        </Fragment>
    );
};
