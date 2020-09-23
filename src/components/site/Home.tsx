import React from 'react'
import { HomeDisplay } from './HomeDisplay'

type Props = {
    clickLogout: () => void;
}

const Home = (props: Props) => {
    return (
        <div>
           <HomeDisplay clickLogout={props.clickLogout} />
        </div>
    )
}

export default Home;
