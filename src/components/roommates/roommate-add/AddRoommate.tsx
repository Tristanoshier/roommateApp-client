import React, { Fragment, useState } from 'react';
import { AddRoommateDisplay } from './AddRoommateDisplay';
import APIURL from '../../../helpers/environment';
import axios from 'axios';

type Props = {
    token: string;
    getAllRoommates: () => any;
};

export const AddRoommate = (props: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [avatar, setAvatar] = useState('');

    let addRoommate = (event: any) => {
        event.preventDefault();
        if (firstName && lastName) {
            axios.post(`${APIURL}/user/signup`,
                { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, avatar: avatar },
                { headers: { 'Content-Type': 'application/json', 'Authorization': props.token } }
            ).then(() => {
                setFirstName('');
                setLastName('');
                setPhoneNumber('');
                setAvatar('');
                props.getAllRoommates();
            });
        } else {
            alert('Please fill out all required fields');
        };
    };

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
