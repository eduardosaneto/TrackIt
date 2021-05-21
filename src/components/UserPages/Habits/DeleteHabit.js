import { useContext } from 'react';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';
import { BsTrash } from "react-icons/bs";

export default function DeleteHabit( {id, habits, setHabits} ) {

    const { user } = useContext(UserContext);

    function deleteHabit() {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        request.then(response => {
            const updatedHabits = habits.filter(habit => habit.id !== id);
            setHabits(updatedHabits);           
        });
        request.catch(error => {
            alert("Houve um erro de comunicação com o servidor e o seu hábito não pode ser deletado");
        });
    }

    return (
        <>
            <BsTrash id={id} className="erase" onClick={deleteHabit}/> 
        </>
    );
}