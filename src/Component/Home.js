import React,{Fragment} from 'react'
import "../CSS/Home.css"

const Home = () => {
  return (
    <Fragment>
    <section className="home" id = "home">

        <div className="home-content">
          <h3>Hello!</h3>
          <h2>I Am Willaimson</h2>
          <h4>Creative Art And Designer</h4>
        </div>
        
        <div class="social">
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-pinterest"></i></a>
        </div>

        <div className="about-btn">
        <a href="#contact"> Hire Me </a>
        </div>

    </section>

    </Fragment>
  )
}

export default Home