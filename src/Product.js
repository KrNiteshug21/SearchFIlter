import React from "react";

const Product = ({ pro }) => {
  const price = (pro.price * pro.discountPercentage) / 100;
  return (
    <div className="product">
      <img src={pro.thumbnail} alt={pro.title} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{pro.title}</h2>
        <p>{pro.rating}</p>
      </div>
      <p>{pro.description}</p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          fontSize: "1.25rem",
        }}
      >
        <p style={{ textDecoration: "line-through" }}>₹{pro.price}</p>
        <p>₹{(pro.price - price).toFixed(0)} </p>
      </div>
    </div>
  );
};

export default Product;
