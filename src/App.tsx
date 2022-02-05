// Packages
import React, { FormEvent, useCallback, useState } from "react";

// Components
import SearchResults from "./components/SearchResults";

interface IDataProduct {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
}
type results = {
  totalPrice: number;
  data: IDataProduct[];
};
interface IProduct {
  id: number;
  title: string;
  price: number;
}

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

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product: IProduct) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce((total: number, product: IProduct) => {
      return total + product.price;
    }, 0);

    setSearchResult({ totalPrice, data: products });
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
