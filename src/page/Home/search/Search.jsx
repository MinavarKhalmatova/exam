import React from "react";
import { TfiSearch } from "react-icons/tfi";

export default function Search({ setValue, filteredCountries }) {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="forms">
            <input
              className="input"
              type="text"
              placeholder="Search for products"
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="btn-icon">
              <TfiSearch className="icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
