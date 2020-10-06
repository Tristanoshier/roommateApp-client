import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { IRoommate } from '../../models/roommate';
import { ListOfRoommates } from './roommate-list/ListOfRoommates';

type Props = {
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => any;
};

export const RoommatesDisplay = (props: Props) => {
    return (
        <Fragment>
            <h1>Roommates</h1>
            <Button as={Link} to={'/roommates/add'}>Add Roommate +</Button>
            <br/>
            <ListOfRoommates token={props.token} getAllRoommates={props.getAllRoommates} roommates={props.roommates} />
        </Fragment>
    );
};
