import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { movie } from '../constants/color';

const StyledMovie = styled.div`
    padding: 30px;
    background-color: ${movie.backgroundColor};
    border-radius: 8px;
`;
const StyledMovie__Wrapper = styled.div`
    display: flex;
`;
const StyledLink = styled(Link)`
`;
const StyledMovie__ImageWrapper = styled.div`
    flex-basis: 30%;
    align-self: flex-start;
    display: inline-block;
    height: auto;
    margin-top: -50px;
    background-color: transparent;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;
const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
`;
const StyledMovie__Contents = styled.div`
    flex-basis: 70%;
    padding: 30px;
`;
const StyledContents__Heading = styled.div`
    margin-bottom: 20px;
    & > *:not(:last-child) {
        margin-bottom: 10px;
    }
`;
const StyledHeading__Header = styled.h4`
    font-size: 2.1rem;
    font-weight: 600;
`;
const StyledHeading__Year = styled.div`
    font-size: 1.35rem;
    color: ${movie.yearColor};
`;
const StyledHeading__Genres = styled.ul`
    font-size: 1.3rem;
    display: flex;
`;
const StyledGenre = styled.li`
    display: inline-block;
    color: ${movie.genreColor};
    :not(:last-child) {
        margin-right: 5px;
    }
`;
const StyledContents__SubHeading = styled.p`
    font-size: 1.3rem;
    line-height: 1.3;
    color: ${movie.subheadingColor};
`;


function Movie ({ id, year, title, genres, summary, poster }) {
    return (
        <StyledMovie>
            <StyledLink to={{
                pathname: `/movie/${id}`,
                state: {
                    title,
                    summary
                }
            }}>
                <StyledMovie__Wrapper>
                    <StyledMovie__ImageWrapper>
                        <StyledImage src={poster}/>
                    </StyledMovie__ImageWrapper>
                    <StyledMovie__Contents>
                        <StyledContents__Heading>
                            <StyledHeading__Header>{title}</StyledHeading__Header>
                            <StyledHeading__Year>{year}</StyledHeading__Year>
                            <StyledHeading__Genres>{genres.map((genre, index) => (<StyledGenre key={index}>{genre}</StyledGenre>))}</StyledHeading__Genres>
                        </StyledContents__Heading>
                        <StyledContents__SubHeading>{summary.slice(0, 150)}...</StyledContents__SubHeading>
                    </StyledMovie__Contents>
                </StyledMovie__Wrapper>
            </StyledLink>
        </StyledMovie>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;