import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'



const layout = () => {
  return <>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Footer/>
  </>
};

export default layout