import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import steve from './steve.jpg'

const NavBarWrapper = styled.nav`
    display: flex;
    align-items: center;

    a {
        padding: 0 25px;
        font-size: 1.6rem;
        font-family: sans-serif;
        text-decoration: none;
        color: rgba(0,0,0,.54);
        font-family: Roboto, sans-serif;
    }

    span {
        font-size: 2rem;
        padding: 0 25px;
    }

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin: 0 25px;
    }
`

const HeaderWrapper = styled.div`
    width: 100%;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.05)!important;
    display: flex;
    height: 75px;
    align-items: center;
    justify-content: space-between;
`

const NavBar = () => {
    return (
        <HeaderWrapper>
            <NavBarWrapper>
                <span role="img" aria-label="rocket">🚀</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/list">List</NavLink>
                <NavLink to="/form">Form</NavLink>
            </NavBarWrapper>
            <NavBarWrapper>
                <NavLink to="/">Sign In</NavLink>
                <img src={steve}></img>
            </NavBarWrapper> 
        </HeaderWrapper>
    )
}

export default NavBar;