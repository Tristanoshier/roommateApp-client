import React, { Dispatch, Fragment, SetStateAction } from 'react';

type Props = {
    handleSubmit: (event: any) => void;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    isHouse: boolean;
    setIsHouse: Dispatch<SetStateAction<boolean>>;
    house: () => void;
    apartment: () => void;
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;  
};

export const SignupDisplay = (props: Props) => {
    return (
        <Fragment>
            <h1>Signup</h1>
            <form onSubmit={props.handleSubmit} autoComplete='off'>
                <input onChange={e => props.setName(e.target.value)} value={props.name} placeholder='name of place'></input>
                <br />
                <input onChange={e => props.setPassword(e.target.value)} type='password' value={props.password} placeholder='password'></input>
                <br />
                <label>Are you in a house or an apartment</label>
                <button type='button' onClick={props.house}>house</button>
                <button type='button' onClick={props.apartment}>apartment</button>
                <br />
                <button type='submit'>Signup</button>
                <br />
                <br />
                <p onClick={() => props.setIsLogin(!props.isLogin)}>
                    {props.isLogin ? "Don't have an account? Sign up here." : "Already have an account? Login here."}
                </p>
            </form>
        </Fragment>
    );
};
