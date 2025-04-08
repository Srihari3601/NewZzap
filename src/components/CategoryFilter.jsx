const CategoryFilter = ({ setCategory }) => {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const onHandleChange = (e) => {
    const selectedCategory = e.target.value;
    console.log("selectedCategory", selectedCategory);
    setCategory(selectedCategory);
  }

  return (
    <div className="flex justify-center my-4">
      <select
        onChange={onHandleChange}
        className="p-2 bg-black border border-gray-400 rounded-md shadow-md text-white text-center w-64"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
