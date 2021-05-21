import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Logo from './Logo';
import Button from './Button';
import UserContext from '../../contexts/UserContext';

export default function Login() {

    const location = useLocation();
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const body = {
        email,
        password
    };

    function signIn(e) {
        e.preventDefault();
        
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        request.then(response => {
            setUser(response.data);
            history.push("/hoje");
        });
        request.catch(error => {
            alert("Email ou senha incorretos")
            console.log(error);
        });
    }

    return (
        <form onSubmit={signIn}>
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