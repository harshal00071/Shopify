import React from "react";
import Data from "../products.json";

const Shopcategory = ({
  filterItem,
  setItem,
  menuItems,
  setproducts,
  selectedcategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          onClick={() => setproducts(Data)}
          className={`m-2 ${selectedcategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems.map((val, id) => {
          return (
            <button
              key={id}
              className={`m-2 ${selectedcategory === val ? "bg-warning" : ""}`}
              onClick={() => filterItem(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Shopcategory;
