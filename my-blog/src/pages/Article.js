import React from 'react'
// import articles from './article-content';
import articleContent from './article-content'

const Article = ({match}) => {
  const name  = match.params.name;
  const article = articleContent.find((article) => article.name === name);
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">{article.title}</h1>
      {article.content.map((paragraph , index) =>(
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default Article
