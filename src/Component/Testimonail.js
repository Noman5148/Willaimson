import React,{Fragment,useEffect} from 'react'
import person from "../Images/ian-dooley-d1UPkiFd04A-unsplash.jpg"
import "../CSS/Testimonail.css"
import Aos from 'aos'
import "aos/dist/aos.css"
 
const Testimonail = () => {
  useEffect(()=>{

    Aos.init({ duration: 2000, once:true, easing:"ease"});
 
  }, [])
  return (
    <Fragment>

    <section className="test">

    <div data-aos = "zoom-in" className='test-tittle'>
		<h2>What <span> Client Say </span> </h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, temporibus consequuntur dicta ullam illo facere.</p>
    <div className="top-line"></div>
    <div className="middle-line"></div>
    <div className="bottom-line"></div>
  </div>

    <div className="test-row">

    <div data-aos = "fade-right" class="single-testi">
      <div className="client-data">
        <div class="testi-img"> 
            <img src={person} alt="person"/> 
         </div>
         <div className="client-name">
            <h2>David Warner</h2> 
            <h3>CEO, APPLE</h3>
         </div>
      </div>  
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum modi quod, nulla animi ab repellendus officia iure. Ratione, deleniti omnis!</p>
    </div>

    <div data-aos = "fade-up" class="single-testi">
      <div className="client-data">
        <div class="testi-img"> 
            <img src={person} alt="person"/> 
         </div>
         <div className="client-name">
            <h2>David Miller</h2> 
            <h3>CEO, APPLE</h3>
         </div>
      </div>  
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum modi quod, nulla animi ab repellendus officia iure. Ratione, deleniti omnis!</p>
    </div>
    
    <div data-aos = "fade-left" class="single-testi">
      <div className="client-data">
        <div class="testi-img"> 
            <img src={person} alt="person"/> 
         </div>
         <div className="client-name">
            <h2>Robert</h2> 
            <h3>CEO, APPLE</h3>
         </div>
      </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum modi quod, nulla animi ab repellendus officia iure. Ratione, deleniti omnis!</p>
    </div>    </div>
      
    </section>
   
    </Fragment>
  )
}

export default Testimonail