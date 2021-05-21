import styled from 'styled-components';

const AddHabit = styled.div `
    height: 180px;
    width: 100%;
    padding: 19px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: #FFFFFF; 
    
    fieldset > span {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 10px;
    }

    button {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        font-size: 15.976px;
        line-height: 20px;
    }

    button:first-child {
        background: #fff;
        color: #52B6FF;
    }   

    button:last-child {
        margin-left: 15px;
        background: #52B6FF;
        color: #fff;
    }
`;

export default AddHabit;