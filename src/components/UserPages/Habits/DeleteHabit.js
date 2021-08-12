import axios from 'axios';
import { BsTrash } from "react-icons/bs";
import { confirmAlert } from 'react-confirm-alert';
import '../../../assets/styles/react-confirm-alert.css';

export default function DeleteHabit( { id, loadHabits } ) {

    const localstorage = JSON.parse(localStorage.user);
    const token = localstorage.token;

    function deleteHabit() {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const request = axios.delete(`${process.env.REACT_APP_HABITS}/${id}`, config);
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