import React from 'react'
import Lottie from 'lottie-react'
import shirt from '../assets/lottieImages/shirt.json'

const LottieImage1 = () => {

    return (
        <Lottie style={{ maxWidth: "700px" }} animationData={shirt} />
    )
}

export default LottieImage1