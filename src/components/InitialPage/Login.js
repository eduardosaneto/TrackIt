import { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Logo from './Logo';
import Button from './Button';
import DataBox from '../../styledComponents/DataBox';
import UserContext from '../../contexts/UserContext';
import LoadingContext from '../../contexts/LoadingContext';

export default function Login() {

    const location = useLocation();
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const { loading, setLoading } = useContext(LoadingContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if(localStorage.length !== 0) history.push("/hoje");
    
    const body = {
        email,
        password
    };

    function signIn(e) {
        e.preventDefault();

        setLoading(true);

        const request = axios.post(process.env.REACT_APP_LOGIN, body);
        request.then(response => {
            setUser(response.data);
            const userSerial = JSON.stringify(response.data);
            localStorage.setItem("user",userSerial);
            history.push("/hoje");
            setLoading(false);
        });
        request.catch(error => {
            alert("Email ou senha incorretos")
            setLoading(false);
        });
    }

    return (
        <form onSubmit={signIn}>
            <fieldset disabled={`${loading ? "disabled" : "" }`}>
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
            </fieldset>
        </form>
    );
}