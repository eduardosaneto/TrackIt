import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";

export default function MyHabit({ key, name }) {

    return (
        <>
            <HabitInfo id={key}>
                <h2>{name}</h2>
                <h3>Sequência atual: 3 dias</h3>
                <h4>Seu recorde: 5 dias</h4>
            </HabitInfo>
            <Check>
                <FaCheck className="check"/>
            </Check>
        </>
    );
}

const HabitInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
        font-size: 20px;
        line-height: 25px;
        color: #666;
        margin-bottom: 7px;
    }

    h3, h4 {
        font-size: 13px;
        line-height: 16px;
        color: #666;
    }
`; 

const Check = styled.div `
    width: 69px;
    height: 69px;
    display: flex; 
    justify-content: center;
    align-items: center;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background: #EBEBEB;

    .check {
        font-size: 35px;
        color: #fff;
    }
`;