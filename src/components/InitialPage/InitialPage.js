import styled from 'styled-components';
import Login from './Login';
import Register from './Register'

export default function InitialPage() {
    return (
        <>
            <Logo>
                <img href="" alt="" />
            </Logo>
            <Login />
            <Register />
            <Button>
                Entrar
            </Button>
        </>
    );
}

const Logo = styled.div`
    width: 180px;
    height: 180px;
    margin: 68px auto 32px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 100%;
    height: 45px;
    padding: 11px 0px;
    text-align: center;
    border-radius: 4.63636px;
    background: #52B6FF;
`;