import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Login from './components/InitialPage/Login';
import Register from './components/InitialPage/Register';
import Today from './components/UserPages/Today/Today';
import Habits from './components/UserPages/Habits/Habits';
import History from './components/UserPages/History/History';
import UserContext from './context/UserContext';

export default function App() {

  const [user,setUser] = useState("");

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Section>
            <UserContext.Provider value={{user, setUser}}>
              <Route path="/" exact>
                <Login /> 
              </Route>
              <Route path="/cadastro" exact>
                <Register />
              </Route>  
              <Route path="/hoje" exact>
                <Today />
              </Route>
              <Route path="/habitos" exact>
                <Habits />
              </Route>
              <Route path="/historico" exact>
                <History />
              </Route>
            </UserContext.Provider>
          </Section>
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
    border: none;
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
    color: #666;
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

  h2, h3, h4, p, button {
    font-family: 'Lexend Deca', sans-serif;
  }

`;

// const Section = styled.section `
//   width: 100%;
//   max-width: 375px;
//   height: 100%;
//   margin: 0px auto;
//   padding-left: 36px;
//   padding-right: 36px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* display: none !important; */
// `;

const Section = styled.section `
  width: 100%;
  max-width: 375px;
  min-height: 100vh;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;