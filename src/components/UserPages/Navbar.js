import styled from 'styled-components';
import TrackItLogo from '../../images/TrackItLogo.JPG';

export default function Navbar() {
    return (
        <Header>
            <h1>TrackIt</h1>
            <div>
            </div>
        </Header>
    );
}

const Header = styled.header `
    width: 100%;
    height: 70px;
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    h1 {
        font-size: 39px;
        line-height: 49px;
        color: #fff;
    }

    div {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        background-image: url(${TrackItLogo});
    }
`;