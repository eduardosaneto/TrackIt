import { useContext } from 'react';
import axios from 'axios';
import HabitInfo from '../../../styledComponents/HabitInfo';
import Check from '../../../styledComponents/Check';
import { FaCheck } from "react-icons/fa";
import UserContext from '../../../contexts/UserContext';

export default function MyTodayHabit({ id, name, done, currentSequence, highestSequence, loadTodayHabits }) {

    const { user } = useContext(UserContext);

    function checkHabit() {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        if(done === false){
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{}, config);
            request.then(response => {
                loadTodayHabits(config);
            });
            request.catch(error => {
                alert("Houve uma falha de comunicação com o servidor. Tente novamente em alguns minutos.");
            })
        } else if(done === true){
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{}, config);
            request.then(response => {
                loadTodayHabits(config);
            });
            request.catch(error => {
                alert("Houve uma falha de comunicação com o servidor. Tente novamente em alguns minutos.");
            })
        }
    }

    return (
        <>
            <HabitInfo id={id}>
                <h2>{name}</h2>
                <h3 className={`${done ? "checked" : ""}`}>Sequência atual: {currentSequence} dias</h3>
                <h4 
                    className={`${currentSequence < highestSequence || highestSequence === 0 ? "" : "checked"}`}
                >
                    Seu recorde: {highestSequence} dias
                </h4>
            </HabitInfo>
            <Check id={id} color={done} onClick={checkHabit}>
                <FaCheck className="check"/>
            </Check>
        </>
    );
}