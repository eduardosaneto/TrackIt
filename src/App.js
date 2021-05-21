import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './styledComponents/GlobalStyle';
import Section from './styledComponents/Section';
import Login from './components/InitialPage/Login';
import Register from './components/InitialPage/Register';
import Today from './components/UserPages/Today/Today';
import Habits from './components/UserPages/Habits/Habits';
import History from './components/UserPages/History/History';
import DayData from './DayData';
import UserContext from './contexts/UserContext';
import DaysContext from './contexts/DaysContext';

export default function App() {

  const [user,setUser] = useState("");
  const days = DayData();

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
      <DaysContext.Provider value={days}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Section>
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
            </Section>
          </Switch>
        </Router>
      </DaysContext.Provider>
      </UserContext.Provider>
    </>
  );
}