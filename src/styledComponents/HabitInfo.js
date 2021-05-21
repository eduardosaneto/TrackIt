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
    }

    h3 {
        /* color: ${props => props.itsComplete ? "#8FC549" : "#666"}; */
        /* color: #8FC549; */
        color: #666;
    }

    .checked {
        color: #8FC549 !important;
    }

    h4 {
        color: #666;
    }
`; 

export default HabitInfo;