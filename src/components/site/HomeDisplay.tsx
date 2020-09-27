import React from 'react'
import  { Navbar } from './Navbar'

type Props = {
    clickLogout: () => void;
    token: string;
}

export const HomeDisplay = (props: Props) => {
    return (
        <div>
            <Navbar clickLogout={props.clickLogout} token={props.token} />
        </div>
    )
}
