import React, { Dispatch, Fragment, SetStateAction } from 'react';

type Props = {
    handleSubmit: (event: any) => void;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export const LoginDisplay = (props: Props) => {
    return (
        <Fragment>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit} autoComplete='off'>
                <input onChange={e => props.setName(e.target.value)} value={props.name} placeholder='name of place'></input>
                <br />
                <input onChange={e => props.setPassword(e.target.value)} type='password' value={props.password} placeholder='password'></input>
                <br />
                <button type='submit'>Login</button>
                <br />
                <br />
                <p onClick={() => props.setIsLogin(!props.isLogin)}>
                    {props.isLogin ? "Don't have an account? Sign up here." : 'Already have an account? Login here.'}
                </p>
            </form>
        </Fragment>
    );
};
