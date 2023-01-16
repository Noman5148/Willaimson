import React,{Fragment,useState} from 'react'
import '../CSS/Navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [navbar, setNavbar] = useState(false)

   const changeBackground = ()=>{
   if(window.scrollY >= 150){
    setNavbar(true)
   }else{
    setNavbar(false)
   }
  }
  window.addEventListener("scroll",changeBackground)

  return (
    <Fragment>

    <nav className = { navbar ? "navbar active":"navbar"}>

    <h1>Willaimson</h1>

    <div className={ showMenu ? 'menu mobile-menu': 'menu' }>
        <ul>
          <i class="fa-solid fa-xmark" onClick={() => setShowMenu(!showMenu)}></i>
            <li><a href="#home"> Home </a></li>
            <li><a href="#about"> About </a></li>  
            <li><a href="#services"> Services  </a></li>
            <li><a href="#portfolio"> Portfolio </a></li> 
            <li><a href="#blog">Blog</a></li>                           
            <li><a href="#contact"> Contact </a></li>
        </ul>
    </div>

    <div className="contact-btn">
    <a href="#contact"> Conatct Me </a>
    </div>

    <i class="fa-solid fa-bars" onClick={() => setShowMenu(!showMenu)}></i>
    
    </nav>

    </Fragment>
  )
}

export default Navbar