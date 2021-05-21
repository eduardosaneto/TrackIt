import { useState, useContext } from 'react';
import axios from 'axios';
import Title from '../../styledComponents/Title';
import AddHabit from '../../styledComponents/AddHabit';
import Days from '../../styledComponents/Days';
import WeekDays from './Weekdays';
import { GoPlus } from "react-icons/go";
import UserContext from '../../contexts/UserContext';
import DaysContext from '../../contexts/DaysContext';
import DonePercentageContext from '../../contexts/DonePercentageContext';

export default function PageHeader({ location, loadHabits }){

    const dayjs = require('dayjs');
    let now = dayjs();

    const [shouldAddHabit, setShouldAddHabit] = useState(false);
    const [addHabitName, setAddHabitName] = useState("");
    const [selectedDay, setSelectedDay] = useState([]);
    const { user } = useContext(UserContext);
    const days = useContext(DaysContext);
    const { donePercentage } = useContext(DonePercentageContext);

    function addHabit() {
        setShouldAddHabit(true);
    }

    function cancel() {
        setShouldAddHabit(false);
    }

    function sendHabit(e) {
        e.preventDefault();

        if(selectedDay.length === 0) {
            alert("Selecione pelo menos um dia da semana");
            return;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const body = {
            name: addHabitName,
            days: selectedDay
        };

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        request.then(response => {
            alert("hábito adicionado com sucesso")
            setShouldAddHabit(false);
            setAddHabitName("");
            setSelectedDay([]);
            loadHabits(config);
        });
        request.catch(error => {
            alert("Dê um nome para o seu hábito");
        })
    }

    return (
        <>
            <Title>
                {location.pathname === "/hoje" || location.pathname === "/historico" ? 
                    (location.pathname === "/hoje" ? 
                    <div>
                        <h2>{now.format("dddd, DD/MM")}</h2>
                        <h3>
                            { donePercentage > 0 ? 
                            `${donePercentage}% dos hábitos concluídos` : 
                            `Nenhum hábito concluído ainda`} 
                        </h3>
                    </div> : 
                    <div>
                        <h2>Histórico</h2>
                    </div>
                    ) : 
                    <>
                        <div>
                            <h2>Meus hábitos</h2>
                        </div>
                        <button onClick={addHabit}>
                            <GoPlus className="plus"/>
                        </button>
                    </>
                }
            </Title>
            {shouldAddHabit ? 
            <AddHabit>
                <form onSubmit={sendHabit}>
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
                </form>
            </AddHabit> :
            <></>
            }
        </>
    );
}