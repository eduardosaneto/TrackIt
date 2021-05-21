import styled from 'styled-components';

const Check = styled.div `
    width: 69px;
    height: 69px;
    display: flex; 
    justify-content: center;
    align-items: center;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    /* background: #EBEBEB; */
    background: ${props => props.color ? "#8FC549" : "#EBEBEB"};

    /* .done {
        background: #8FC549 !important;
    } */

    .check {
        font-size: 35px;
        color: #fff;
    }
`;

export default Check;