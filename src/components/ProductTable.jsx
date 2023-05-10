import ProductRow from "./ProductRow";
//import products from "../data.json";
import React, { useState } from "react";

function ProductTable({ productList, setProductList }) {
  //const [productList, setProductList] = useState(products);
  console.log(productList);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((currentProduct) => (
          <ProductRow productInfo={currentProduct} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
