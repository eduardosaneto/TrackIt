import styled from 'styled-components';

const Logout = styled.div`
    width: 85px;
    height: 50px;
    padding: 17px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 0px 0px 20px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15); 
    background: #f2f2f2;
    position: fixed;
    top: 70px;
    right: 0;
    z-index: 100;

    h1, h2, h3 {
        font-size: 16px;
        color: #666;
    }
`;

export default Logout;