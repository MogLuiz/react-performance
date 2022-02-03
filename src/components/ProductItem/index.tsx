// Packages
import React from "react";

interface IProductItem {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

const ProductItem: React.FC<IProductItem> = ({ product }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};

export default ProductItem;
