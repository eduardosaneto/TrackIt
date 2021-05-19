import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Button from './Button';

export default function Register() {

    const location = useLocation();

    return (
        <>
            <DataBox>
                <input type="text" placeholder="email" value="" />
                <input type="password" placeholder="senha" value="" />
                <input type="text" placeholder="nome" value="" />
                <input type="text" placeholder="foto" value="" />
            </DataBox>
            <Button location={location}/>
        </>
    );
}

const DataBox = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    
`;