// Packages
import React from "react";
import { ProductItem } from "../ProductItem";

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

const SearchResults: React.FC<ISearchResultsProps> = ({ results }) => {
  const totalPrice = results.reduce((total, currentProduct) => {
    return total + currentProduct.price;
  }, 0);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      {results.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
};

export default SearchResults;
