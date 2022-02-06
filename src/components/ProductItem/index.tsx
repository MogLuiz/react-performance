// Packages
import React, { lazy, memo, Suspense, useState } from "react";

const AddProductToWishlist = lazy(() => {
  return import("../AddProductToWishlist");
});

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
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <Suspense fallback={<span>Carregando...</span>}>
          <AddProductToWishlist
            onAddToWishlist={() => onAddToWishList(product.id)}
            onRequestClose={() => setIsAddingToWishlist(false)}
          />
        </Suspense>
      )}
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
