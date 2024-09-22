import React from 'react'
import Front from '../components/Landing/Front'
import Navbar from '../components/Landing/Navbar'
import HowItWorks from '../components/Landing/HowItWorks'
import Connect from '../components/Landing/Connect'
import Footer from '../components/Landing/Footer'
import Financials from '../components/Landing/Financials'
import Features from '../components/Landing/Features'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Front />
            <Features />
            <HowItWorks />
            <Connect />
            <Financials />
            <Footer />
        </div>
    )
}

export default HomePage