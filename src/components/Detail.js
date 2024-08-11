import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './css/Detail.css';

import articlesData from './Data/Data.json';

function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articlesData.find(a => a.slug === slug);
    setArticle(foundArticle);
  }, [slug]);
  
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-detail-container">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
