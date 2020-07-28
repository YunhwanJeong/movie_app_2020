import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Movie from '../components/Movie';

import { main } from '../constants/color';

const StyledLoading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 3rem;
    font-weight: 600;
`;
const StyledMain = styled.main`
    width: 100%;
    height: auto;
    min-height: 89vh;
    background-color: ${main.backgroundColor};
    border-radius: 16px;
`;
const StyledSection = styled.section`
    height: 100%;
    padding: 8rem;
`;
const StyledSection__Wrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
    row-gap: 5rem;
`;

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { 
      data: { 
        data: { 
          movies 
        }
      }
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(this.props);
    this.setState({
      movies,
      isLoading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  } 

  render() {
    const { isLoading, movies } = this.state;
    return (
        <StyledMain>
            <StyledSection>
                <StyledSection__Wrapper>
                    { isLoading 
                        ? <StyledLoading>Loading...</StyledLoading>
                        : movies.map(movie => (
                            <Movie 
                                key={movie.id} 
                                id={movie.id} 
                                year={movie.year} 
                                title={movie.title}
                                genres={movie.genres}
                                summary={movie.summary} 
                                poster={movie.medium_cover_image}
                            />))
                    }
                </StyledSection__Wrapper>
            </StyledSection>
        </StyledMain>
    )
  };
}

export default Home;