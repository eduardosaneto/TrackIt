import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar';
import PageTitle from '../PageTitle';
import Footer from '../Footer';

export default function History() {

    const location = useLocation();

    return (
        <Section>
            <Navbar />
            <PageTitle location={location}/>
            <Message>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Message>
            <Footer />
        </Section>
    );
}

const Section = styled.section `
  width: 100%;
  /* max-width: 375px; */
  min-height: 100vh;
  height: 100%;
  /* margin: 0px auto; */
  padding: 70px 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
`;

const Message = styled.div `
    width: 100%;
    height: 40px;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
    }
`;