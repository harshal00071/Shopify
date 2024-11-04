import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCart from "./ProductCart";
import Pagination from "./Pagination";
import Search from "./Search";
import Shopcategory from "./Shopcategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const showresults = "Showing 01-12 of 139 results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);

  //pagination
  const [currentPage, setcurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstproduct = indexOfLastProduct - productsPerPage;
  const currentproducts = products.slice(
    indexOfFirstproduct,
    indexOfLastProduct
  );

  //function to change the current page
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  //filter products based on category
  const [selectedcategory, setselectedcategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });

    setselectedcategory(curcat);
    setproducts(newItem);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" currPage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          {/* main section */}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* leftside */}
              <article>
                {/* layout and title */}
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{showresults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <ProductCart GridList={GridList} products={currentproducts} />
                </div>

                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                <Shopcategory
                  filterItem={filterItem}
                  setItem={setproducts}
                  menuItems={menuItems}
                  setproducts={setproducts}
                  selectedcategory={selectedcategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
