import React from 'react'

type Props = {
    clickLogout: () => void;
}

export const HomeDisplay = (props: Props) => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={props.clickLogout}>Log out</button>
        </div>
    )
}
