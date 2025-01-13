import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: ${({ theme }) => theme.primaryColor};
    color: #fff;

    a {
        color: #fff;
        margin: 0 10px;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </Nav>
    );
};

export default Navbar;
