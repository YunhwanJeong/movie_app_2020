import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { nav } from '../constants/color';

const StyledNav = styled.nav`
    font-size: 1.6rem;
    background-color: ${nav.backgroundColor};
`;
const StyledNavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    padding: 1rem;
    line-height: 2;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 8px;
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

function Nav() {
    return (
        <StyledNav>
            <StyledNavWrapper>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </StyledNavWrapper>
        </StyledNav>
    )
};

export default Nav;