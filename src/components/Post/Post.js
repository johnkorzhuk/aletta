import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
const { string, bool } = PropTypes

import styles from './Post.css'

const Post = ({
  title,
  excerpt,
  content,
  slug,
  titleLink
}) => {
  return (
    <div>
      <h2 className={styles.title}>
        {
          titleLink
            ? <Link className={styles.link} to={`/posts/${slug}`}>{title}</Link>
            : title
        }
      </h2>
      <p className={styles.content}>{excerpt}</p>
    </div>
  )
}

Post.propTypes = {
  title: string,
  excerpt: string,
  content: string,
  slug: string,
  titleLink: bool
}

export default Post
