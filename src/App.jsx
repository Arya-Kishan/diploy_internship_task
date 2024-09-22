import React, { lazy, Suspense } from 'react'
import Navbar from './components/Landing/Navbar'
import Loader from './components/Loader'
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
    </div>
  )
}

export default App