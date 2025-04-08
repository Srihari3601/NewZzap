import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import axios from "axios";
// import CatergoryFilter from "./CategoryFilter";
// import SearchBar from "./SearchBar";
import NewsLanding from "./NewwsLanding";
const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const newsRef = useRef(null); // 🆕 Ref for the news section

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
        let url = searchQuery
          ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`
          : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        const response = await axios.get(url);
        setArticles(response.data.articles);

        // 🧭 Scroll to news section after data is set
        setTimeout(() => {
          newsRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300); // Slight delay to ensure DOM is updated
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [searchQuery, category]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [articles, searchQuery]);

  const handleCategoryChange = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  return (
    <div>
      <NewsLanding
        setSearchQuery={setSearchQuery}
        setCategory={handleCategoryChange}
      />

      {/* 🏁 Anchor to scroll into */}
      <div ref={newsRef}></div>

      {filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => (
          <div key={index} className="relative w-full group">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                loading="lazy"
                className="w-full h-dvh object-cover rounded-md"
              />
            )}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-2xl">{article.title}</h2>
              <p className="text-white">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                Read More
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-center mt-6">No news found.</p>
      )}
    </div>
  );
};

export default NewsList;
