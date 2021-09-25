import { useState, useContext } from "react";
import axios from "axios";
import AddHabit from "../../../styledComponents/AddHabit";
import Days from "../../../styledComponents/Days";
import WeekDays from "../Weekdays";
import DaysContext from "../../../contexts/DaysContext";
import LoadingContext from "../../../contexts/LoadingContext";

export default function AddNewHabit( { shouldAddHabit, setShouldAddHabit, loadHabits }) {
  const [addHabitName, setAddHabitName] = useState("");
  const [selectedDay, setSelectedDay] = useState([]);
  const days = useContext(DaysContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token;
    
  function cancel() {
    setShouldAddHabit(false);
  }

  function sendHabit(e) {
    e.preventDefault();

    setLoading(true);

    if(selectedDay.length === 0) {
      alert("Selecione pelo menos um dia da semana");
      setLoading(false);
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const body = {
      name: addHabitName,
      days: selectedDay
    };

    const request = axios.post(process.env.REACT_APP_HABITS, body, config);
    request.then(response => {
      alert("hábito adicionado com sucesso");
      setShouldAddHabit(false);
      setAddHabitName("");
      setSelectedDay([]);
      setLoading(false);
      loadHabits(config);
    });
    request.catch(error => {
      alert("Dê um nome para o seu hábito");
      setLoading(false);
    });
  }

  return (
    <>
      {shouldAddHabit ? 
        <AddHabit>
          <form onSubmit={sendHabit}>
            <fieldset disabled={`${loading ? "disabled" : "" }`}>
              <div className="habits-data">
                <input 
                  type="text" placeholder="nome do hábito" 
                  value={addHabitName} onChange={e => setAddHabitName(e.target.value)}
                />
                <Days>
                  {days.map(day => (
                    <WeekDays 
                      key={day.id}
                      id={day.id} 
                      day={day.weekDay} 
                      shouldAddHabit={shouldAddHabit} 
                      selectedDay={selectedDay} 
                      setSelectedDay={setSelectedDay}
                    />
                  ))}
                </Days>
              </div>
              <span>
                <button type="button" onClick={cancel}>Cancelar</button>
                <button type="submit">Salvar</button>
              </span>
            </fieldset>
          </form>
        </AddHabit> :
        <></>
      }
    </>
  );
}
