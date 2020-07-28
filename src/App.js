import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Home from './routes/Home';
import About from './routes/About';
import Nav from './components/Nav';
import MovieDetail from './routes/MovieDetail';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing:border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration:none;
    color:inherit;
  }
`;

const StyledApp = styled.div`
`;
const StyledAppWrapper = styled.div`
  display: flex;
  padding: 5rem;
  border-radius: 16px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <StyledAppWrapper>
          <Nav />
          <Switch>
            <Route exact path="/" render={(routeProps) => <Home {...routeProps}/>} />
            <Route path="/about" render={(routeProps) => <About {...routeProps}/>} />
            <Route path="/movie/:id" render={(routeProps) => <MovieDetail {...routeProps}/>}/>
          </Switch>
        </StyledAppWrapper>
      </StyledApp>
    </>
  );
}

export default App;