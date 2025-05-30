import { NavLink } from "react-router-dom";

export const Card=({curElem})=>{
    const {Poster,title,imdbID}=curElem;
    return (
        <>


      <div className="border-2 rounded-2xl border-gray-200 inset-shadow-sm inset-shadow-indigo-500 ">
        <section className="mt-2 ">
           <img  className="w-full h-80 object-contain  " src={Poster} alt={title} />
        </section>
        <section className="flex gap-2 justify-around mt-2 font-medium border-2 bg-black
         text-amber-50 rounded-2xl mx-1 ">
            <h1>{curElem.Year}</h1>
            <h1>{curElem.Title}</h1>
            
        </section>
        <section className="flex justify-center">
           <NavLink to={`/movie/${imdbID}`}>
                  <button className="border-1 rounded-xl px-2 ">Watch</button> 
           </NavLink>
           </section>
          
       
      
      
      </div> 
      
        </>
    );
};