import React from "react";

const NewsCard = ({ article }) => {
  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  return (
    <div className="card" onClick={() => window.open(article.url, "_blank")}>
      <div className="card-header">
        <img src={article.urlToImage} alt="news" />
      </div>
      <div className="card-content">
        <h3>{article.title}</h3>
        <h6 className="news-source">{article.source.name} · {date}</h6>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
