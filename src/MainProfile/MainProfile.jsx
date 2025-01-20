import React from 'react'
import Navbar from '../components/Navbar'
import ProfileDetails from '../components/ProfileDetails'
import Footer from '../components/Footer'

function MainProfile() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <ProfileDetails />
    </div>
    <Footer />
    </>
  )
}

export default MainProfile
