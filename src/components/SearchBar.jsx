import React, { useState } from "react";
import products from "../data.json";

function SearchBar({ productList, setProductList }) {
  const [searchInput, setSearchInput] = useState("");
  function handleSearch() {
    const copyArray = [...productList];
    setProductList();
  }
  return (
    <div>
      <form action="">
        <label>Search</label>
        <input type="text" onChange={handleSearch} />
      </form>
    </div>
  );
}

export default SearchBar;
