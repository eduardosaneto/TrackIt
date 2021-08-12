import { useLocation, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import Logo from './Logo';
import Button from './Button';
import DataBox from '../../styledComponents/DataBox';
import LoadingContext from '../../contexts/LoadingContext';

export default function Register() {

    const location = useLocation();
    const history = useHistory();
    const { loading, setLoading } = useContext(LoadingContext);
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
        
        setLoading(true);

        const request = axios.post(process.env.REACT_APP_SIGNUP, body);
        request.then(response => {
            alert("Seu cadastro foi concluído com sucesso");
            history.push("/");
            setLoading(false);
        });
        request.catch(error => {
            alert("Não foi possível realizar o cadastro. Por favor, preencha os campos corretamente")
            setLoading(false);
        });
    }

    return (
        <form onSubmit={signUp}>
            <fieldset disabled={`${loading ? "disabled" : "" }`}>
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
            </fieldset>
        </form>
    );
}