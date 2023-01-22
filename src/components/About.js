import React from "react";




function About()  {
    return (
        <>
       <body className="aboutbody">
           <section class='abouticons'>
       <div>
        <ul className="flex-row-about">
    
            <a className="iconstyle" href="https://www.facebook.com/tilebarespresso/" target='blank'>
                <lu>
                <i class="fa-brands fa-square-facebook"></i>
              </lu>
            </a>
            
          <a className="iconstyle" href="https://www.instagram.com/tilebarespresso/?hl=en" target='blank'>
              <lu>
              <i class="fa-brands fa-instagram fa-2xl"></i>
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