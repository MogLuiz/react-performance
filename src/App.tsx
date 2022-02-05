// Packages
import React, { FormEvent, useCallback, useState } from "react";

// Components
import SearchResults from "./components/SearchResults";

const App: React.FC = () => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setSearchResult(data);
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

      <SearchResults results={searchResult} onAddToWishList={addToWithList} />
    </div>
  );
};

export default App;
