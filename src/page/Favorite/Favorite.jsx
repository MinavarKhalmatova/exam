import React from "react";
import { MdArrowBack, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useBasketFavorite from "../../page/Home/store/AddStore";

export default function FavoritePage() {
  const navigate = useNavigate();
  const { favorite  , setFavorite} = useBasketFavorite();

  const hendleDeleteItem = (itemId) => {
    const upDatedFavorite = favorite.filter((item) => item.id !== itemId);
    setFavorite(upDatedFavorite)
  }

  return (
    <div className="container">
      <button
        className="back"
        onClick={() => navigate(-1)}
        style={{ width: "136px", height: "40px" }}
      >
        <MdArrowBack />
        back
      </button>

      <h1>Your Favorite Items</h1>
      <div className="flex-main">
        {favorite.map((item) => (
          <div className="favorite-main" key={item.id}>
            <div className="icons-heart">
              <MdFavorite className="heart"  onClick={() => hendleDeleteItem(item.id)} />
            </div>
            <center>
              <img className="image" src={item.image} alt={item.title} />
            </center>
            <center>
              <h2 className="title">{item.title}</h2>
            </center>
            <div className="flex">
              <h4>
                <span>Rating: </span> {item.rating.rate}
              </h4>
              <h4>
                <span>Price: $</span> {item.price}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
}
