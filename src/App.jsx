import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import {Movie} from "./pages/Movie";
import Applayout from "./components/Applayout";
import { ErrorPage } from "./pages/ErrorPage";
import { GetMoviesData } from "./api/GetApi";
const App=()=>{
  const router=createBrowserRouter([
     //makes the list of routes (URL to component map).
    //kun element map garda chai kun component lai render garney vanerw vanxas yesley.
    {
      path:"/",
      element:<Applayout/>,
      errorElement:<ErrorPage/>,
      children:[  
               {
          path:"/",
          element:<Home/>,
        },
         {
          path:"/about",
          element:<About/>,
        }, 
         {
          path:"/movie",
          element:<Movie/>,
          loader:GetMoviesData,
        },
         {
          path:"/contact",
          element:<Contact/>,
        },
      ],
    },
  ]);
  // console.log(router);
  ////it acts as a central controller. RouterProvider	Watches the URL and renders the correct component
       //runs the router and shows the correct component based on the URL.
  return(
      <>
      <RouterProvider router={router} />    
      </>
  );
   
};
export default App;


// import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Movie } from "./pages/Movie";
// import { Contact } from "./pages/Contact";

// const App=()=>{
//   //it creates the router that is path and the corresponding elements.
//   const router=createBrowserRouter(
//     createRoutesFromElements(
//       <>
//       <Route path="/" element={<Home/>} />
//       <Route path="/about" element={<About/>} />
//       <Route path="/movie" element={<Movie/>} />
//       <Route path="/contact" element={<Contact/>} />
//       </>
//     )
//   );

//   return(
//     <>
//         <RouterProvider router={router} />
//     </>
//   );
// };

// export default App;

