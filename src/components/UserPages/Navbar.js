import { useContext } from 'react';
import Header from '../../styledComponents/Header';
import UserContext from '../../contexts/UserContext';

export default function Navbar() {

    const { user } = useContext(UserContext);
   
    return (
        <Header>
            <h1>TrackIt</h1>
            <div>
                <img src={user.image} alt={user.id} />
            </div>
        </Header>
    );
}