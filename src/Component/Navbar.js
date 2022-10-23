import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
    const [menuiconstate,setMenuiconstate]=useState(false)
  return (
   <>
   <div className="navbarContainer">
    <div className="navbarMenuiconactive" onClick={()=>setMenuiconstate(!menuiconstate)}>{menuiconstate?<CloseIcon/>:<MenuIcon/>}</div>
    <div className="navbarLeft">Bengali Coder</div>

    <div className={menuiconstate?"navbarRightactive":"navbarRight"}>
        <ul className="navbarMenulist">
            <li className="navbarListitems"><Link className='links' to='/'onClick={()=>setMenuiconstate(false)}> Home</Link></li>
            <li className="navbarListitems"><Link className='links' to='/courses'onClick={()=>setMenuiconstate(false)}>Course </Link></li>
            <li className="navbarListitems"><Link className='links' to='/about' onClick={()=>setMenuiconstate(false)}>About</Link></li>
            <li className="navbarListitems"><Link className='links' to='#'onClick={()=>setMenuiconstate(false)}>Conatct</Link></li>
        </ul>
        <div className="navbarProfileandlogin">
            <div className="navbarLoginbutton">Login/Register</div>
        </div>
    </div>
   </div>
   </>
  )
}