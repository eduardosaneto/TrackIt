import { Link } from "react-router-dom";
import Logout from "../../styledComponents/Logout";

export default function Navbar() {
  function deleteLocalStorage() {
    localStorage.removeItem("user");
  }
   
  return (
    <Logout >
      <Link to='/' onClick={deleteLocalStorage}>
        <h2>Logout</h2>
      </Link>
    </Logout>
  );
}
