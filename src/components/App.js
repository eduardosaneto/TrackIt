import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../styledComponents/GlobalStyle';
import Section from '../styledComponents/Section';
import Login from './InitialPage/Login';
import Register from './InitialPage/Register';
import Today from './UserPages/Today/Today';
import Habits from './UserPages/Habits/Habits';
import History from './UserPages/History/History';
import DayData from '../components/WeekDB/DayData';
import UserContext from '../contexts/UserContext';
import LoadingContext from '../contexts/LoadingContext';
import DaysContext from '../contexts/DaysContext';
import DonePercentageContext from '../contexts/DonePercentageContext';

export default function App() {

  const [user,setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [donePercentage, setDonePercentage] = useState(0);
  const days = DayData();

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
      <DaysContext.Provider value={days}>
      <DonePercentageContext.Provider value={{donePercentage, setDonePercentage}}>
      <LoadingContext.Provider value={{loading, setLoading}}>
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
      </LoadingContext.Provider>
      </DonePercentageContext.Provider>
      </DaysContext.Provider>
      </UserContext.Provider>
    </>
  );
}