import React, { useState } from 'react'
import { LoginDisplay } from './LoginDisplay';
import APIURL from '../../../helpers/environment';


type Props = {
    isLogin: boolean,
    updateToken: (newToken: string) => void;
    isLoginHandler: () => void
}

export const Login = (props: Props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isHouse, setIsHouse] = useState(false);

    let handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`${APIURL}/placeofliving/login`, {
            method: 'POST',
            body: JSON.stringify({ name: name, password: password, isHouse: isHouse })
        }).then(response => props.updateToken(response.data.sessionToken));
    }

    let house = () => {
        setIsHouse(true);
    }

    let apartment = () => {
        setIsHouse(false);
    }

    return (
        <div>
            <LoginDisplay
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
        </div>
    )
}
