import Header from "../../component/Header";
import plate from "../../images/svg/food-dinner-dish-plate-fork-svgrepo-com.svg";
import lunch from "../../images/svg/food-dish-svgrepo-com.svg";
import drink from "../../images/svg/drink.svg";
import cake from "../../images/svg/cake.svg";
import sushi from "../../images/svg/sushi.svg";

export default function Menu() {
  return (
    <>
      <section className=" apresentation">
        <div className="container">
          <Header />
        </div>
        <div className=" container">
          <div className="cards-container">
            <div className="card">
              <div className="card-image">
                <img src={plate} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Jantar</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={lunch} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Almoço</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={sushi} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Petisco</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={drink} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Bebida</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={cake} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Sobremesa</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
