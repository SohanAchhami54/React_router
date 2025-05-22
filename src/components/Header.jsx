 import  {NavLink} from "react-router-dom";
 export const Header=()=>{
    return(
        <div className="  bg-red-700 min-h-15  text-3xl font-bold py-4 px-4 text-zinc-950 ">
        <section className="flex justify-around  items-center">
            <div className="w-14">
                <img  src="https://i.pinimg.com/736x/4f/3b/b5/4f3bb5a4e2bb390573f4c0118e9783d7.jpg"
                className="rounded-full" alt="" />
            </div>
          <div className="flex gap-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="movie">Movie</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
        </section>
        </div>
    )
}

//import { NavLink } from "react-router-dom";

// export const Header = () => {
//   return (
//     <div className="bg-red-700 min-h-15 text-3xl font-bold text-white px-4 py-3">
//       <section className="flex justify-between items-center">
//         <div className="w-14">
//           <img
//             src="https://i.pinimg.com/736x/4f/3b/b5/4f3bb5a4e2bb390573f4c0118e9783d7.jpg"
//             alt="logo"
//             className="rounded-full"
//           />
//         </div>

//         <div className="flex gap-10">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/movie">Movie</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </div>
//       </section>
//     </div>
//   );
// };
