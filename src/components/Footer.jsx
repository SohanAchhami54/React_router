// export const Footer=()=>{
//     return(
//         <footer>
//         <section className="grid grid-cols-4 justify-around">
//           <section>
//             <div>
//                 <p>Name</p>
//                 <p>Name</p>
//                 <p>Name</p>
//                 <p>Name</p>
//             </div>
//           </section>
//           <section>
//              <div>
//                 <p>Name</p>
//                 <p>Name</p>
//                 <p>Name</p>
//                 <p>Name</p>
//             </div>
//           </section>
//           <section>
//              <div>
//                 <p>Name</p>
//                 <p>Name</p>
//                 <p>Name</p>
//                 <p>Name</p>
//             </div>
//           </section>
//           <section>
//              <div>
//                 <p>Name</p>
//                 <p>Name</p>
//                 <p>Name</p>
//                 <p>Name</p>
//             </div>
//           </section>
//         </section>
//         </footer>
//     );
// };

import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-xl py-5 relative bottom-0">
      <section className="max-w-6xl mx-auto grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4  text-center">
      <NavLink to="/">
      Home
      </NavLink>

         <NavLink to="/about">
      About
      </NavLink>

         <NavLink to="/movie">
      Movie
      </NavLink>

        <NavLink to="/contact">
      Contact
      </NavLink>
      
        {/* <section>
            <h1>Contact</h1>
        </section>
         <section>
            <h1>Contact</h1>
        </section>
         <section>
            <h1>Contact</h1>
        </section>
         */}
      </section>
    </footer>
  );
};
