import { Link } from "react-router-dom";
import Header from "../../component/Header";
import chefSvg from "../../images/svg/Chef-cuate (2).svg";

export default function Home() {
  return (
    <>
      <section className=" apresentation">
        <Header />
        <div className=" container">
          <div className="apresentation-content">
            <div className="apresentation-left">
              <h1>Seja bem vindo ao</h1>
              <h2>Quentinhas do grau</h2>
              <p>
                O Restaurante Quentinhas do grau é o fruto de um grande sonho
                tornado realidade: mãe e filha, Ditinha e Dora, se uniram para
                criar um restaurante que resgatasse a essência de nossa cozinha
                mais tradicional e regional.
              </p>
              <div className="btn-container">
                <Link to={"/menu"}>
                  <button>Ver Menu</button>
                </Link>
              </div>
            </div>
            <div className="apresentation-right">
              <img src={chefSvg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
