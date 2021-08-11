import styled from 'styled-components';

const HabitInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
        font-size: 20px;
        line-height: 25px;
        color: #666;
        margin-bottom: 7px;
    }

    h3, h4 {
        font-size: 13px;
        line-height: 16px;
        color: #666;
    }
`; 

export default HabitInfo;