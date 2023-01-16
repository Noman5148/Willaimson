import React,{Fragment,useEffect} from 'react'
import person2 from "../Images/amir-esrafili-CszJIif4mJg-unsplash-removebg-preview.png"
import '../CSS/About.css' 
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {

  useEffect(()=>{
    Aos.init({ duration: 2000, once:true, easing:"ease" })
  })
  return (
    <Fragment>

    <section className="about" id='about'>

    <div className="about-row">

    <div data-aos = "fade-right" className="about-column">
        <div className="about-pic">
            <img src={person2} alt="Person" />
        </div>
    </div>

    <div data-aos = "fade-left" className="about-column">
        <div className="about-text">
            <div className="about-tittle">
            <h2 className='intro'>Let’S <br /> Introduce About <br /> Myself</h2>
            <h2 className='name'>Hi, My Name Is  <span> Willaimson </span></h2>
            </div>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus officia natus
            adipisci debitis deleniti est odio, distinctio fugiat esse quaerat
            excepturi aut deserunt ducimus corrupti veritatis blanditiis praesentium 
            labore nobis fugit non tenetur fuga repellat. Delectus labore id quos magnam.
            labore nobis fugit non tenetur fuga repellat. Delectus labore id quos magnam.
            </p>
            <a href="#" class="learn-btn">Download CV</a>
        </div>
    </div>
        
    </div>

    </section> 

    </Fragment>
  )
}

export default About