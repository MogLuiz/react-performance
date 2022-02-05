// Packages
import React, { useMemo } from "react";
import { ProductItem } from "../ProductItem";

interface ISearchResultsProps {
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
}) => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const totalPrice = useMemo(() => {
    return results.reduce((total, currentProduct) => {
      return total + currentProduct.price;
    }, 0);
  }, [results]);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
};

export default SearchResults;
