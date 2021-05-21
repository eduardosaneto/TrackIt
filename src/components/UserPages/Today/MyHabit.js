import { useState, useContext } from 'react';
import axios from 'axios';
import HabitInfo from '../../../styledComponents/HabitInfo';
import Check from '../../../styledComponents/Check';
import { FaCheck } from "react-icons/fa";
import UserContext from '../../../contexts/UserContext';

export default function MyHabit({ id, name, currentSequence, highestSequence }) {

    const [itsDone, setItsDone] = useState(false);
    const { user } = useContext(UserContext);

    function checkHabit() {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        if(itsDone === false){

            setItsDone(true);

            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{id}, config);
            request.then(response => {
                alert("Hábito concluido")
            });
            request.catch(error => {
                alert("Deu ruim");
            })
        } else if(itsDone === true){

            setItsDone(false);

            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{id}, config);
            request.then(response => {
                alert("Hábito não-concluido")
            });
            request.catch(error => {
                alert("Deu ruim");
            })
        }
    }

    return (
        <>
            <HabitInfo id={id}>
                <h2>{name}</h2>
                <h3>Sequência atual: {currentSequence} dias</h3>
                <h4>Seu recorde: {highestSequence} dias</h4>
            </HabitInfo>
            <Check id={id} color={itsDone} onClick={checkHabit}>
                <FaCheck className="check"/>
            </Check>
        </>
    );
}