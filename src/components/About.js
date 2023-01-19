import React from "react";




function About()  {
    return (
        <>
       <body className="aboutbody">
           <section class='abouticons'>
       <div>
        <ul className="flex-row-about">
    
            <a className="iconstyle" href="https://github.com/PeterwMcClelland" target='blank'>
                <lu>
                <i class="fa-brands fa-github-square fa-2xl"></i>
              </lu>
            </a>
            
          <a className="iconstyle" href="https://www.linkedin.com/in/peterwmcclelland/" target='blank'>
              <lu>
              <i class="fa-brands fa-linkedin fa-2xl"></i>
              </lu>
          </a>
          <lu>
          <a className="iconstyle" href="mailto:tilebarespresso@gmail.com"><i class="fa-regular fa-envelope fa-2xl"></i></a>
          </lu>
        
        </ul>
      </div>
      </section>
       </body>

        </>
    )
}

export default About;