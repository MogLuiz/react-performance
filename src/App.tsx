// Packages
import React, { FormEvent, useCallback, useState } from "react";

// Components
import SearchResults from "./components/SearchResults";

type results = {
  totalPrice: number;
  data: any[];
};

const App: React.FC = () => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<results>({
    totalPrice: 0,
    data: [],
  });

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const totalPrice = data.reduce((total: any, product: any) => {
      return total + product.price;
    }, 0);

    setSearchResult({ totalPrice, data });
  };

  const addToWithList = useCallback((id: number) => {
    console.log(id);
  }, []);
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <SearchResults
        results={searchResult.data}
        totalPrice={searchResult.totalPrice}
        onAddToWishList={addToWithList}
      />
    </div>
  );
};

export default App;
