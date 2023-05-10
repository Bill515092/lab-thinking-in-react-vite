import React from "react";

function ProductRow(props) {
  console.log(props.productInfo);
  return (
    <tr>
      <td>{props.productInfo.name}</td>
      <td>{props.productInfo.price}</td>
    </tr>
  );
}

export default ProductRow;
