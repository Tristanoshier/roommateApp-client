import React, { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { LoginDisplay } from './LoginDisplay';
import axios from 'axios';
import APIURL from '../../../helpers/environment';


type Props = {
    updateToken: (newToken: string) => void;
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export const Login = (props: Props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event: any) => {
        event.preventDefault();
        axios.post(`${APIURL}/placeofliving/login`, {
            name: name, password: password
        }).then(response => props.updateToken(response.data.sessionToken));
    };

    return (
        <Fragment>
            <LoginDisplay
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                isLogin={props.isLogin}
                setIsLogin={props.setIsLogin}
            />
        </Fragment>
    );
};
