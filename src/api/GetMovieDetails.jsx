export const GetMoviesDetails=async({params})=>{
    console.log(params);
    const id=params.movieID;

    try{
       //const response= await fetch("https://www.omdbapi.com/?s=John%20Wick&apikey=96129abc");
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
       const jr=response.json();
    //    console.log(jr);
       return jr;
    }catch(error){
        console.log(error);
    }
 
};