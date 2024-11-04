import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import Checkoutpage from "./Checkoutpage";

const CartPage = () => {
  const [cartItem, setcartItem] = useState([]);

  useEffect(() => {
    //fetch cart item from local storgae
    const storedcartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItem(storedcartItems);
  }, []);

  //caluclate price
  const calculatetotalPrice = (item) => {
    return item.price * item.quantity;
  };
  // handle quantiy increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setcartItem([...cartItem]);

    //update local storage
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItem([...cartItem]);
    }

    //update local storage
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

  // handle delete
  const handleRemoveItem = (item) => {
    const updatedCart = cartItem.filter((cartItem) => cartItem.id !== item.id);

    setcartItem(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const cartSubTotal = cartItem.reduce((total, item) => {
    return total + calculatetotalPrice(item);
  }, 0);

  // order total
  const orderTotal = cartSubTotal;

  return (
    <div>
      <PageHeader title={"Shop cart"} currPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart-top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>

                {/* table-body */}
                <tbody>
                  {cartItem.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td>${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>

                      <td className="cat-toprice">
                        ${calculatetotalPrice(item)}
                      </td>

                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart-top ends */}
            {/* cart-bottom */}
            <div className="cart-bottom">
              {/* chechout-box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code ...."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <Checkoutpage />
                  </div>
                </form>
              </div>
              {/* checkout-box ends */}

              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom(UK)</option>
                          <option value="us">United States</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakistan</option>
                          <option value="ind">India</option>
                          <option value="np">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="ny">New York</option>
                          <option value="ld">London</option>
                          <option value="ka">Karachi</option>
                          <option value="mb">Mumbai</option>
                          <option value="dl">Delhi</option>
                          <option value="dk">Dhaka</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        className="cart-page-input-text"
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="Postcode/ZIP"
                      />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">${cartSubTotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">${orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
