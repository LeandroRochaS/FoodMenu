import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <h1>LOGO</h1>

        <nav className="links">
          <ul>
            <Link className="nav-link" to={"/"}>
              <li>Home</li>
            </Link>

            <Link className="nav-link" to={"/menu"}>
              <li>Menu</li>
            </Link>
            <li>Sobre nós</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
