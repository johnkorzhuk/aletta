import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from '../About/About'
import NotFound from '../NotFound/NotFound'
import Home from '../Home/Home'
import PostDetail from '../PostDetail/PostDetail'

import posts from './../../../blog-posts.json'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home posts={posts.posts} />} />
      <Route exact path='/about' component={About} />
      <Route path='/posts/:slug' component={({ match }) => {
        const post = posts.posts.find(
          post => post.slug === match.params.slug
        )
        return <PostDetail post={post} />
      }} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
