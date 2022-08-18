import { useState,useEffect } from "react";
import data from "../data";
import '../styles/list.css'
const ListCars = ({ card, handelChange, setCart, setBasket,basket }) => {
  const [price, setPrice] = useState(0);
  const deleteHandel = (e) => {
    const arr = card.filter((f) => f.id != e);
    setCart(arr);
    setBasket(basket-1)
  };
  const totalHandel = () => {
    let many = 0;
    card.map((i) => (many += i.conter * i.price));
    setPrice(many);
  };

  useEffect(() => {
    totalHandel();
  });
  const render = card.map((card) => {
    return (
      <div key={card.id} className="list__container">
        <div className="list">
          <div className="list__box">
            <img src={card.img} alt="" />
          </div>
          <div className="list__details">
            <p>{card.brand}</p>
            <p>{card.model}</p>
            <p>$ {card.price}</p>
          </div>
          <div className="row__buttom">
            <span onClick={() => handelChange(card, 1)}>+</span>
            <span>{card.conter}</span>
            <span onClick={() => handelChange(card, -1)}>-</span>
            <span>
              <i
                className="fa-solid fa-trash"
                onClick={() => deleteHandel(card.id)}
              ></i>
            </span>
          </div>
        </div>
        <span className="line"></span>
      </div>
    );
  });

  return (
    <>
      {render}
      <div className="total">
        <div>
          <span>{`Total Price Items ${basket}: `}</span>
          <span>$ {price}</span>
        </div>
        <button>Finalize the order</button>
      </div>
    </>
  );
};

export default ListCars;
