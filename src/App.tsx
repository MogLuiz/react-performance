// Packages
import React, { FormEvent, useState } from "react";
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

      <SearchResults results={searchResult}/>
    </div>
  );
};

export default App;
