function Portfolio() {
  
    return (
      <>
        
        <section className="flex flex-col items-center custom-font w-full">
          <div className="items-center max-w-4xl p-10">
            <h1 className="text-4xl text-inner-shadow py-2 font-semibold">Portfolio</h1>
          </div>

          <div className="flex justify-center lg:w-3/5 md:w-9/12 sm:w-8/12 p-4">
            <div className="flex flex-col border-pink-200 border-2 rounded-2xl w-full bg-stone-900"> 

                <div className="flex pt-10 px-5 font-semibold text-lg pb-5">
                  <p>Projects
                  <br/>
                    1. Sputnik Storefront
                  </p>
                </div>

              <div className="flex flex-col lg:flex-row w-full pb-6"> 
               <div className="flex justify-center items-start font-medium text-md w-full lg:w-1/2 lg:pt-10 pb-2 px-8">
                  <img className="w-80 h-80 object-cover border-pink-200 border-2 rounded-2xl " src="/sputnik-des.jpg" alt="Pointer Lock controller" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10 pt-2">
                  <p>
                  <br/>
                  A fully-customized e-commerce website using Next.js, integrated with Shopify as a backend. The project focused on building a fast, seamless shopping experience with optimized performance and responsive design for both desktop and mobile users.
                    <br/>
                    
                    <br/>
                    Next.js, React, Tailwind, Shopify, Vercel
                    <br/>
                    <a href="https://www.sputnikwashingmachine.co.za" target="_blank">Project hosted here(Desktop Recommended)</a>
                  </p>  
                </div>
              </div>

              <div className="flex px-5 font-semibold text-lg pb-5">
                  <p>
                    2. NISI Storefront
                  </p>
                </div>

              <div className="flex flex-col lg:flex-row w-full pb-6"> 
              <div className="flex justify-center items-start font-medium text-md w-full lg:w-1/2 lg:pt-10 px-6">
                  <img className="w-80 h-80 object-cover border-pink-200 border-2 rounded-2xl " src="/NISI.jpg" alt="Nisi" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10 pt-2">
                  <p>
                  <br/>
                  A high-performance e-commerce website for NISI using Next.js, integrated with Shopify as the backend. Focused on SEO and optimization, ensuring fast load times and improved search engine visibility while providing a seamless, responsive experience across all devices.
                    <br/>
                    
                    <br />
                    
                    Next.js, React, Tailwind CSS, Shopify, Vercel, Figma
                    <br/>
                    <a href="https://commerce-main-sooty.vercel.app" target="_blank">Project hosted here(Desktop Recommended)</a>
                  </p>  
                </div>
              </div>

              <div className="flex px-5 font-semibold text-lg pb-5">
                  <p>
                    2. MDX editor
                  </p>
              </div>

              <div className="flex flex-col lg:flex-row w-full pb-6"> 
              <div className="flex justify-center items-start font-medium text-md w-full lg:w-1/2 lg:pt-10 px-6">
                  <img className="w-80 h-80 object-cover border-pink-200 border-2 rounded-2xl " src="/mdx.jpg" alt="MDX editor" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10 pt-2">
                  <p>
                  <br/>
                  An interactive MDX editor made in Next.js that allows users to create, edit, and delete blog posts. The app supports embedding React components and custom elements within content, and features both light and dark mode. Posts are dynamically updated and saved to a Supabase database.
                    <br/>
                    
                    <br />
                    <br/>
                    Next.js, MDX, React, Supabase
                    <br/>
                    <a href="https://blogposteditor.vercel.app" target="_blank">Project hosted here(Desktop Recommended)</a>
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