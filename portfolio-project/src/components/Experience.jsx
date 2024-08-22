function Experience() {
  
    return (
      <>
        <section className="flex flex-col items-center custom-font w-full">

          <div className="items-center max-w-4xl p-10">
            <h1 className="text-3xl text-inner-shadow py-2 font-semibold">Experience</h1>
          </div>
          <div className="flex justify-center lg:w-3/5 md:w-9/12 sm:w-8/12 p-4">
            <div className="flex flex-col border-pink-200 border-2 rounded-2xl w-full bg-stone-900"> 
              <div className="flex p-10 font-semibold text-md">
                <p>Junior Software Engineer at Webill |June-2023 July-2024</p>
              </div>
              <div className="flex px-10 font-medium text-md ">
                <p>Key Responsibilities:
                  <br/>
                  - Front-End Development: Built responsive and engaging user interfaces.
                  <br/>
                  - Back-End Tasks: Utilized Ecto and Elixir for database management and backend functionality.
                  <br/>
                  - Phoenix LiveView: Implemented real-time features for a dynamic user experience.</p>
              </div>
              <div className="flex px-10 font-medium text-md pb-6">
              <br/>
              Achievements:
              <br/>
              - Enhanced application performance and user experience through effective front-end and back-end integration.
              <br/>
              - Improved system efficiency by optimizing queries and backend processes.
              <br/>
              <br/>

              Technical Skills:
              <br/>
              - Languages & Frameworks: Elixir, HTML, CSS, tailwind
              <br/>
              - Tools & Technologies: Ecto, Phoenix LiveView, Git, Docker
              <br/>
              - Development Practices: Agile methodologies, Continuous Integration/Continuous Deployment (CI/CD), Test-Driven Development (TDD)
              <br/>
              <br/>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Experience