import React from 'react'

function Banner() {
    return (
        <div>
            <div className="banner" >
                <div className="banner-content p-4">
                    <h2 style={{fontSize:'35px',fontWeight:'bold'}} > ENERGIZE YOUR YOGA PRACTICE</h2>
                    <p style={{fontSize:'14px '}}> ENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA </p>
                    <div className="mt-4">
                        <div className="d-flex justify-content-center align-items-center ">
                            <h5 className="btn btn-warning text-white  font-weight-bold" style={{borderRadius:'50px'}}>Yoga</h5>
                            <h5 className="px-4">Holistic Healing</h5>
                            <h5 className="px-4">Measure</h5>
                            <h5 className="px-4">Nutrionlist</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
