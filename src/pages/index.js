import React from "react"
import "../styles/styles.scss"

// importing components

import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>

      <Header />
      <Banner />
      <AboutBlurb />
      <Projects />
      <Footer />

  </div>

)

export default IndexPage
