import React, { Fragment, useState } from 'react';
import axios from 'axios';
import APIURL from '../../../helpers/environment';
import { IRoommate } from '../../../models/IRoommate';
import { EditRoommateDisplay } from './EditRoommateDisplay';
import { Redirect } from 'react-router-dom';

type Props = {
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => any;
    roommateUpdate: IRoommate | undefined;
};

export const EditRoommate = (props: Props) => {
    const [editFirstName, setEditFirstName] = useState(props.roommateUpdate?.firstName)
    const [editLastName, setEditLastName] = useState(props.roommateUpdate?.lastName)
    const [editPhoneNumber, setEditPhoneNumber] = useState(props.roommateUpdate?.phoneNumber)
    const [editAvatar, setEditAvatar] = useState(props.roommateUpdate?.avatar)
    const [redirect, setRedirect] = useState(false);

    async function editRoommate(event: any) {
        event.preventDefault();
        var response = await axios.put(`${APIURL}/user/update/${props.roommateUpdate?.id}`,
            { firstName: editFirstName, lastName: editLastName, phoneNumber: editPhoneNumber, avatar: editAvatar },
            { headers: { 'Content-Type': 'application/json', 'Authorization': props.token } }
        ).then(() => {
            setRedirect(true);
            props.getAllRoommates();
        });
        return response;
    };

    const cancel = () => {
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to='/roommates' />
    };

    return (
        <Fragment>
            <EditRoommateDisplay
                editFirstName={editFirstName}
                editLastName={editLastName}
                editPhoneNumber={editPhoneNumber}
                editAvatar={editAvatar}
                setEditFirstName={setEditFirstName}
                setEditLastName={setEditLastName}
                setEditPhoneNumber={setEditPhoneNumber}
                setEditAvatar={setEditAvatar}
                editRoommate={editRoommate}
                cancel={cancel}
            />
        </Fragment>
    );
};
