import React from 'react'
import { Link, useParams } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
        <Link to='/search' className='nav__link'>Browse</Link>
    
    </div>
  )
}

export default Nav