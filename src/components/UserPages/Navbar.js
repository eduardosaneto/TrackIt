import { useState } from 'react';
import Header from '../../styledComponents/Header';

import Logout from './Logout';

export default function Navbar() {

    const [showBox, setShowBox] = useState(0);
    const localstorage = JSON.parse(localStorage.user);
    const id = localstorage.id;
    const image = localstorage.image;

    function toggleBox() {
        showBox === 0 ? setShowBox(1) : setShowBox(0);
    }

    return (
        <>
            <Header>
                <h1>TrackIt</h1>
                <div>
                    <img src={image} alt={id} onClick={toggleBox}/>
                </div>
            </Header>
            {showBox === 1 &&  <Logout /> }
        </>
    );
}