import React,{Fragment,useEffect} from 'react'
import "../CSS/Resume.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const Resume = () => {
  useEffect(()=>{

    Aos.init({ duration: 2000, once:true, easing:"ease"});
 
  }, [])
  return (
    <Fragment>
        <section className='resume'>

        <div data-aos = "zoom-in" className="res-tittle">
          <h2>My Resume</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, temporibus consequuntur dicta ullam illo facere.</p>
		     <div className="top-line"></div>
         <div className="middle-line"></div>
         <div className="bottom-line"></div>
        </div>

        <div className="resume-row">

        <div data-aos = "fade-right" className="res-col">
        <div className="timeline">
            <ul>

              <li>
                <div className="content">
                <span className="date">2017 - 2023</span>
                <h4>Freelancer</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </li>
              
              <li>
                <div className="content">
                <span className="date">2018 - 2023</span>
                <h4>Developer</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div data-aos = "fade-left" className="res-col">
        <div className="timeline">
            <ul>
              
              <li>
                <div className="content">
                <span className="date">2015 - 2023</span>
                <h4>Designer</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </li>

              <li>
                <div className="content">
                <span className="date">2014 - 2023</span>
                <h4>Seo Expert</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        </div>

        </section>
    </Fragment>
  )
}

export default Resume