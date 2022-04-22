import React from "react";
import "./productList.css";
import Product from "./../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. it's Lama</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, eius
          at veritatis, fuga blanditiis ut nihil minus, assumenda cupiditate
          aperiam harum distinctio.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product img={item.img} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
