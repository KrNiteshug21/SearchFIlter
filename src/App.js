import { useEffect, useState } from "react";
import Product from "./Product";

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const filteredProduct = product.filter((pro) =>
    pro.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredProduct);

  useEffect(() => {
    const fetchItems = async () => {
      const url = `https://dummyjson.com/products`;
      try {
        const response = await fetch(url);
        const newProduct = await response.json();
        console.log(newProduct.products);
        setProduct(newProduct.products);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchItems();
  }, []);

  return (
    <main className="App">
      <div className="setWidth">
        <header className="header">Welcome to my page</header>
        <form className="form">
          <label htmlFor="product">Search</label>
          <input
            id="products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </form>
        <section className="productWrapper">
          {filteredProduct.map((pro) => (
            <Product pro={pro} key={pro.id} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
