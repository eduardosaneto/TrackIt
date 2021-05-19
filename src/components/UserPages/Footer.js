import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {

    const percentage = 0;

    return (
        <FooterMenu>
            <div>
                <Link to='/habitos'>
                    <p>Hábitos</p>
                </Link>
                <div>
                    <Link to='/hoje'>
                        <CircularProgressbar 
                            value={percentage} 
                            text="Hoje" 
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                    backgroundColor: "#52B6FF",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent"
                                })}
                        />;
                    </Link>
                </div>
                <Link to='/historico'>
                    <p>Histórico</p>
                </Link>
            </div>
        </FooterMenu>
    );
}

const FooterMenu = styled.footer `
    width: 100%;
    height: 70px;
    display: flex;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    font-family: 'Lexend Deca', sans-serif;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }

    > div {
        width: 375px;
        height: 100%;
        margin: 0 auto;
        padding: 0px 31px 0px 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div div {
        width: 91px;
        height: 91px;
        position: fixed;
        bottom: 5px;
        left: calc(50% - 46px);
        z-index: 3;
    }
`;