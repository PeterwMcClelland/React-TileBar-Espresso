import React from "react";




function About()  {
    return (
        <>
       <body className="aboutbody">
           <section class='abouticons'>
       <div className="col2">
       <div className="col1">
          TileBar Espresso is an espresso catering service started in Portland, OR in 2016. Our goal is to provide professional 
          grade espresso to your event or business. Our stylish, compact espresso cart makes it easy to set up quickly and start serving. 
          Meeting your needs is our top priority. We will work with you to provide the best espresso experience for your event.
          </div>
        <ul className="flex-row-about">
    
            <a className="iconstyle" href="https://www.facebook.com/tilebarespresso/" target='blank'>
                <lu>
                <i class="fa-brands fa-square-facebook fa-2xl"></i>
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