import React, { Fragment, useState } from 'react';
import { SignupDisplay } from './SignupDisplay';
import axios from 'axios';
import APIURL from '../../../helpers/environment';

type Props = {
    updateToken: (newToken: string) => void;
};

export const Signup = (props: Props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isHouse, setIsHouse] = useState(false);

    let handleSubmit = (event: any) => {
        event.preventDefault();
        axios.post(`${APIURL}/placeofliving/signup`, {
            name: name, password: password, isHouse: isHouse
        }).then(response => props.updateToken(response.data.sessionToken));
    };

    let house = () => {
        setIsHouse(true);
    };

    let apartment = () => {
        setIsHouse(false);
    };

    return (
        <Fragment>
            <SignupDisplay
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                isHouse={isHouse}
                setIsHouse={setIsHouse}
                house={house}
                apartment={apartment}
            />
        </Fragment>
    )
}
