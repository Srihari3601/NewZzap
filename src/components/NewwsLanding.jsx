import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

const NewsLanding = ({ setSearchQuery, setCategory }) => {
  return (
    <div className="bg-gray-900 text-white px-4 pt-52 text-center min-h-screen">
        <div className="header ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">🗞️ NewZzap</h1>
            <p className="text-lg text-gray-300 mb-6">
                Stay informed with real-time news from around the world.
            </p>
        </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <SearchBar setSearchQuery={setSearchQuery} />
        <CategoryFilter setCategory={setCategory} />
      </div>
    </div>
  );
};

export default NewsLanding;