import React, { Fragment } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Routes } from './Routes';
import { IRoommate } from '../../models/roommate';

type Props = {
    clickLogout: () => void;
    token: string;
    roommates: IRoommate[];
    getAllRoommates: () => void;
    editRoommate: (roommate: IRoommate) => void;
    roommateUpdate: IRoommate | undefined;
};

export const Navbar = (props: Props) => {
    return (
        <Fragment>
            <Nav>
                <NavItem>
                    <Link to="/dashboard">Roommate</Link>
                </NavItem>
                <NavItem>
                    <Link to="/todo">To Do</Link>
                </NavItem>
                <NavItem>
                    <Link to="/tobuy">To Buy</Link>
                </NavItem>
                <NavItem>
                    <Link to="/roommates">Roommates</Link>
                </NavItem>
                <NavItem>
                    <Button onClick={props.clickLogout}>Log out</Button>
                </NavItem>
            </Nav>
            <Routes 
                token={props.token} 
                roommates={props.roommates} 
                getAllRoommates={props.getAllRoommates}
                editRoommate={props.editRoommate}
                roommateUpdate={props.roommateUpdate}    
            />
        </Fragment>
    );
};
