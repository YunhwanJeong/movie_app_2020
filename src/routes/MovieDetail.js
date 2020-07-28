import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const StyledMovieDetail = styled.div`
    max-width: 50%;
    padding: 50px;
    margin: 0 auto;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius: 16px;
`;
const StyledMovieDetail__Title = styled.h4`
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 50px;
`;
const StyledMovieDetail__Summary = styled.p`
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 1px;
`;

function MovieDetail(props) {
    const { location } = props;
    return (
        location.state 
        ? <StyledMovieDetail>
            <StyledMovieDetail__Title>{location.state.title}</StyledMovieDetail__Title>
            <StyledMovieDetail__Summary>{location.state.summary}</StyledMovieDetail__Summary>
        </StyledMovieDetail>
        : <Redirect exact to="/" />
    )
}

export default MovieDetail;