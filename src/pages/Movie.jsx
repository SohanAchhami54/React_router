import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";
// import {Card} from "../components/UI/Card";

export const Movie=()=>{
    // const [count,setCount]=useState([]);
    const movieData=useLoaderData();
    console.log(movieData);
   
    const result= movieData.Search.map((curElem)=>{
             return <Card key={curElem.imdbID} curElem={curElem} />
            });
    return(
        <>
        <h1 className="text-3xl text-red-700 font-bold text-center">Movie</h1>
          <ul className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 p-4 overflow-y-scroll max-h-[80vh] ">
         {result}
         </ul>
        </>
    );
};