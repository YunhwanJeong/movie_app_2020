import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
    max-width: 60%;
    padding: 50px;
    margin: 0 auto;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius: 16px;
    font-size: 3rem;
    font-weight: 600;
`;
function About() {
    return (
        <StyledAbout>This app is my first one to practicing react skills 🌱</StyledAbout>
    );
}

export default About;