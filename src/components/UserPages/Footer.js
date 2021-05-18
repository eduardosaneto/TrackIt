import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterMenu>
            <p>Hábitos</p>
            <p>Histórico</p>
        </FooterMenu>
    );
}

const FooterMenu = styled.footer `
    width: 100%;
    height: 70px;
    display: flex;
    padding: 0px 31px 0px 36px;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
`;