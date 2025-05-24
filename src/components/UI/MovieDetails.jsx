import { useLoaderData, useParams } from "react-router-dom";

export const MovieDetails=()=>{
    const movieData=useLoaderData();
    console.log(movieData);
    const {Actors,Poster,Awards,Boxoffice,Country,Director,Genre}=movieData;
    //useparams read the url .
    const params=useParams();
    console.log(params);    
    return(
        <>
        <section className="">
            <section className="flex justify-center mt-2 ">
               <img src={Poster} alt={Actors}/>
            </section>
          
            <section className=" flex justify-center gap-10 my-10 font-medium text-xl ">
            <p>{Actors} </p>
            <p>{Awards} </p>
            <p>{Boxoffice} </p>
            <p> {Country} </p>
            <p>{Director} </p>
            <p>{Genre} </p>
            </section>
            
        </section>
        </>
    );
};