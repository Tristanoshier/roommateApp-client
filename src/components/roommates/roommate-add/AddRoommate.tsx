import React, { Fragment, useState } from 'react';
import { AddRoommateDisplay } from './AddRoommateDisplay';
import APIURL from '../../../helpers/environment';
import axios from 'axios';
import { IRoommate } from '../../../models/roommate';
import { Redirect } from 'react-router-dom';

type Props = {
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => any;
};

export const AddRoommate = (props: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [avatar, setAvatar] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function addRoommate(event: any){
        event.preventDefault();
        if (firstName && lastName) {
            var response = await axios.post(`${APIURL}/user/signup`,
                { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, avatar: avatar },
                { headers: { 'Content-Type': 'application/json', 'Authorization': props.token } }
            ).then(() => {
                setFirstName('');
                setLastName('');
                setPhoneNumber('');
                setAvatar('');
                setRedirect(true);
                props.getAllRoommates();
            });
        } else {
            alert('Please fill out all required fields');
        };
        return response;
    };


    if (redirect) {
        return <Redirect to='/roommates' />
    }

    return (
        <Fragment>
            <AddRoommateDisplay
                token={props.token}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                avatar={avatar}
                setAvatar={setAvatar}
                addRoommate={addRoommate}
                
            />
        </Fragment>
    );
};
