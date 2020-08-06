import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import {Link} from "gatsby"



const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
      treasureBox: file(relativePath: { eq: "treasurebox.png" }) {
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
                <div className="project-title">
                 Projects
                </div>
               
                <div className="project-1">
        
                <div className="project1-content"> 
                    <div className="about1">

                        <h3> Treasure Box </h3>
                  

                        <p> An e-commerce app with social media like features built using the  MERN stack. I worked on most of the back-end code, including implementing  the user signup and login, image uploads, user profile pages, like and comment feature on posts, and personalized timelines based on users you follow. </p>

                        <a href="https://project-3-treasurebox.herokuapp.com/signin"> Visit Project</a>
                     </div>

                <div className="project1-img">
                    <Img fluid={data.treasureBox.childImageSharp.fluid} />
                </div>

               





                </div>
    
              
            </div>
        </div> 
        </div>

    )
}

export default Projects