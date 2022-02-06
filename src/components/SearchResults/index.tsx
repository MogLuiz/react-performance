// Packages
import React from "react";

// Utils
import { List, ListRowRenderer } from "react-virtualized";

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

export default SearchResults;
