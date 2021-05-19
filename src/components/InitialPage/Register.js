import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Logo from './Logo';
import Button from './Button';

export default function Register() {

    const location = useLocation();
    const history = useHistory();

    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const body = {
        email: signUpEmail,
        password: signUpPassword,
        name,
        image
    };

    function signUp(e) {
        e.preventDefault();
        
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        request.then(response => {
            alert("Seu cadastro foi concluído com sucesso");
            history.push("/");
        });
        request.catch(error => {
            alert("Não foi possível realizar o cadastro. Por favor, preencha os campos corretamente")
            console.log(error);
        });
    }

    return (
        <form onSubmit={signUp}>
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
            <Button location={location}/>
        </form>
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