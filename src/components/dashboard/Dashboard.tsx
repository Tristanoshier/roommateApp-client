import React, { Fragment } from 'react';
import { DashboardDisplay } from './DashboardDisplay';

type Props = {
    token: string;
};

export const Dashboard = (props: Props) => {
    return (
        <Fragment>
          <DashboardDisplay token={props.token} />
        </Fragment>
    );
};
