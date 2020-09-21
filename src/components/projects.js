import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import {Link} from "gatsby"



const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
      treasureBox: file(relativePath: { eq: "treasurebox.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chefspick: file(relativePath: { eq: "chefspick.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      burgerbuilder: file(relativePath: { eq: "burgerbuilder.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
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
            <div className="project-1">
        
        <div className="project1-content"> 
            <div className="about1">

                <h3> The Chefs Pick </h3>
          

                <p>  An online recipe finder that lets users input multiple ingredients and look up recipes that utilize the ingredients. This application utilizes api  calls to generate recipes based on the user inputs </p>

                <a href="https://github.com/jihojk/Chefs-Pick-Recipe-Finder"> Visit Project</a>
             </div>

        <div className="project1-img">
            <Img fluid={data.chefspick.childImageSharp.fluid} />
        </div>
       





        </div>

      
    </div>
    <div className="project-1">
        
        <div className="project1-content"> 
            <div className="about1">

                <h3> Burger Builder </h3>
          

                <p> A digital menu application that lets users custom build a hamburger and place an order. The app is designed to have a interactive experience when ordering a hamburger. </p>

                <a href="https://github.com/jihojk/burger-builder"> Visit Project</a>
             </div>

        <div className="project1-img">
            <Img fluid={data.burgerbuilder.childImageSharp.fluid} />
        </div>
       





        </div>

      
    </div>
        </div> 
        </div>

    )
}

export default Projects