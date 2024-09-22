import React from 'react'
import { PulseLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='w-full h-dvh flex justify-center items-center'>
            <PulseLoader
                color={"#75F94C"}
                loading={true}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader