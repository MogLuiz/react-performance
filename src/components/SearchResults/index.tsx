// Packages
import React, { useMemo } from "react";
import { ProductItem } from "../ProductItem";

interface ISearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

const SearchResults: React.FC<ISearchResultsProps> = ({
  results,
  onAddToWishList,
  totalPrice,
}) => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
