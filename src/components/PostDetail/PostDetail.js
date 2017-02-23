import React, { PropTypes } from 'react'
const { object } = PropTypes

import Post from '../Post/Post'

const PostDetail = ({
  post
}) => {
  return (
    <div>
      <Post {...post} />
    </div>
  )
}

PostDetail.propTypes = {
  post: object
}

export default PostDetail
