import { Link } from "react-router-dom";
import logo from "../../images/png/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          <img src={logo} className="logo" />
        </h1>

        <nav className="links">
          <ul>
            <Link className="nav-link" to={"/"}>
              <li>Home</li>
            </Link>

            <Link className="nav-link" to={"/menu"}>
              <li>Menu</li>
            </Link>
            <Link className="nav-link" to={"/sobre"}>
              <li>Sobre</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
