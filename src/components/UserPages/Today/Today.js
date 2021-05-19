import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';
import Footer from '../Footer';
import MyHabit from './MyHabit';
import UserContext from '../../../context/UserContext';

export default function Today() {

    const location = useLocation();
    const [myHabits, setMyHabits] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        request.then(response => {            
            setMyHabits(response.data);
        });
        request.catch(error => {
            console.log(error);
            alert("Não foi possível carregar seus hábitos do dia");
        });
    }, [user.token])

    return (
        <Section>
            <Navbar />
            <PageTitle location={location}/>
                {myHabits.map((habit) => (
                    <Content>
                        <MyHabit 
                            key={habit.id}
                            name={habit.name}
                        />
                    </Content>
                ))}
            <Footer />
        </Section>
    );
}

const Section = styled.section `
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 70px 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
`;

const Content = styled.div `
    height: 94px;
    width: 100%;
    padding: 13px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: #FFFFFF;
`;
