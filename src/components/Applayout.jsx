import {Header} from "./Header";
import {Footer} from "./Footer";
import { Outlet } from "react-router-dom";
const Applayout=()=>{   
    return(
        <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    );
};
export default Applayout;
//this is parent container.