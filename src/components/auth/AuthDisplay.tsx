import React, { Fragment } from 'react';
import { Signup } from './signup/Signup';

type Props = {
    updateToken: (newToken: string) => void;
};

export const AuthDisplay = (props: Props) => {
    return (
        <Fragment>
            <Signup updateToken={props.updateToken} />
        </Fragment>
    );
};
