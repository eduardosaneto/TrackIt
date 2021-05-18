import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Logo from './components/InitialPage/Logo';
import Login from './components/InitialPage/Login';
import Register from './components/InitialPage/Register';
import Navbar from './components/UserPages/Navbar';
import Footer from './components/UserPages/Footer';
import Today from './components/UserPages/Today/Today';

export default function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <InitialSection>
            <Logo />
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/cadastro" exact>
              <Register />
            </Route>  
          </InitialSection>
        </Switch>
        <Switch> 
          <UserSection>
            <Navbar />
            <Route path="/hoje" exact>
              <Today />
            </Route>
            {/* <Route path="/habitos" exact>
              <Habits />
            </Route>
            <Route path="/historico" exact>
              <History />
            </Route> */}
            <Footer />
          </UserSection>
        </Switch>
      </Router>
    </>
  );
}

const GlobalStyle = createGlobalStyle `
  body {
    background: #fff;
  }

  * {
    box-sizing: border-box;
  }

  textarea:focus, button:focus, li:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }


  button {
    font-family: 'Lexend Deca', sans-serif;
  }

  input {
      width: 303px;
      height: 45px;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      margin-bottom: 8px;
      padding-left: 11px;
      font-family: 'Lexend Deca', sans-serif;
      font-size: 20px;
      line-height: 25px;
      color: #2c2c2c;
    }

    input:focus {
      border: 1px solid #2c2c2c;
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    ::placeholder {
    color: #DBDBDB;
    }

    h1 {
      font-family: 'Playball', sans-serif;
    } 

    h2, p {
      font-family: 'Lexend Deca', sans-serif;
    }

`;

const InitialSection = styled.section `
  width: 100%;
  max-width: 375px;
  height: 100%;
  margin: 0px auto;
  padding-left: 36px;
  padding-right: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: blue;
  display: none !important;
`;

const UserSection = styled.section `
  width: 100%;
  max-width: 375px;
  min-height: 100vh;
  height: 100%;
  padding: 70px 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
  /* display: none !important; */
`;