import React from "react"

// Socials
import linkedIn from "../images/linkedin.svg"
import github from "../images/github.png"


const Footer = () => {
  return (
    <footer>
      
      <div className="footer">
        <div className="inner">
          <span>© 2020 Jiho John Kim</span>
          <div className="socials">
            <a href="https://www.linkedin.com/in/jihojk1994/">
              <img className="social-icon" src={linkedIn} alt="linkedIn" />
            </a>
            <a href="https://github.com/jihojk">
              <img className="social-icon" src={github} alt="Github" />
            </a>
          </div>
          <span>jihojk@uci.edu</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer