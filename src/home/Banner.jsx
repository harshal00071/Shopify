import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";

const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
  { iconName: "icofont-notification", text: "More then 2000 Marchent" },
  { iconName: "icofont-globe", text: "Buy Anything Online" },
];

const title = (
  <h2>
    Search your One From <span>Thousand</span>of Products
  </h2>
);

const desc = "We have the largest collection of prodcuts";

const Banner = () => {
  const [searchInput, setsearchInput] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(productData);

  //filtering search functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setsearchInput(searchTerm);

    //filtering producst based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
