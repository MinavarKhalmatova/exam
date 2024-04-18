import React, { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import Search from "../search/Search";
import SectionSecond from "../secondSection/SectionSecond";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import useBasketFavorite from "../store/AddStore";

export default function Card({ onAddToFavorite  }) {
  const [datas, setDatas] = useState([]);
  const [select, setSelect] = useState("");
  const [value, setValue] = useState("");
  const { basket, setBasket, favorite, setFavorite } = useBasketFavorite();

  useEffect(() => {
    if (!select) {
      fetch("https://fakestoreapi.com/products?limit=6")
        .then((res) => res.json())
        .then((json) => setDatas(json));
    } else {
      fetch(`https://fakestoreapi.com/products/category/${select}`)
        .then((res) => res.json())
        .then((json) => setDatas(json));
    }
  }, [select]);

  const filteredCountries = datas.filter((data) => {
    return data.title.toLowerCase().includes(value.toLowerCase());
  });

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

  return (
    <>
      <Search filteredCountries={filteredCountries} setValue={setValue} />
      <SectionSecond setSelect={setSelect} />
      <section className="third-section">
        <div className="container">
          <div className="product-container">
            {filteredCountries.map((e) => (
              <div className="product-card" key={e.id}>
                <Link to={`/single/${e.id}`}>
                  <center>
                    <img className="img" src={e.image} alt={e.title} />
                  </center>
                  <h2 className="title">{e.title}</h2>
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
                  <button
                    className={`add-to-cart`}
                    onClick={() => addToCart(e)}
                  >
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
    </>
  );
}
