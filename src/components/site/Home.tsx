import React, { Fragment } from 'react';
import { HomeDisplay } from './HomeDisplay';

type Props = {
    clickLogout: () => void;
    token: string;
};

const Home = (props: Props) => {
    return (
        <Fragment>
           <HomeDisplay clickLogout={props.clickLogout} token={props.token} />
        </Fragment>
    );
};

export default Home;
