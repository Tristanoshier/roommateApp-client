import React, { Fragment } from 'react'
import  { Navbar } from './Navbar';

type Props = {
    clickLogout: () => void;
    token: string;
};

export const HomeDisplay = (props: Props) => {
    return (
        <Fragment>
            <Navbar clickLogout={props.clickLogout} token={props.token} />
        </Fragment>
    );
};
