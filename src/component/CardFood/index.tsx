/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CardFood({ food }: any) {
  return (
    <>
      <div className="menu-item">
        <div className="opacity-img">
          <img src={food.image} alt="" />
        </div>
        <div className="menu-item-text">
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          <span>
            R$ <b>{food.price}</b>
          </span>
        </div>
      </div>
    </>
  );
}
