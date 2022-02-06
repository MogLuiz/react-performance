// Packages
import React from "react";

// Utils
import { List } from "react-virtualized";

// Components
import { ProductItem } from "../ProductItem";

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>;
  totalPrice: number;
  onAddToWishList: (id: number) => void;
}

const SearchResults: React.FC<ISearchResultsProps> = ({
  results,
  onAddToWishList,
  totalPrice,
}) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return (
          <div key={product.id}>
            <ProductItem product={product} onAddToWishList={onAddToWishList} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
