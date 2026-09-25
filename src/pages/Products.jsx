import { useState , useEffect} from "react";

import ProductCard from "../components/ProductCard";


function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
const [products, setProducts] = useState([]);
useEffect(() => {
  fetch("http://localhost:5001/api/products")
    .then((response) => response.json())
    .then((data) => {
      setProducts(data);
    });
}, []);
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || product.category === category;

  return matchesSearch && matchesCategory;
});
    const sortedProducts = [...filteredProducts];
    if (sort === "price-low") {
  sortedProducts.sort((a, b) => a.price - b.price);
}

if (sort === "price-high") {
  sortedProducts.sort((a, b) => b.price - a.price);
}

if (sort === "rating") {
  sortedProducts.sort((a, b) => b.rating - a.rating);
}
  return (
    <main className="py-12 px-6">
      
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          All Products
               <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-3 mb-8"
            />
                  <button
                    onClick={() => {
                      setSearch("");
                      setCategory("All");
                    }}
                    className="bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900"
                  >
                    Clear Filters
                  </button>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 mb-8 ml-4"
              >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Accessories">Accessories</option>
              </select>
        </h1>
                      <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-3 mb-8 ml-4"
                      >
                        <option value="default">Sort By</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating: High to Low</option>
                      </select>

                      {filteredProducts.length === 0 ? (
                        <div className="text-center py-16">
                          <h2 className="text-2xl font-semibold text-gray-800">
                            No products found
                          </h2>

                          <p className="text-gray-500 mt-2">
                            Try a different search or category.
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {sortedProducts.map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                            />
                          ))}
                        </div>
                      )}

      </div>

    </main>
  );
}

export default Products;