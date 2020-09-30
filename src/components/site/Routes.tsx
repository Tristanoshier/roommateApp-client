import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToDo } from '../to-do/ToDo';
import { ToBuy } from '../to-buy/ToBuy';
import { Roommates } from '../roommates/Roommates';
import { Dashboard } from '../dashboard/Dashboard';

type Props = {
    token: string;
};

export const Routes = (props: Props) => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/dashboard"><Dashboard token={props.token} /></Route>
                <Route exact path="/todo"><ToDo token={props.token} /></Route>
                <Route exact path="/tobuy"><ToBuy token={props.token} /></Route>
                <Route exact path="/roommates"><Roommates token={props.token} /></Route>
            </Switch>
        </Fragment>
    );
};
