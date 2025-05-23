import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage=()=>{
      const navigate=useNavigate();
      console.log(navigate);
      const handleClick=()=>{
         navigate(-1);
      }
    return(
        <>
      <section className="h-lvh flex justify-center items-center bg-amber-600 text-3xl">
          <h1> 404 Error Occurs.</h1>
        {/* <NavLink to="/" className="border-2 rounded-2xl" >Go to Home page.</NavLink> */}
        <button className="border-2 rounded" onClick={handleClick}>Go back</button>
      </section>
       
        </>
    );
};