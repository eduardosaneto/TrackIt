import { Link } from 'react-router-dom';
import Menu from '../../styledComponents/Menu';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function FooterMenu() {

    const percentage = 0;

    return (
        <Menu>
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
        </Menu>
    );
}