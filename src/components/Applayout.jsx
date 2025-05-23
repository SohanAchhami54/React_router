import {Header} from "./Header";
import {Footer} from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
const Applayout=()=>{   
  const navigation=useNavigation();
  console.log(navigation);
  //navigation ko belama k hudaixa teslai track garney kam garxa yesley.
  if(navigation.state==="loading") return <h1 className="text-center text-6xl">loading..</h1>


   

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