import React from 'react'
import Link from 'gatsby-link'

import TextLogo from '../images/text-logo.svg'
import CircleLogo from '../images/image-logo.svg'

const IndexPage = () => (
  <div className="home">
    
    <div className="content">
      <div className="header">
        <img className="imgLogo" src={CircleLogo} alt="Logo" />
        <img className="txtLogo" src={TextLogo} alt="Logo" />
      </div>
    
      <span className="slogan">COINTOWER HAS MOVED TO <a href="https://cointower.io">COINTOWER.IO</a></span>
    </div>
  </div>
)

export default IndexPage
