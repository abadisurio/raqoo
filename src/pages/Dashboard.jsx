import React from 'react'

const Dashboard = () => {
    return (
        <div className="position-relative">
            <div className="container bg-white">
                <div className="row my-2">
                    <div className="col-md-6">
                        <div height="300" className="rounded-4 h-100 d-flex align-items-center">
                            <div className="text-start w-100">
                                <h1>Raqoo</h1>
                                <h6>Your vaccination companion</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-6">
                        <div className="rounded-4 h-100 d-flex align-items-center">
                            <div className="text-center text-md-end w-100">
                                <h3>Status vaksinasi Anda</h3>
                                <h6>Lihat lebih detail</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="btn-danger card-body rounded-4 h-100 d-flex align-items-center">
                            <div className="text-center w-100">
                                <h3>Belum divaksin</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-6">
                        <div className="btn-secondary rounded-4 overflow-hidden">
                            <img className="image-cover w-100" height="300" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="rounded-4 h-100 d-flex align-items-center">
                            <div>
                                <h1>Temukan fasilitas kesehatan yang cocok dengan Anda</h1>
                                <h6>Your vaccination companion</h6>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row my-2">
                    <div className="col-md-6">
                        <div className="rounded-4 h-100 d-flex align-items-center">
                            <div className="text-end">
                                <h1>Temukan fasilitas kesehatan yang cocok dengan Anda</h1>
                                <h6>Your vaccination companion</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="btn-secondary rounded-4 overflow-hidden">
                            <img className="image-cover w-100" height="300" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" />
                        </div>
                    </div>
                </div>
                <div className="position-relative my-2 clearfix">
                    <div className="top-0 start-0 w-100 btn-secondary rounded-4 overflow-hidden">
                        <img className="image-cover w-100" height="300" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" />
                    </div>
                    <div className="position-absolute top-0 start-0 w-100">
                        <div className="row" style={{height: 300}}>
                            <div className="col-6">
                                <div className="btn-secondary h-100 card-body d-flex align-items-center rounded-4 rounded-end">
                                    <div className="">
                                        <h1>Temukan fasilitas kesehatan yang cocok dengan Anda</h1>
                                        <h6>Your vaccination companion</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
