import React from 'react'

import Footer from './componants/Footer/Footer'
import {Outlet} from 'react-router-dom'
import Header from './componants/Header/Header'

function Layout() {
  return (
    <>
   <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout