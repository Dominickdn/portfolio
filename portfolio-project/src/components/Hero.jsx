import Computer from './canvas_models/Computer';


const Hero = () => {

//   const handleDownload = () => {
//     const url = require("../assets/CV.pdf");
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'cv.pdf');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
return (
  <>
    <section className="lg:flex flex-col w-full custom-font hidden">
          <div className="flex-1 flex items-center justify-center">
              <div className="items-start max-w-4xl pr-32">
                <h1 className="text-6xl text-inner-shadow py-2">Hi, I'm</h1>
                <h1 className="text-6xl text-inner-shadow py-2">Dominick.</h1>
              </div>
            <div className="text-start h-96 pl-32">
              <Computer/>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center pb-10">
            <div className="text-start max-w-4xl text-xl">
              <p>I’m a self taught developer from South Africa. I’m passionate about coding and making stuff on my computer.</p>
            </div>
          </div>
         
          <div className="flex-1 flex items-center justify-center p-10">
            <div className="text-start max-w-4xl text-xl p-4">
             <img src='/elixir.svg'/>
            </div>
            <div className="text-start max-w-4xl text-xl p-4">
             <img src='/phoenix.svg'/>
            </div>
            <div className="text-start max-w-4xl text-xl p-4">
             <img src='/next.svg'/>
            </div>
            <div className="text-start max-w-4xl text-xl p-4">
             <img src='/js.svg'/>
            </div>
          </div> 
      </section>

    <section className="lg:hidden md:flex-row w-full custom-font">
        <div className="flex items-center justify-start pt-5 px-10">
                <div className="items-start max-w-4xl">
                  <h1 className="text-4xl md:text-5xl text-inner-shadow py-2">Hi, I'm</h1>
                  <h1 className="text-4xl md:text-5xl text-inner-shadow py-2">Dominick.</h1>
                </div>
        </div>
        <div className="flex h-80 w-full items-center p-5">
            <Computer/>
        </div>
        <div className=" flex items-center justify-center p-8 w-full pb-10">
              <div className="text-start text-lg">
                <p>I’m a self taught developer from South Africa. I’m passionate about coding and making stuff on my computer.</p>
              </div>
        </div>

      <div className="flex-1 flex items-center justify-center p-10">
            <div className="text-start max-w-4xl text-xl p-4">
             <img src='/elixir.svg'/>
            </div>
            <div className="text-start max-w-4xl text-xl p-4">
             <img src='/phoenix.svg'/>
            </div>
            <div className="text-start max-w-4xl text-xl p-4">
             <img src='/next.svg'/>
            </div>
            <div className="text-start max-w-4xl text-xl p-4">
             <img src='/js.svg'/>
            </div>
      </div>
    </section>
  </>
);
}

export default Hero