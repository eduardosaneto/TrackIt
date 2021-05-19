import { Link, useHistory } from 'react-router-dom';
import { useContext, Suspense } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Loader from "react-loader-spinner";
import UserContext from '../../context/UserContext';

export default function InitialButton({ location, body, signUpBody }) {

    const history = useHistory();

    const { setUser } = useContext(UserContext);

    function signUp() {
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", signUpBody);
        request.then(response => {
            alert("Seu cadastro foi concluído com sucesso");
            console.log(response);
            history.push("/");
        });
        request.catch(error => {
            alert("Não foi possível realizar o cadastro. Por favor, preencha os campos corretamente")
            console.log(error);
        });
    }

    function signIn() {
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        request.then(response => {
            console.log(response);
            console.log(response.data);
            setUser(response.data);
            history.push("/hoje");
        });
        request.catch(error => {
            alert("Email ou senha incorretos")
            console.log(error);
        });
    }

    return (
        <>
                {location.pathname === "/" ? 
                <Button onClick={signIn}>
                    Entrar
                    {/* <Suspense
                        fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
                    ></Suspense> */}
                </Button> : 
                <Button onClick={signUp}>
                    Cadastrar
                    {/* <Suspense
                        fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
                    ></Suspense> */}
                </Button>}
            <Footer>
                {location.pathname === "/" ? 
                <Link to='/cadastro'>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link> : 
                <Link to='/'>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>}
            </Footer>
        </>
    );
}

const Button = styled.button`
    width: 303px;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    border: none;
    background: #52B6FF;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #fff;
`;

const Footer = styled.div `
    width: 100%;
    margin-top: 25px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        text-decoration: underline;
        line-height: 17px;
        text-align: center;
        color: #52B6FF;
    }
`;