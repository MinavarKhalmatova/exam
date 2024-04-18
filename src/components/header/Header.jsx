import React from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { FaHome } from "react-icons/fa";

export default function Header({ favoriteCount, cartCount }) {
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <div className="header__enner">
            <div className="left">
              <div className="lofos-flex">
                <Link to={"/"}>
                  <button className="logo">
                    <FaHome className="home"/>
                    CHOP4GODIES
                  </button>
                </Link>
              </div>
            </div>
            <div className="right">
              <nav>
                <ul className="ul-li">
                  <Link to={"/"}>
                    <li className="li">Home</li>
                  </Link>
                  <Link to={"/Admin"}>
                    <li className="li">Admin</li>
                  </Link>
                </ul>
              </nav>
              <Link to={"/cart"}>
                <button className="btn-first">
                  <HiShoppingCart /> Your Cart <span>({cartCount})</span>
                </button>
              </Link>

              <Link to={"/favorite"}>
                <button className="btn-first">
                  <MdFavoriteBorder className="fav" /> Favorite
                  <span>({favoriteCount})</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
