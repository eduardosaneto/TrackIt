import styled from 'styled-components';

const Content = styled.div `
    height: 91px;
    width: 100%;
    padding: 14px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 5px;
    background: #FFFFFF;
    position: relative;
    
    h2 {
        font-size: 20px;
        line-height: 25px;
        color: #666;
        margin-bottom: 8px;
    }

    .erase {
        font-size: 16px;
        color: #666666;
        position: absolute;
        top: 11px;
        right: 10px;
    }
`;

export default Content;