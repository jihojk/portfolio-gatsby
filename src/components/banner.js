import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"



const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      computerImg: file(relativePath: { eq: "computer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
    
                 <div className="main-text"> Hi, Im John </div>
                 
                 <div className="main-image">
                  <Img fluid={data.computerImg.childImageSharp.fluid} />
                 </div>
                 <div className="side-text"> I am a full-stack developer</div>

                
                
                </div>
                <div className="scroll">
                    <span> Scroll Down</span>
                </div>
            </div>
        </div> 

    )

       
    

}

export default Banner