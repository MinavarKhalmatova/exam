import React, { useState } from "react";
import SectionEnner from "./firstSection/Section-Enner";
import Slider from "./slider/Slider";
import ThirdSection from "./thirdSection/ThirdSectiom";
import Comments from "./comments/Comment";
import NextSearch from "./next-search/NextSearch";
import Footer from "../../components/header/Footer";
import Card from "./card/Card";


export default function Home() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToFavorite = (item) => {
    if (!favoriteItems.some((favItem) => favItem.id === item.id)) {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  const handleDeleteFavorite = (id) => {
    const updatedFavorites = favoriteItems.filter((item) => item.id !== id);
    setFavoriteItems(updatedFavorites);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <SectionEnner />
      <Slider />
      <Card
        handleAddToCart={handleAddToCart}
        onAddToCart={handleAddToCart}
        onAddToFavorite={handleAddToFavorite}
      />

      <ThirdSection />
      <Comments />
      <NextSearch />
      <Footer />

    </div>
  );
}
