import './PostDetail.css';
import React, { useEffect, useState } from 'react';
import { posts } from '../../data/db';
import { useParams } from 'react-router-dom';
import { GaleryMansionGrid } from './components/GaleryMansionGrid';
import GaleryDiff from './components/GaleryDiff';


const PostsDetail = () => {


  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPosts() {
      const data = posts.find((post) => post.id === parseInt(id));
      if (data) {
        setPost(data);
        console.log(data)
      }     
    }

    fetchPosts();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>
  }
 

  return (
    <section className="container mx-auto">
      <article className='py-2 mb-3'>
        <a href='/'>
          <button type='button' className='btn btn-primary btn-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
            </svg>
          retour à l'accueil</button>
        </a>
      </article>
      <article className='postdetail-flex'>
        <div className='grid grid-column'>
          <h2 className='font-bold text-3xl mb-3'>{post.title}</h2>
          <p className='mb-3'>{post.text}</p>
          <div className='flex flex-wrap gap-2 py-4'>
            {post.tags.map((tags, index) => (
                    <div key={index} className='badge badge-accent'>
                      {tags}
                    </div>
                  ))}
          </div>
           <span className='badge badge-secondary'>{post.category} </span>  
        </div> 
         <img src={`/${post.poster}`} alt="title poster" width={400} className='rounded-xl'/>
      </article>    
      <article className='py-4'>
        <GaleryMansionGrid post={post} />
      </article> 
      {id === '5' && (
        <article>
        <GaleryDiff post={post} />
      </article>
      )}
      
    </section>
  );
};

export default PostsDetail;
