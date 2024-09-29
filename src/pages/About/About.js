import React,{useEffect} from 'react';


export const About = () => {

   useEffect(() => {
    window.feather.replace();
  }, []);

  return (
     <section className="container mx-auto py-10 flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col items-center">
        <img 
          src="/assets/img/about.jpg" 
          alt="Présentation" 
          className="w-96 mask mask-squircle mb-6 " 
        />
      </div>
      <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0 items-center">
        <h2 className="text-3xl font-bold mb-4">À Propos </h2>
        <p className="text-lg mb-4">
          Passionné par le design et la technologie, je suis une webdesigneuse diplômée, récemment formée au développement front-end. J’allie créativité et compétences techniques pour créer des expériences utilisateur intuitives et esthétiques. Toujours à l'affût des tendances, je suis prête à relever de nouveaux défis !
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/julietteuhln" target="_blank" rel="noopener noreferrer">
           <i data-feather="github"></i>
          </a>
          <a href="https://www.linkedin.com/in/juliette-uln/" target="_blank" rel="noopener noreferrer">
             <i data-feather="linkedin"></i>
          </a>
          <a href="https://codepen.io/misumoochie/" target="_blank" rel="noopener noreferrer">
             <i data-feather="codepen"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
