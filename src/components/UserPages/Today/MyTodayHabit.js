import axios from "axios";
import HabitInfo from "../../../styledComponents/HabitInfo";
import Check from "../../../styledComponents/Check";
import { FaCheck } from "react-icons/fa";

export default function MyTodayHabit({ id, name, done, currentSequence, highestSequence, loadTodayHabits }) {
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token;

  function checkHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    if(done === false) {
      const request = axios.post(`${process.env.REACT_APP_HABITS}/${id}/check`, {}, config);
      request.then(response => {
        loadTodayHabits(config);
      });
      request.catch(error => {
        alert("Houve uma falha de comunicação com o servidor. Tente novamente em alguns minutos.");
      });
    } else if(done === true) {
      const request = axios.post(`${process.env.REACT_APP_HABITS}/${id}/uncheck`, {}, config);
      request.then(response => {
        loadTodayHabits(config);
      });
      request.catch(error => {
        alert("Houve uma falha de comunicação com o servidor. Tente novamente em alguns minutos.");
      });
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
