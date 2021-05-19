import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PageTitle from '../PageTitle';

export default function History() {

    const location = useLocation();

    return (
        <>
            <PageTitle location={location}/>
            <Message>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Message>
        </>
    );
}

const Message = styled.div `
    width: 100%;
    height: 40px;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
    }
`;