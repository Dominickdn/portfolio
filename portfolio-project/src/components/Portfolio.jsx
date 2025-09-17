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
                    1. The Tech Centre
                  </p>
                </div>

              <div className="flex flex-col lg:flex-row w-full pb-6"> 
               <div className="flex justify-center items-start font-medium text-md w-full lg:w-1/2 lg:pt-10 pb-2 px-8">
                  <img className="w-80 h-80 object-cover border-pink-200 border-2 rounded-2xl " src="/the-tech-centre.png" alt="TheTechCentre" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10 pt-2">
                  <p>
                  <br/>
                  A clean and responsive 3-page website built with Next.js and styled using Tailwind CSS. It includes a Home, Services, and Contact page, with a fully functional form powered by EmailJS and protected by reCAPTCHA.

                  The site is mobile-friendly, SEO-optimized, and designed with a focus on simplicity, accessibility, and performance. 
                    <br/>
                    
                    <br/>
                    Next.js, React, Tailwind CSS, EmailJS, reCAPTCHA, Vercel
                    <br/>
                    <a href="https://www.thetechcentre.co.za" target="_blank">Project hosted here</a>
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
                    <a href="https://commerce-main-sooty.vercel.app" target="_blank">Project hosted here</a>
                  </p>  
                </div>
              </div>

              <div className="flex px-5 font-semibold text-lg pb-5">
                  <p>
                    2. OCR Invoice Processor
                  </p>
              </div>

              <div className="flex flex-col lg:flex-row w-full pb-6"> 
              <div className="flex justify-center items-start font-medium text-md w-full lg:w-1/2 lg:pt-10 px-6">
                  <img className="w-80 h-80 object-cover border-pink-200 border-2 rounded-2xl " src="/invoiceProcessor.png" alt="InvoiceProcessor" />
                </div>
                <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10 pt-2">
                  <p>
                  <br/>
                  A local, containerized invoice processing system built with Docker Compose. It allows users to upload invoice files through a simple Flask web interface, runs OCR with Tesseract to extract text, and parses key details (like vendor, amount, and invoice number) into a PostgreSQL database.

                  Files are stored using a local MinIO S3 bucket, and services communicate via RabbitMQ, with processing status tracked in Redis. While designed to run locally for testing and demo purposes, the project shows how microservice concepts can be applied in a lightweight, developer-friendly setup.
                    <br/>
                    
                    <br />
                    <br/>
                    Python, Flask, Tesseract OCR, PostgreSQL, MinIO, RabbitMQ, Redis, Docker Compose
                    <br/>
                    <a href="https://github.com/Dominickdn/invoice_processor" target="_blank">Code found here</a>
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