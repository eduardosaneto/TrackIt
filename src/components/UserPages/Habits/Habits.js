import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PageTitle from '../PageTitle';
import { BsTrash } from "react-icons/bs";

export default function Habits() {

    const location = useLocation();

    return (
        <>
            <PageTitle location={location}/>
            {/* <Message>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Message> */}
            <Content>
                {/* <div className="habits-data"> */}
                    {/* <input type="text" placeholder="nome do hábito" value="" /> */}
                    <h2>Ler 1 capítulo de livro</h2>
                    <span>
                        <div><p>D</p></div>
                        <div><p>S</p></div>
                        <div><p>T</p></div>
                        <div><p>Q</p></div>
                        <div><p>Q</p></div>
                        <div><p>S</p></div>
                        <div><p>S</p></div>
                    </span>
                {/* </div> */}
                {/* <span>
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </span> */}
                <BsTrash className="erase" />
            </Content>
        </>
    );
}

// const Message = styled.div `
//     width: 100%;
//     height: 40px;

//     p {
//         font-size: 18px;
//         line-height: 22px;
//         color: #666;
//     }
// `;

const Content = styled.div `
    /* height: 180px;
    width: 100%;
    padding: 19px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: #FFFFFF; */

    height: 91px;
    width: 100%;
    padding: 14px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 5px;
    background: #FFFFFF;
    position: relative;
    

    h2 {
        font-size: 20px;
        line-height: 25px;
        color: #666;
        margin-bottom: 8px;
    }

    span {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    div {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    p {
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    .erase {
        font-size: 16px;
        color: #666666;
        position: absolute;
        top: 11px;
        right: 10px;
    }

    /* input {
        margin-bottom: 2px;
        
    }

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    span {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    div span {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    div div {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    p {
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        font-size: 15.976px;
        line-height: 20px;
    }

    button:first-child {
        background: #fff;
        color: #52B6FF;
    }   

    button:last-child {
        margin-left: 15px;
        background: #52B6FF;
        color: #fff;
    } */
`;