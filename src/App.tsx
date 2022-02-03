import React, { useState } from "react";

const App: React.FC = () => {
  // -------------------------------------------------
  // State
  // -------------------------------------------------
  const [search, setSearch] = useState("");
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      <h1>Search</h1>

      <form>
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
