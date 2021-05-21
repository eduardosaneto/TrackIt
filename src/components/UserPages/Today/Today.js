import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserSection from '../../../styledComponents/UserSection';
import TodayContent from '../../../styledComponents/TodayContent';
import axios from 'axios';
import Navbar from '../Navbar';
import PageHeader from '../PageHeader';
import FooterMenu from '../FooterMenu';
import MyTodayHabit from './MyTodayHabit';
import UserContext from '../../../contexts/UserContext';
import DonePercentageContext from '../../../contexts/DonePercentageContext';

export default function Today() {

    const location = useLocation();
    const [myCurrentHabits, setMyCurrentHabits] = useState([]);
    const [itsDone, setItsDone] = useState([]);
    const { user } = useContext(UserContext);
    const { setDonePercentage } = useContext(DonePercentageContext);

    function loadTodayHabits(config) {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        request.then(response => {            
            setMyCurrentHabits(response.data);
            const todayHabitsStatus = response.data.map(status => status.done);
            const todayHabitsDone = todayHabitsStatus.filter(status => status === true);
            setItsDone(todayHabitsDone);
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

    }, [user.token]);

    useEffect(() => {
        setDonePercentage(parseInt((itsDone.length/myCurrentHabits.length)*100));
    },[itsDone.length, myCurrentHabits.length, setDonePercentage]);

    return (
        <UserSection>
            <Navbar />
            <PageHeader location={location} itsDone={itsDone} myCurrentHabits={myCurrentHabits}/>
                {myCurrentHabits.map((habit) => (
                    <TodayContent key={habit.id}>
                        <MyTodayHabit 
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
