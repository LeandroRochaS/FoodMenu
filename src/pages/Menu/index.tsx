/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../../component/Header";
import plate from "../../images/svg/food-dinner-dish-plate-fork-svgrepo-com.svg";
import lunch from "../../images/svg/food-dish-svgrepo-com.svg";
import drink from "../../images/svg/drink.svg";
import cake from "../../images/svg/cake.svg";
import sushi from "../../images/svg/sushi.svg";
import CardFood from "../../component/CardFood";
import { dataFoods } from "../../utils/data";
import { useEffect, useState } from "react";
type FoodType = "almoco" | "jantar" | "petisco" | "bebida" | "sobremesa";

export default function Menu() {
  const [foods, setFoods] = useState<any[]>([]);
  const [typeFood, setTypeFood] = useState<FoodType>("almoco");

  useEffect(() => {
    console.log(typeFood);
    setFoods(dataFoods[typeFood]);
  }, [typeFood]);

  return (
    <>
      <section className=" apresentation">
        <Header />
        <div className=" container">
          <div className="cards-container">
            <div className="card" onClick={() => setTypeFood("jantar")}>
              <div className="card-image">
                <img src={plate} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Jantar</h3>
              </div>
            </div>
            <div className="card" onClick={() => setTypeFood("almoco")}>
              <div className="card-image">
                <img src={lunch} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Almoço</h3>
              </div>
            </div>
            <div className="card" onClick={() => setTypeFood("petisco")}>
              <div className="card-image">
                <img src={sushi} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Petisco</h3>
              </div>
            </div>
            <div className="card" onClick={() => setTypeFood("bebida")}>
              <div className="card-image">
                <img src={drink} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Bebida</h3>
              </div>
            </div>
            <div className="card" onClick={() => setTypeFood("sobremesa")}>
              <div className="card-image">
                <img src={cake} className="icon" alt="" />
              </div>
              <div className="card-content">
                <h3>Sobremesa</h3>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-title">
              <h1>Cardápio</h1>
              <h4>{typeFood}</h4>
            </div>

            <div className="menu-content">
              {foods &&
                foods.map((food: any) => (
                  <CardFood key={food.id} food={food} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
