import { useState,useContext } from 'react';
// import axios from 'axios';
// import UserContext from '../../contexts/UserContext';
import DaysContext from '../../contexts/DaysContext';
// import { BsTrash } from "react-icons/bs";

export default function Weekdays({day, id, habitDays, shouldAddHabit, selectedDay, setSelectedDay }) {

    const [isSelected, setIsSelected] = useState(false);
    // const { user } = useContext(UserContext);
    const days = useContext(DaysContext);

    const weekDays = days.map(item => {
            return ({
                id: item.id, 
                weekDay: item.weekDay, 
                habitDay: habitDays !== undefined ? habitDays.find(item2 => (item2 === item.id)) : false
            })
        })

    function selectDay() {
        if(!isSelected){
            setIsSelected(true);
            setSelectedDay([...selectedDay, id]);

        } else {
            setIsSelected(false);
            setSelectedDay(selectedDay.filter(item => {
                if(item !== id) {
                    return item;
                } else {
                    return null;
                }   
            }));            
        }
    }

    return (
        <>
            {shouldAddHabit ? 
                <div id={id} onClick={selectDay} className={`${isSelected ? "select" : ""}`}>
                    <p>
                        {day}
                    </p>
                </div> : 
                (weekDays.map(day => (   
                    <div key={day.id} className={`${day.habitDay !== undefined ? "select" : ""}`}><p>{day.weekDay}</p></div>                 
                ))) 
            }
        </>
    );
}