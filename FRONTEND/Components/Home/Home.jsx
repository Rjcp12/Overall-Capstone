import React from 'react'

import NavBar from './NavBar'
import Body from './Body'
import Footer from './Footer'

function Home() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default Home