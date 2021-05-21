import styled from 'styled-components';

const StartButton = styled.button`
    width: 303px;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    border: none;
    background: #52B6FF;
    opacity: ${props => props.loading ? 0.5 : 1.0};
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #fff;
`;

export default StartButton;