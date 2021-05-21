import styled from 'styled-components';

const Title = styled.div `
    height: 45px;
    width: 100%;
    margin: 21px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    h3 {
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }

    button {
        width: 40px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        background: #52B6FF;
        position: absolute;
        right: 0;
    }
    
    .plus {
        font-size: 18px;
        color: #fff;
    }
`;

export default Title;