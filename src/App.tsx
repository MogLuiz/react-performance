// Packages
import React, { useState } from "react";

const App: React.FC = () => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------

  const [search, setSearch] = useState("");

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleSearch = () => {

  }

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
    </div>
  );
};

export default App;
