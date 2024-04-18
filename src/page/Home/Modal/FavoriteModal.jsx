import React from "react";

export default function CartModal({ onClose }) {
  return (
    <div className="modal">
      <h2>Your Favorite</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
