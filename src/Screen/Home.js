import React from 'react'
import Fifthsec from '../components/Fifthsec'
import Footer from '../components/Footer'
import Forthsec from '../components/Forthsec'
import Herosection from '../components/Herosection'
import Secondsection from '../components/Secondsection'

function Home() {
  return (
    <div>
      <Herosection />
      <Secondsection />
      


      <Fifthsec />
      {/* <Forthsec /> */}
      <Footer />
    </div>
  )
}

export default Home