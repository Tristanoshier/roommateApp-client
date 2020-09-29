import React from 'react'
import { Signup } from './signup/Signup'
import { Login } from './login/Login'

type Props = {
    updateToken: (newToken: string) => void;
};

export const AuthDisplay = (props: Props) => {
    return (
        <div>
            <Signup updateToken={props.updateToken} />
            <Login updateToken={props.updateToken} />
        </div>
    )
}
