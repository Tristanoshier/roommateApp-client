import React, { Fragment } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Routes } from './Routes';

type Props = {
    clickLogout: () => void;
    token: string;
}

export const Navbar = (props: Props) => {
    return (
        <Fragment>
            <Nav className="py-md-3 nav-look">
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
                    <Link to="/people">People</Link>
                </NavItem>
                <NavItem>
                    <Button onClick={props.clickLogout}>Log out</Button>
                </NavItem>
            </Nav>
            <Routes token={props.token}/>
        </Fragment>
    );
}
