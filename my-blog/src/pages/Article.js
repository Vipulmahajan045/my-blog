import React from 'react'

const Article = ({match}) => {
  const name  = match.params.name;
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">This is  this {name} Article</h1>
    </>
  )
}

export default Article
