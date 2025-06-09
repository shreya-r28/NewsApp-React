import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NewsCard from "./components/NewsCard";
import "./styles.css";

const BASE_URL = "https://newsapi.org/v2/everything?q=";

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("India");

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch(`${BASE_URL}${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
      const data = await res.json();
      setArticles(data.articles);
    }
    fetchNews();
  }, [query]);
  return (
  <div>
    <NavBar onSearch={setQuery} />

    <main>
      <div className="cards-container container flex">
        {articles
          .filter(article => article.urlToImage)
          .map((article, idx) => (
            <NewsCard key={idx} article={article} />
          ))}
      </div>
    </main>
  </div>
);
}

export default App;
