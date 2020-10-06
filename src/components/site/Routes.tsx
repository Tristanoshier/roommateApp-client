import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToDo } from '../to-do/ToDo';
import { ToBuy } from '../to-buy/ToBuy';
import { Roommates } from '../roommates/Roommates'
import { Dashboard } from '../dashboard/Dashboard';
import { AddRoommate } from '../roommates/roommate-add/AddRoommate';
import { IRoommate } from '../../models/roommate';


type Props = {
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => void;
};

export const Routes = (props: Props) => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/dashboard"><Dashboard token={props.token} /></Route>
                <Route exact path="/todo"><ToDo token={props.token} /></Route>
                <Route exact path="/tobuy"><ToBuy token={props.token} /></Route>
                <Route exact path="/roommates">
                    <Roommates
                        token={props.token}
                        roommates={props.roommates}
                        getAllRoommates={props.getAllRoommates}
                    />
                </Route>
                <Route exact path='/roommates/add'>
                    <AddRoommate
                        token={props.token}
                        roommates={props.roommates}
                        getAllRoommates={props.getAllRoommates}
                    />
                </Route>
            </Switch>
        </Fragment>
    );
};
