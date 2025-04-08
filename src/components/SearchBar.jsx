import { useState, useEffect } from "react";

const SearchBar = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchQuery(inputValue);  // Update query after delay
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout
  }, [inputValue, setSearchQuery]);

  const handleQueryChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search news..."
        onChange={handleQueryChange}
        value={inputValue}
        className="py-2 text-center text-4xl  border-4 border-emerald-500 rounded-4xl w-fit h-32 text-white"
      />
    </div>
  );
};

export default SearchBar;