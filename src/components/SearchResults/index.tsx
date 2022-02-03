// Packages
import React from "react";

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

const SearchResults: React.FC<ISearchResultsProps> = ({ results }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
      <div>
          { results.map(product => {
              return (
                  <h1>x</h1>
              )
          }) }
      </div>
  )
};

export default SearchResults;
