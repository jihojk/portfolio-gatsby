import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
        <div className="inner-header">

        <div className="logo">
            <Link to="/"> Jiho John Kim </Link>
          
        </div>
        <div className="navigation">
            <nav>
                <Link to="/aboutBlurb"> About </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/footer"> Contact </Link>
              
            </nav> 

        </div>
        </div>

    </div>
  </header>
)



export default Header
