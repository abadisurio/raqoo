import React from 'react'
import ProfileCard from './ProfileCard'

const Scaffolding = ({children}) => {
    return (
        <div className="row m-0 vh-100">
            <div className="col-md-4 p-0">
                <div className="sticky-top vh-100">
                    <div className="position-absolute top-0 start-0 w-100">
                        <img className="w-100 vh-100 image-cover" alt="" src="https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=360"/>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100">
                        <div className="d-flex flex-column justify-content-center vh-100 align-items-center">
                            <ProfileCard />

                        </div>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100">
                        <h3 className="brand m-3 text-white">Raqoo</h3>
                    </div>
                {/* <div className="position-relative">
                    <div className="position-absolute top-50 start-50 translate-middle w-100 h-100">
                    </div>
                </div> */}
                </div>
            </div>
            <div className="col-md-8 p-0 pb-4">
                <div className="sticky-top pb-5">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Scaffolding
