import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserSection from '../../../styledComponents/UserSection';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar';
import PageHeader from '../PageHeader';
import FooterMenu from '../FooterMenu';
import MyHabit from './MyHabit';
import UserContext from '../../../contexts/UserContext';

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
        <UserSection>
            <Navbar />
            <PageHeader location={location}/>
                {myHabits.map((habit) => (
                    <Content>
                        <MyHabit 
                            key={habit.id}
                            name={habit.name}
                        />
                    </Content>
                ))}
            <FooterMenu />
        </UserSection>
    );
}

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
