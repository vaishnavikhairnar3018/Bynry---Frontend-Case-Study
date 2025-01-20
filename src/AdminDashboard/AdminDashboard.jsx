import React from 'react'
import Navbar from '../components/Navbar'
import AdminPanel from '../components/AdminPanel'
import Footer from '../components/Footer'

function AdminDashboard() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        <AdminPanel />
    </div>
    <Footer />
    </>
  )
}

export default AdminDashboard
