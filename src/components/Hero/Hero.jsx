import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 769)
  }, [])

  return { isMobile }
}

const Header = () => {
  const { isMobile } = useResponsive()

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            Hello, this is
            <br />
            <span className="text-color-main">.gigigimay</span>
          </h1>
        </Fade>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={1000} distance="20px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                CLICK!
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  )
}

export default Header
