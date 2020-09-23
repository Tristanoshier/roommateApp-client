import React from 'react'
import { Signup } from './signup/Signup'

type Props = {
    updateToken: (newToken: string) => void;
}

export const AuthDisplay = (props: Props) => {
    return (
        <div>
            <Signup updateToken={props.updateToken}/>
        </div>
    )
}
