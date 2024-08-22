import { BrowserRouter } from "react-router-dom";
import Experience from "./components/Experience";

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero";
import Links from "./components/Links";


function App () {

  return (
    <>
      <BrowserRouter>
        <main className="w-screen bg_color">
          <Links/>
          <Hero/>
          <div className="flex justify-center"><div className="flex justify-self-center items-center border-b-2 w-1/2"></div></div>
          <Experience/>
          <Portfolio/>
          <Contact/>
        </main>
        </BrowserRouter>
    </>
   );

}


export default App;