import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaSignInAlt, FaQuestion, FaUser} from 'react-icons/fa'
import "../index.css"

function Navbar_Admin() {
  return (
    <div className='px-2 bg-info navstyle' >
         <header className='header'>
        <div className="logo">
            {/* <img src = "../../public/svg_img/aicgusec_logo.png"></img> */}
            <Link to='/'><Link to='/'><span className='bg-light h3'>AICGUSEC</span></Link></Link>
        </div>
        <ul>
        <li>
          <Link to='/admin'>
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to='/faq'>
            <FaQuestion/>Faq's
          </Link>
        </li>
        </ul>
      </header>
    </div>

    
    

 )

      

}

export default Navbar_Admin;
