import React, { useState, useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import useBasketFavorite from "../store/AddStore";


export default function Api() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { basket, setBasket, favorite, setFavorite } = useBasketFavorite();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    if (!basket.find((item) => item.id === product.id)) {
      setBasket([...basket, product]);
    }
  };

  const addFavorite = (product) => {
    if (!favorite.find((item) => item.id === product.id)) {
      setFavorite([...favorite, product]);
    }
  };

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <div className="container">
        <button
          className="back"
          onClick={() => navigate(-1)}
          style={{ width: "136px", height: "40px" }}
        >
          <MdArrowBack />
          back
        </button>
        <div className="main-flex">
          {data.map((e) => (
            <div className="enner-main" key={e.id}>
              <Link to={`/single/${e.id}`}>
                <center>
                  <img className="image" src={e.image} alt={e.title} />
                </center>
                <center>
                  <h2 className="title">{e.title}</h2>
                </center>
                <div className="flex">
                  <h4>
                    <span>Rating: </span> {e.rating.rate}
                  </h4>
                  <h4>
                    <span>Price: $</span> {e.price}
                  </h4>
                </div>
              </Link>

              <div className="buttons">
                <button className={`add-to-cart`} onClick={() => addToCart(e)}>
                  Add to Cart
                </button>
                <button
                  className={`add-to-cart`}
                  onClick={() => addFavorite(e)}
                >
                  Add to Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
