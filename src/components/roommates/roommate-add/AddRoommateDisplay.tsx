import React, { Dispatch, Fragment, SetStateAction } from 'react';

type Props = {
    token: string;
    firstName: string
    setFirstName: Dispatch<SetStateAction<string>>;
    lastName: string
    setLastName: Dispatch<SetStateAction<string>>;
    phoneNumber: string;
    setPhoneNumber: Dispatch<SetStateAction<string>>;
    avatar: string;
    setAvatar: Dispatch<SetStateAction<string>>;
    addRoommate: (event: any) => void;
};

export const AddRoommateDisplay = (props: Props) => {
    return (
        <Fragment>
            <form onSubmit={props.addRoommate} autoComplete='off'>
                <input onChange={e => props.setFirstName(e.target.value)} value={props.firstName} placeholder='* First Name' />
                <br/>
                <input onChange={e => props.setLastName(e.target.value)} value={props.lastName} placeholder='* Last Name' />
                <br/>
                <input onChange={e => props.setPhoneNumber(e.target.value)} value={props.phoneNumber} placeholder='phone number' />
                <br/>
                <input onChange={e => props.setAvatar(e.target.value)} value={props.avatar} placeholder='avatar picker eventually' />
                <br/>
                <button type='submit'>Add</button>
            </form>
        </Fragment>
    );
};
