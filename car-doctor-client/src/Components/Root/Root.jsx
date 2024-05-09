import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

export default function Root() {
  return (
    <div className='max-w-6xl mx-auto'>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
