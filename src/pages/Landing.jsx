import React from 'react'
// import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="position-relative vw-100 vh-100">
            <div className="position-absolute top-0 start-0 w-100">
                <img className="w-100 vh-100 image-cover" alt="" src="https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=360"/>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle w-100">
                <div className="container">
                    <div className="row d-flex flex-row align-items-center">
                        <div className="col-md-7 mb-5 text-white">
                            <div className="card bg-transparent border-0">

                            <h1><span className="align-middle">Satu langkah singkat untuk menunaikan vaksinasi menuju Indonesia sehat</span></h1>
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <div className="card card-body rounded-3">
                                <div className="">
                                    <label for="exampleInputEmail1" className="form-label">Nomor Induk Kependudukan (NIK)</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    <div className="d-flex mt-2">
                                        <button type="submit" className="btn btn-primary text-right ms-auto">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
