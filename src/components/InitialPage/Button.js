import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StartButton from '../../styledComponents/StartButton';
import Footer from '../../styledComponents/Footer';
import LoadingContext from '../../contexts/LoadingContext';
import Loader from "react-loader-spinner";

export default function InitialButton({ location, body, signUpBody }) {

    const { loading } = useContext(LoadingContext);

    return (
        <>
            <StartButton loading={loading}>
                {loading ?
                    <Loader
                        type="ThreeDots"
                        color="#fff"
                        height={50}
                        width={50}
                        timeout={3000}
                        /> :
                (location.pathname === "/" ? "Entrar" : "Cadastrar")
                }
            </StartButton>
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