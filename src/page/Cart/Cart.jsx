import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useBaskeetFavorite from "../Home/store/AddStore";

export default function Cart({ cartItems, onDeleteFavorite, SetCartItems }) {
  const navigate = useNavigate();
  const { basket, setBasket } = useBaskeetFavorite();
  const [itemQuantities, setItemQuantities] = useState({});

  const handleQuantityChange = (itemId, quantity) => {
    setItemQuantities({ ...itemQuantities, [itemId]: quantity });
  };
  const handleDeleteItem = (itemId) => {
    const updatedBasket = basket.filter((item) => item.id !== itemId);
    setBasket(updatedBasket);
  };

  const handleDeleteAllItems = () => {
    setBasket([]);
  };

  const getTotalItemPrice = (item) => {
    const quantity = itemQuantities[item.id] || 1;
    return item.price * quantity;
  };
  const getTotalPrice = () => {
    return basket.reduce((total, item) => total + getTotalItemPrice(item), 0);
  };

  return (
    <div className="container">
      <button
        className="back"
        onClick={() => navigate(-1)}
        style={{ width: "136px", height: "40px" }}
      >
        <MdArrowBack /> назад
      </button>
      <div className="our-container">
        <div className="flex_first_main">
          <div className="next-main">
            {basket.map((item) => (
              <div className="main-favorite" key={item.id}>
                <div className="left">
                  <center>
                    <img className="image" src={item.image} alt={item.title} />
                  </center>
                </div>
                <div className="right">
                  <center>
                    <h2 className="title">{item.title}</h2>
                  </center>
                  <div className="flex">
                    <h4>
                      <span>Цена: $</span> {item.price}
                    </h4>
                    <input
                      type="number"
                      value={itemQuantities[item.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      min={1}
                      max={3}
                    />
                  </div>
                  <div className="icons">
                    <button onClick={() => handleDeleteItem(item.id)}>
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total-block">
            <h4>Summery</h4>
            <button className="price-btn">Enter Discount Coupon Here</button>
            <hr />
            <ul>
              {basket.map((item) => (
                <li key={item.id}>
                  <div className="titles">{item.title}</div>
                  <div className="price">
                    ${getTotalItemPrice(item)} - (x
                    {itemQuantities[item.id] || 1})
                  </div>
                </li>
              ))}
            </ul>
            <br />
            <hr />
            <h2>
              TOTAL: <span> ${getTotalPrice().toFixed(2)}</span>
            </h2>
           
              <button className="price-btn" onClick={handleDeleteAllItems}>Удалить все товары</button>
              
          </div>
        </div>
      </div>
    </div>
  );
}
