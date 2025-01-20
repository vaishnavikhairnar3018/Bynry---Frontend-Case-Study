import React from 'react'
import Heropng from "/Heropng.png"

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-6'>
        <h1 className='text-4xl font-bold text-[#112D4E]'>Discover and connect with geospatial developers worldwide on <span className='text-[#3F72AF]'>GeoDevProfiles!!!</span></h1>
        <p className='text-xl text-gray-700'>
        Whether you're seeking expertise in GIS, remote sensing, or spatial data analysis, GeoDevProfiles brings the global geospatial development community to your fingertips.
        </p>
        </div>
        </div>
        <div className='flex order-1 w-full md:w-1/2'>
        <img src={Heropng} className='w-70 h-70' alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner
