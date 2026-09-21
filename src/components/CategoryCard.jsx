function CategoryCard({ name }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className="text-4xl mb-3">
        🛍️
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        {name}
      </h3>
    </div>
  );
}

export default CategoryCard;