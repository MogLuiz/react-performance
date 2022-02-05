// Packages
import React, { useMemo } from "react";
import { ProductItem } from "../ProductItem";

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

const SearchResults: React.FC<ISearchResultsProps> = ({ results }) => {
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
