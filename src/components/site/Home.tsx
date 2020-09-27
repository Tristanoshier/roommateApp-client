import React from 'react'
import { HomeDisplay } from './HomeDisplay'

type Props = {
    clickLogout: () => void;
    token: string;
}

const Home = (props: Props) => {
    return (
        <div>
           <HomeDisplay clickLogout={props.clickLogout} token={props.token} />
        </div>
    )
}

export default Home;
