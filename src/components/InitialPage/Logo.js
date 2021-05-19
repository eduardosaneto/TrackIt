import styled from 'styled-components';
import TrackItLogo from '../../images/TrackItLogo.JPG';

export default function Logo() {
    return (
        <>
            <LogoBox>
                <div>
                    <img src={TrackItLogo} alt="logo" />
                </div>
                <div>
                    <h1>TrackIt</h1>
                </div>
            </LogoBox>
        </>
    );
}

const LogoBox = styled.div`
    width: 180px;
    height: 180px;
    margin: 138px auto 32px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    div {
      width: 180px;
      height: 86px;
      padding-right: 5px;
    }

    div:first-child {
      padding-left: 5px;
    }

    img {
      width: 100%;
      
    }

    h1 {
      /* font-family: 'Playball', sans-serif; */
      font-size: 69px;
      line-height: 87px;
      text-align: center;
      color: #126BA5;
    }
`;