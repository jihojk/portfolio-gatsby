import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import {Link} from "gatsby"



const AboutBlurb = () => {
    const data = useStaticQuery(graphql`
    query {
      meImg: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                  <div className="content">
                    <h3> About Me </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="btn-row">

                      <Link  to="/projects"> My Projects </Link>
                    </div>

                  </div>
                  <div className="images">
                    <div className="profile-image"> 
                    <Img fluid={data.meImg.childImageSharp.fluid} />
                    </div>
                  </div>
                
                </div>
              
            </div>
        </div> 

    )

       
    

}

export default AboutBlurb