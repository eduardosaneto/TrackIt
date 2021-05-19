import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

{/* <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> */}

export default function Login() {

    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const body = {
        email,
        password
    };

    return (
        <>
            <Logo />
            <DataBox>
                <input 
                    type="text" placeholder="email" 
                    value={email} onChange={e => setEmail(e.target.value)} 
                />
                <input 
                    type="password" placeholder="senha" 
                    value={password} onChange={e => setPassword(e.target.value)}
                />
            </DataBox>
            <Button location={location} body={body}/>
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