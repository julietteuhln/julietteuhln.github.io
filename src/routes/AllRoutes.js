import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { PostsList } from '../pages/Posts/PostsList';
import PostsDetail from '../pages/PostsDetail/PostsDetail';
import PageNotFound from '../pages/PageNotFound';
import { About } from '../pages/About/About';

export default function AllRoutes() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<PostsList />} />
              <Route path='/post/:id' element={<PostsDetail />} />
              <Route path='/about' element={<About />} />
              
              <Route path='*' element={<PageNotFound />} />
          </Routes>
      </>
  )
}
