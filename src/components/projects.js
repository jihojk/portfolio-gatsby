import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import {Link} from "gatsby"



const Projects = () => {
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
        <div className="projects">
            <div className="container">
    
              
            </div>
        </div> 

    )

       
    

}

export default Projects