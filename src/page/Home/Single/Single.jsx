import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export default function Single() {
  const { id } = useParams();
  const [single, setSingle] = useState({
    isLoading: true,
    isError: false,
    data: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setSingle({
          isLoading: false,
          isError: false,
          data: json,
        });
      })
      .catch((error) => {
        setSingle({
          isLoading: false,
          isError: true,
          data: null,
        });
      });
  }, [id]);

  if (single.isLoading)
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  if (single.isError) return <p>Error loading product details</p>;

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


      <div className="single-container">
        <div className="image-container">
          <img src={single.data.image} alt={single.data.title} />
        </div>
        <div className="content-container">
          <h2>{single.data.title}</h2>
          <p className="single-p">{single.data.description}</p>
          <div className="flex">
            <p>Price: ${single.data.price}</p>
            <p>Category : {single.data.category}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
