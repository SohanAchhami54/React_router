export const GetMoviesData=async()=>{

    try{
       const response= await fetch("https://www.omdbapi.com/?s=John%20Wick&apikey=96129abc");
       const jr=response.json();
    //    console.log(jr);
       return jr;
    }catch(error){
        console.log(error);
    }
    // return(
    //     <>
              
    //     </>
    // );
};