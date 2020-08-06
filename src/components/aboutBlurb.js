import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import {Link} from "gatsby"



const AboutBlurb = () => {
    const data = useStaticQuery(graphql`
    query {
      meImg: file(relativePath: { eq: "meImg.jpg" }) {
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
                    <p> Full-Stack Web developer with a background in Marketing (Digital Marketing) to develop new apps and user experiences on the web. Recently earned a Full Stack Development certificate from Trilogy at the University of California, Irvine with skills in Javascript, CSS, HTML, React.JS, and Sql. Extremely interested in trying to develop the next big social media application. With each project, I want to bring a new way to socialize on the Internet. I am excited to use the skills I learned as part of a team to create fresh social media applications and user experiences on the Web.</p>

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