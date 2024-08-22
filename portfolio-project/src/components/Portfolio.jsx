function Portfolio() {
  
    return (
      <>
        
        <section className="flex flex-col items-center custom-font w-full">
          <div className="items-center max-w-4xl p-10">
            <h1 className="text-4xl text-inner-shadow py-2 font-semibold">Portfolio</h1>
          </div>

          <div className="flex justify-center lg:w-3/5 md:w-9/12 sm:w-8/12 p-4">
            <div className="flex flex-col border-pink-200 border-2 rounded-2xl w-full bg-stone-900"> 
              <div className="flex p-10 font-semibold text-lg">
                <p>Online storefront</p>
              </div>
              <div className="flex flex-col lg:flex-row"> 
                <div className="flex justify-center items-start font-medium text-lg w-full lg:w-1/2 lg:pt-10 md: sm:2">
                  <img className="border-pink-200 border-2 rounded-2xl  w-80 h-80 object-cover" src="/sputnik-des.jpg" alt="Sputnik Design" /> 
                </div>
                <div className="flex-1 flex flex-col justify-center p-10 text-md">
                  <p>Key Features:
                    <br />
                    - Next.js: Utilized for fast performance and SEO-friendly pages.
                    <br />
                    - Shopify Integration: Manages products, orders, and payments through Shopify’s API.
                    <br />
                    - Responsive Design: Optimized for all devices with a mobile-first approach.
                    <br />
                    - User-Friendly: Easy navigation, detailed product pages, and a smooth checkout process.
                  </p>
                </div>

              </div>
              <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10">
                  <p>
                    Development Highlights:
                    <br />
                    - Server-Side Rendering: Ensures quick loading times and better SEO.
                    <br />
                    - Custom Components: Tailored features for a seamless shopping experience.
                    <br />
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10">
                  <p>
                    Overview:
                    <br/>
                    Sputnik Wonderwash is an online store built with Next.js and integrated with the Shopify API. 
                    It provides an efficient and engaging shopping experience for premium cleaning products.
                    <br />
                  </p>
                </div>

                <div className="flex pt-10 p-5 font-semibold text-lg">
                  <p>Learning Exercises
                  <br/>
                    1. Three.js Scene with Pointer Lock Controllers
                  </p>
                </div>

              <div className="flex flex-col lg:flex-row w-full"> 
                <div className="flex justify-center items-start font-medium text-md w-full lg:w-1/2 lg:pt-10 md: sm:2">
                  <img className="w-80 h-80 object-cover border-pink-200 border-2 rounded-2xl " src="/pointer.jpg" alt="Pointer Lock controller" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10 pt-2">
                  <p>
                  - Description: 
                  created an interactive 3D scene using Three.js, featuring pointer lock controllers for an immersive scene.
                    <br/>
                    <br/>
                  - Key Learnings:
                    Mastered Three.js for 3D graphics and scene creation.
                    Implemented pointer lock controllers for enhanced user interaction.
                    Applied texture mapping.
                    
                    <br />
                    <a href="https://sage-sprinkles-38c9cc.netlify.app" target="_blank">Project hosted here(Desktop Recommended)</a>
                  </p>
                  
                </div>
                
                
                
              </div>
              <div className="flex pt-10 p-5 font-semibold text-lg">
                  <p>
                  <br/>
                  2. 2D Plane Game made with Vanilla JavaScript.
                  </p>
                </div>
              <div className="flex flex-col lg:flex-row"> 
              
              <div className="flex justify-center items-start font-medium text-md w-full lg:w-1/2 lg:pt-10 md: sm:2 pb-10">
                  <img className="w-80 h-80 object-cover border-pink-200 border-2 rounded-2xl " src="/plane.jpg" alt="Pointer Lock controller" /> 
              </div>
              
              <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10 pt-2">
                  <p>
                - Description: A simple 2D game created to understand JavaScript fundamentals and game mechanics.
                  Key Learnings: JavaScript basics, game logic, and programming fundamentals.

                    <br/>
                    <br/>
                  - Key Learnings: JavaScript basics, game logic, and programming fundamentals.

                    
                    <br />
                    <a href="https://singular-basbousa-d01561.netlify.app" target="_blank">Project hosted here(Desktop Recommended)</a>
                  </p>
                  
                </div>
                </div>
              
                
            </div>
          </div>
        </section>
      </>
    
    )
  }
  
  export default Portfolio