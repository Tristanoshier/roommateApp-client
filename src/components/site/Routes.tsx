import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToDo } from '../to-do/ToDo';
import { ToBuy } from '../to-buy/ToBuy';
import { Roommates } from '../roommates/Roommates'
import { Dashboard } from '../dashboard/Dashboard';
import { AddRoommate } from '../roommates/roommate-add/AddRoommate';
import { IRoommate } from '../../models/IRoommate';
import { EditRoommate } from '../roommates/roommate-edit/EditRoommate';
import { IStoreItem } from '../../models/IStoreItem';
import { AddStoreItem } from '../to-buy/to-buy-add/AddStoreItem';


type Props = {
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => void;
    editRoommate: (roommate: IRoommate) => void;
    roommateUpdate: IRoommate | undefined;
    getAllStoreItems: () => void;
    storeItems: IStoreItem[];
};

export const Routes = (props: Props) => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/dashboard"><Dashboard token={props.token} /></Route>
                <Route exact path="/todo"><ToDo token={props.token} /></Route>

                {/* To Buy Routes */}
                <Route exact path="/tobuy">
                    <ToBuy
                        token={props.token}
                        storeItems={props.storeItems}
                        getAllStoreItems={props.getAllStoreItems}
                    />
                </Route>
                <Route exact path="tobuy/add">
                    <AddStoreItem
                        token={props.token}
                        storeItems={props.storeItems}
                        getAllStoreItems={props.getAllStoreItems}
                    />
                </Route>

                {/* Roommmate Routes */}
                <Route exact path="/roommates">
                    <Roommates
                        token={props.token}
                        roommates={props.roommates}
                        getAllRoommates={props.getAllRoommates}
                        editRoommate={props.editRoommate}
                    />
                </Route>
                <Route exact path='/roommates/add'>
                    <AddRoommate
                        token={props.token}
                        roommates={props.roommates}
                        getAllRoommates={props.getAllRoommates}
                    />
                </Route>
                <Route exact path='/roommates/update'>
                    <EditRoommate
                        token={props.token}
                        roommates={props.roommates}
                        getAllRoommates={props.getAllRoommates}
                        roommateUpdate={props.roommateUpdate}
                    />
                </Route>
            </Switch>
        </Fragment>
    );
};
