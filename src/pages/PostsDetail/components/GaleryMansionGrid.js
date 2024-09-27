import React from 'react';

export const GaleryMansionGrid = ({post}) => {
  return (
     <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {post.images.map((src, index) => (
        <div key={index} className="grid gap-4">
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={`/${src}`}
            alt={`gallery-photo-${index + 1}`}
          />
        </div>
      ))}
    </div>
  )
}
