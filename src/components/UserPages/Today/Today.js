import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserSection from '../../../styledComponents/UserSection';
import TodayContent from '../../../styledComponents/TodayContent';
import axios from 'axios';
import Navbar from '../Navbar';
import PageHeader from '../PageHeader';
import FooterMenu from '../FooterMenu';
import MyHabit from './MyHabit';
import UserContext from '../../../contexts/UserContext';

export default function Today() {

    const location = useLocation();
    const [myCurrentHabits, setMyCurrentHabits] = useState([]);
    const { user } = useContext(UserContext);

    function loadTodayHabits(config) {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        request.then(response => {            
            setMyCurrentHabits(response.data);
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
        loadTodayHabits(config);

    }, [user.token])

    return (
        <UserSection>
            <Navbar />
            <PageHeader location={location}/>
                {myCurrentHabits.map((habit) => (
                    <TodayContent key={habit.id}>
                        <MyHabit 
                            id={habit.id}
                            name={habit.name}
                            done={habit.done}
                            currentSequence={habit.currentSequence}
                            highestSequence={habit.highestSequence}
                            loadTodayHabits={loadTodayHabits}
                        />
                    </TodayContent>
                ))}
            <FooterMenu />
        </UserSection>
    );
}
