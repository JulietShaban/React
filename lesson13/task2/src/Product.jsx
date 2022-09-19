import React from "react";
import { useParams } from 'react-router-dom'
function Product({match}) {
 const { productId } = useParams();
  return (
    <div class="product">
     {`Product is a ${productId}`}
    </div>
  );
}

export default Product;