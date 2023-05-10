import "./App.css";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/searchBar";
import React, { useState } from "react";
import products from "./data.json";

function App() {
  const [productList, setProductList] = useState(products);
  return (
    <div className="App">
      <h1>IronStore</h1>
      <SearchBar productList={productList} setProductList={setProductList} />
      <ProductTable productList={productList} />
    </div>
  );
}
export default App;
