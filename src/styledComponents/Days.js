import styled from 'styled-components';

const Days = styled.span `
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;

    div {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    .select {
        background: #DBDBDB;
    }

    .select p {
        color: #fff;
    }

    p {
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;

export default Days;