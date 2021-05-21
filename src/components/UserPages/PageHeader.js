import { useState, useContext } from 'react';
import Title from '../../styledComponents/Title';
import AddNewHabit from './Habits/AddNewHabit';
import { GoPlus } from "react-icons/go";
import 'dayjs/locale/pt-br'

import DonePercentageContext from '../../contexts/DonePercentageContext';

export default function PageHeader({ location, loadHabits }){

    const dayjs = require('dayjs');
    let now = dayjs().locale('pt-br');

    const [shouldAddHabit, setShouldAddHabit] = useState(false);
    const { donePercentage } = useContext(DonePercentageContext);

    function addHabit() {
        setShouldAddHabit(true);
    }

    return (
        <>
            <Title>
                {location.pathname === "/hoje" || location.pathname === "/historico" ? 
                    (location.pathname === "/hoje" ? 
                    <div>
                        <h2>{now.format("dddd, DD/MM")}</h2>
                        { donePercentage > 0 ? 
                        <h3 className="checked">
                            {donePercentage}% dos hábitos concluídos
                        </h3> : 
                        <h3>
                            Nenhum hábito concluído ainda 
                        </h3>}
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
            <AddNewHabit
                shouldAddHabit={shouldAddHabit}
                setShouldAddHabit={setShouldAddHabit}
                loadHabits={loadHabits}
            />
        </>
    );
}