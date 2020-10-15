import React, { Dispatch, Fragment, SetStateAction } from 'react';

type Props = {
    editFirstName: string | undefined;
    editLastName: string | undefined;
    editPhoneNumber: string | undefined;
    editAvatar: string | undefined;
    setEditFirstName: Dispatch<SetStateAction<string | undefined>>;
    setEditLastName: Dispatch<SetStateAction<string | undefined>>;
    setEditPhoneNumber: Dispatch<SetStateAction<string | undefined>>;
    setEditAvatar: Dispatch<SetStateAction<string | undefined>>;
    editRoommate: (event: any) => void;
    cancel: () => void;
};

export const EditRoommateDisplay = (props: Props) => {
    return (
        <Fragment>
             <form onSubmit={props.editRoommate} autoComplete='off'>
                <input onChange={e => props.setEditFirstName(e.target.value)} value={props.editFirstName} placeholder='* First Name' />
                <br/>
                <input onChange={e => props.setEditLastName(e.target.value)} value={props.editLastName} placeholder='* Last Name' />
                <br/>
                <input onChange={e => props.setEditPhoneNumber(e.target.value)} value={props.editPhoneNumber} placeholder='phone number' />
                <br/>
                <input onChange={e => props.setEditAvatar(e.target.value)} value={props.editAvatar} placeholder='avatar picker eventually' />
                <br/>
                <button type='submit'>Make changes</button>
                <button onClick={props.cancel} type='button'>Cancel</button>
            </form>
        </Fragment>
    );
};