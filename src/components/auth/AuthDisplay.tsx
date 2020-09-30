import React, { Dispatch, Fragment, SetStateAction } from 'react';
import { Signup } from './signup/Signup';
import { Login } from './login/Login';

type Props = {
    updateToken: (newToken: string) => void;
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export const AuthDisplay = (props: Props) => {
    return (
        <Fragment>
            {props.isLogin ?
                 <Login updateToken={props.updateToken} isLogin={props.isLogin} setIsLogin={props.setIsLogin} /> :
                <Signup updateToken={props.updateToken} isLogin={props.isLogin} setIsLogin={props.setIsLogin} /> } 
        </Fragment>
    );
};

