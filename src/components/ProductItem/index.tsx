// Packages
import React, { memo, useState } from "react";
import AddProductToWishlist from "../AddProductToWishlist";

interface IProductItem {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  };
  onAddToWishList: (id: number) => void;
}

const ProductItemComponent: React.FC<IProductItem> = ({
  product,
  onAddToWishList,
}) => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <AddProductToWishlist
        onAddToWishlist={() => onAddToWishList(product.id)}
        onRequestClose={() => setIsAddingToWishlist(false)}
      />
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
