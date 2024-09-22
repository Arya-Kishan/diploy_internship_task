import React, { lazy, Suspense, useState } from 'react'
import Navbar from './components/Landing/Navbar'
import Loader from './components/Loader'
import thumbIcon from './assets/icons/thumbIcon.svg'
const Front = lazy(() => import("./components/Landing/Front"))
const Features = lazy(() => import("./components/Landing/Features"))
const HowItWorks = lazy(() => import("./components/Landing/HowItWorks"))
const Connect = lazy(() => import("./components/Landing/Connect"))
const SocialProof = lazy(() => import("./components/Landing/SocialProof"))
const Financials = lazy(() => import("./components/Landing/Financials"))
const Footer = lazy(() => import("./components/Landing/Footer"))


const App = () => {

  return (
    <div className='w-full min-h-dvh h-[100vh]'>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Front />
        <Features />
        <HowItWorks />
        <Connect />
        <SocialProof />
        <Financials />
        <Footer />
      </Suspense>
      <img className='w-[40px] h-[40px] fixed bottom-8 left-4 bg-white shadow-md rounded-full p-2' src={thumbIcon} alt="" srcset="" />
    </div>
  )
}

export default App