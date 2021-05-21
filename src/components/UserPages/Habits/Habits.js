import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserSection from '../../../styledComponents/UserSection';
import Content from '../../../styledComponents/Content';
import Message from '../../../styledComponents/Message';
import Days from '../../../styledComponents/Days';
import Navbar from '../Navbar';
import PageHeader from '../PageHeader';
import FooterMenu from '../FooterMenu';
import WeekDays from '../Weekdays';
import { BsTrash } from "react-icons/bs";
import UserContext from '../../../contexts/UserContext';

export default function Habits() {

    const location = useLocation();
    const [habits, setHabits] = useState([]);
    const [isThereAHabit, setIsThereAHabit] = useState(false);    
    const { user } = useContext(UserContext);
    
    function loadHabits(config) {            
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        request.then(response => {
            setIsThereAHabit(true);  
            setHabits(response.data);
        });
        request.catch(error => {
            alert("Não foi possível carregar seus hábitos do dia");
        });
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        loadHabits(config);
        
    }, [user.token])

    return (
        <UserSection>
            <Navbar />
            <PageHeader location={location} loadHabits={loadHabits}/>
            {isThereAHabit ? 
                (habits.map(habit => (
                    <Content>
                        <h2 key={habit.id}>{habit.name}</h2>
                        {/* {h.days.map(day => ( */}
                        <Days>
                            <WeekDays habitDays={habit.days}/>
                        </Days>
                        {/* ))} */}
                        <BsTrash className="erase" />
                    </Content>
                ))) :
                <Message>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Message>
            }  
            <FooterMenu />
        </UserSection>
    );
}