import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function InitialButton({ location, body, signUpBody }) {
    return (
        <>
            {location.pathname === "/" ? 
            <Button>
                Entrar
                {/* <Suspense
                    fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
                ></Suspense> */}
            </Button> : 
            <Button>
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