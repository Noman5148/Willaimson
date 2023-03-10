import React,{Fragment,useState,useEffect} from 'react'
import Data from "./BlogData"
import "../CSS/Blog.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const Blog = () => {
  useEffect(()=>{

    Aos.init({ duration: 2000, once:true, easing:"ease"});
 
  }, [])
  const[items, setItems] = useState(Data)
  return (
    
    <Fragment>

    <section className='blog' id='blog'>

    <div data-aos = "zoom-in" className='blog-tittle'> 
				<h2>Latest Blog Post</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, temporibus consequuntur dicta ullam illo facere.</p>
        <div className="top-line"></div>
        <div className="middle-line"></div>
        <div className="bottom-line"></div>
    </div> 

    <div className="blog-row">

    {
      items.map((elem)=>{

        return(
          <div className="blog-col" key={elem.id}>
      <div className="blog-img">
      <img className='imge' src={elem.image} alt="" />
        <div className="img-tag"> <h3 class="s-text">{elem.img_tag}</h3> </div>
      </div>
      <div class="post-content">
      <p> <span>Date:</span>  <i class="fa fa-clock-o"></i> {elem.date} </p>
        <div class="post-title">
            <a href="single.html"><h4>{elem.heading}</h4></a>
        </div>
        <div class="post-text">
          <p>{elem.paragrapgh}</p>
        </div>
        <a href="single.html" class="post-more">Read more <i class="fa fa-angle-double-right"></i></a>
    </div>
    </div>
        )

      })
    }

    </div>

    </section>
    
    </Fragment>
  )
}

export default Blog