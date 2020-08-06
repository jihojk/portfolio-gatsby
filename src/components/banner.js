import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"



const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
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
                 <div className="main-text"> blah blah blah </div>
                 <div className="main-image"></div>
                 return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                
                </div>
            </div>
        </div> 

    )

       
    

}

export default Banner