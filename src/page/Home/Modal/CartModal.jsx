import React from "react";

export default function CartModal({ onClose }) {
  return (
    <div className="modal">
      <h1>Your Cart</h1>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
