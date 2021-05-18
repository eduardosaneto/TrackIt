import styled from 'styled-components';

export default function InitialButton({ location }) {

    return (
        <>
            <Button>
                {location.pathname === "/" ? "Entrar" : "Cadastrar"}
            </Button>
            <Footer>
                <p>
                    {location.pathname === "/" ? 
                    "Não tem uma conta? Cadastre-se!" : 
                    "Já tem uma conta? Faça login!"}
                </p>
            </Footer>
        </>
    );
}

const Button = styled.button`
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 4.63636px;
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