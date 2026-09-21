import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import products from "../data/products";


function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[500px] flex items-center justify-center bg-gray-100 px-6">
        <div className="text-center max-w-3xl">

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Shop Everything You Love
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Discover amazing products, great prices, and a shopping
            experience made for you.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
            Shop Now
          </button>

        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <CategoryCard name="Fashion" />
            <CategoryCard name="Electronics" />
            <CategoryCard name="Home" />
            <CategoryCard name="Beauty" />

          </div>

        </div>
      </section>
      {/* Featured Products Section */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-10">
      Featured Products
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

  </div>
</section>
    </main>
  );
}

export default Home;

