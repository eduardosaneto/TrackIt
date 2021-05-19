import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';
import Footer from '../Footer';
import MyHabit from './MyHabit';
// import { FaCheck } from "react-icons/fa";
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
        }
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
            <Content>
                {myHabits.map((habit) => (
                    <MyHabit 
                        key={habit.id}
                        name={habit.name}
                    />
                ))}
            </Content>
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

    /* div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    h2 {
        font-size: 20px;
        line-height: 25px;
        color: #666;
        margin-bottom: 7px;
    }

    h3, h4 {
        font-size: 13px;
        line-height: 16px;
        color: #666;
    } */
/* 
    div:last-child {
        width: 69px;
        height: 69px;
        display: flex; 
        justify-content: center;
        align-items: center;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        background: #EBEBEB;
    }

    .check {
        font-size: 35px;
        color: #fff;
    } */
`;

//<div>
//    <h2>Ler 1 capítulo de livro</h2>
//    <h3>Sequência atual: 3 dias</h3>
//    <h4>Seu recorde: 5 dias</h4>
//</div>
//<div>
//    <FaCheck className="check"/>
//</div>