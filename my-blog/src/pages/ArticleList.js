import React from 'react'


import articleContent from './article-content'
import Articles from '../components/Articles'

const ArticleList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900"> All Articles</h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articleContent} />
        </div>
      </div>
    </>
  )
}

export default ArticleList
