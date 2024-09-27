import React from 'react';
import { NavLink } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className='card card-compact bg-base-200 w-96 shadow-xl lg:card-side rounded'>
      <NavLink
        to={`/post/${post.id}`}
        className='card-link'
        key={post.id}
      >
        <figure>
          <img src={post.poster} />  
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{post.title }</h2>
          <p>{post.description}</p>
          <div className='flex flex-wrap gap-2'>
            {post.tags.map((tags, index) => (
              <div key={index} className='badge badge-accent'>
                {tags}
              </div>
            ))}
          </div>
          <div className='card-actions justify-end'>
            <button type='btn' className='btn btn-primary'>En savoir +</button>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default PostCard