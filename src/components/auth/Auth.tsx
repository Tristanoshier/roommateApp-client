import React from 'react'
import { AuthDisplay } from './AuthDisplay'

type Props = {
    updateToken: (newToken: string) => void;
}

const Auth = (props: Props) => {
    return (
        <div>
            <AuthDisplay updateToken={props.updateToken} />
        </div>
    )
}

export default Auth;
