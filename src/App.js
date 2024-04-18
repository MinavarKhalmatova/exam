import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import FavoritePage from "./page/Favorite/Favorite";
import Home from "./page/Home/Home";
import Admin from "./page/Admin/Admin";
import Single from "./page/Home/Single/Single";
import Api from "./page/Home/All/All";
import Cart from "./page/Cart/Cart";
import useBasketFavorite from "./page/Home/store/AddStore";
import Public from "./page/Public/Public"; // Импортируем компонент Public

export default function App() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { favorite, basket } = useBasketFavorite();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setFavoriteItems(storedFavorites);
    setCartItems(storedCartItems);
  }, []);
  
  const favoriteCount = favorite.length;
  const cartCount = basket.length;

  return (
    <div>
      <Header favoriteCount={favoriteCount} cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/all" element={<Api />} />
        <Route path="/favorite" element={<FavoritePage favoriteItems={favoriteItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/public/*" element={<Public />} /> {/* Здесь будут вложенные маршруты для компонента Public */}
      </Routes> 
    </div>
  );
}
