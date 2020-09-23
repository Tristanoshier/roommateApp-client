import React, { useState } from 'react'
import { SignupDisplay } from './SignupDisplay';

type Props = {
    updateToken: (newToken: string) => void;
}

export const Signup = (props: Props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isHouse, setIsHouse] = useState(false);

    let handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3001/placeofliving/signup`, {
            method: 'POST',
            body: JSON.stringify({ name: name, password: password, isHouse: isHouse }),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            props.updateToken(data.sessionToken)
        })
    }

    let house = () => {
        setIsHouse(true);
    }

    let apartment = () => {
        setIsHouse(false);
    }

    return (
        <div>
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
        </div>
    )
}
