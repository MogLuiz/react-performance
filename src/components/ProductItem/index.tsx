// Packages
import React, { memo } from "react";

interface IProductItem {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

const ProductItemComponent: React.FC<IProductItem> = ({ product }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};

export const ProductItem = memo(ProductItemComponent);
