import { useLocation } from "react-router-dom";
import UserSection from "../../../styledComponents/UserSection";
import Message from "../../../styledComponents/Message";
import Navbar from "../Navbar";
import PageHeader from "../PageHeader";
import FooterMenu from "../FooterMenu";

export default function History() {
  const location = useLocation();

  return (
    <UserSection>
      <Navbar />
      <PageHeader location={location}/>
      <Message>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Message>
      <FooterMenu />
    </UserSection>
  );
}
