import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Energistla an deliver atactiac metrcs after avsioanry Aproprata transition enterpris an sources applications emerging psd template";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [prequantity, setprequantity] = useState(quantity);
  const [coupon, setcoupon] = useState("");
  const [size, setsize] = useState("Select Size");
  const [color, setcolor] = useState("Select color");

  const handleSizeChange = (e) => {
    setsize(e.target.value);
  };
  const handleColorChange = (e) => {
    setcolor(e.target.value);
  };
  const handleDecrease = () => {
    if (prequantity > 1) setprequantity(prequantity - 1);
  };
  const handleIncrease = () => {
    setprequantity(prequantity + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex != -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }
    //update local srorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    //reset form field
    setprequantity(1);
    setsize("Select Size");
    setcolor("select Color");
    setcoupon("");
  };
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart componeent */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>SELECT SIZE</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>SELECT Color</option>
              <option>Pink</option>
              <option>White</option>
              <option>Red</option>
              <option>Green</option>
              <option>Black</option>
              <option>Purple</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* counting cart-plus-minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              className="cart-plus-minus-box"
              onChange={(e) => setprequantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* coupon */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setcoupon(e.target.value)}
            />
          </div>

          {/* btn sections */}
          <button type="submit" className="lab-btn">
            <span>ADD TO CART</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>CHECK OUT</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
