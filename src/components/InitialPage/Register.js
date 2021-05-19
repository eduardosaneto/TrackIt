import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import Button from './Button';

export default function Register() {

    const location = useLocation();

    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const signUpBody = {
        email: signUpEmail,
        password: signUpPassword,
        name,
        image
    };

    return (
        <>
            <Logo />
            <DataBox>
                <input 
                    type="text" placeholder="email" 
                    value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} 
                />
                <input
                    type="password" placeholder="senha" 
                    value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)}
                />
                <input 
                    type="text" placeholder="nome" 
                    value={name} onChange={e => setName(e.target.value)}
                />
                <input 
                    type="text" placeholder="foto" 
                    value={image} onChange={e => setImage(e.target.value)}
                />
            </DataBox>
            <Button location={location} signUpBody={signUpBody}/>
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