import { useContext } from 'react';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';
import { BsTrash } from "react-icons/bs";
import { confirmAlert } from 'react-confirm-alert';
import '../../../css/react-confirm-alert.css'

export default function DeleteHabit( { id, loadHabits } ) {

    const { user } = useContext(UserContext);

    function deleteHabit() {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        request.then(response => {
            loadHabits(config);      
        });
        request.catch(error => {
            alert("Houve um erro de comunicação com o servidor e o seu hábito não pode ser deletado");
        });
    }

    function moveToTrash() {

        confirmAlert({
            message: 'Tem certeza que deseja deletar este hábito?',
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => deleteHabit()
                },
                {
                  label: 'No',
                }
              ],
              closeOnClickOutside: false,
          })
        };
   
    return (
        <>
            <BsTrash id={id} className="erase" onClick={moveToTrash}/> 
        </>
    );
}