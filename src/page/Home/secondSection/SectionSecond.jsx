import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function SectionSecond({ setSelect }) {
  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <section className="second-section">
        <div className="container">
          <div className="titles">
            <div className="left">
              <h1>New Arrivals</h1>
              <p>Check out the latest products</p>
            </div>
            <div className="right">
              <div className="center">
                <select onChange={handleSelectChange}>
                  <option value="">All</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                </select>
              </div>
              <button>
                <Link to={"/all"}>View all</Link>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
