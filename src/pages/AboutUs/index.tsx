import { useState } from "react";
import Header from "../../component/Header";
import restaurant from "../../images/png/restaurant.png";

export default function AboutUs() {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  return (
    <>
      <section className=" apresentation">
        <Header />
        <div className=" container">
          <div className="about-content">
            <div className="about-left">
              <h2>Missão</h2>
              <p>
                Proporcionar aos nossos clientes uma experiência gastronômica
                única, com pratos feitos com muito amor e carinho, e com um
                atendimento de excelência.
              </p>
              <h2>Visão</h2>
              <p>
                Ser reconhecido como o melhor restaurante da região, e ser
                referência em atendimento e qualidade.
              </p>
              <button className="btn-contact" onClick={handleModal}>
                ENTRE EM CONTATO
              </button>
            </div>
            <div className="about-right">
              <img src={restaurant} />
            </div>
          </div>
        </div>

        {modal && (
          <section className="modal-contact">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Entre em contato</h2>
                <span className="close" onClick={handleModal}>
                  &times;
                </span>
              </div>
              <div className="modal-body">
                <form action="">
                  <label htmlFor="name">Nome</label>
                  <input type="text" name="name" id="name" />
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                  ></textarea>
                  <div className="btn-container">
                    <button type="submit">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
}
