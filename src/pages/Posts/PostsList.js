import React from 'react';
import { posts } from '../../data/db';
import PostCard from '../../components/Elements/PostCard';


export const PostsList = () => {
  return (
    <section className='container'>
      <article className='flex flex-col justify-center'>
        <h2 className='text-2xl font-bold mb-3 py-3 text-center'>Découvrez mes projets</h2>
        <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4'>
           {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
        </div>       
      </article>
    </section>
  )
}

export default PostsList

