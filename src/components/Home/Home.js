import React, { PropTypes } from 'react'
const { array } = PropTypes

import Post from '../Post/Post'

const Home = ({
  posts
}) => {
  return (
    <div>
      {posts.map(post =>
        <Post key={post.slug} {...post} titleLink />)}
    </div>
  )
}

Home.prototype = {
  posts: array
}

export default Home
