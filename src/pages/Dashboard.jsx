import React from 'react'
import { Link } from 'react-router-dom';
import { ScheduleItem } from '../components';

const Dashboard = () => {
   
    return (
        <div className="px-4">
            <div className="py-3"></div>
            <div className="">
                <div className="alert alert-warning" role="alert">
                    Anda belum mengisi formulir screening! Silakan isi terlebih dahulu sebelum mendaftar. <Link to='/screening'>Isi sekarang</Link>
                </div>
                
            </div>
            <div className="bg-light card-body rounded-4 mb-5">
                <h5>Jadwal pelayanan</h5>
                <ScheduleItem
                    isLoading={false}
                    { ...{'type': 'tes_covid', 'location': 'Rumah Sakit Islam Pondok Kopi', 'date': 'Jumat, 10 Juli 2021', 'session': 'Sesi 5 | 12.00 WIB'}}
                />
            </div>
            <div className="row mb-5">
                <div className="col-md-6 col-sm-6">
                    <div className="rounded-4 h-100 d-flex align-items-center">
                        <div>
                            <h3>Temukan fasilitas kesehatan yang cocok dengan Anda</h3>
                            <p>lorem ipsum dolor sit amet</p>
                            <Link to='/registration' className="text-dark">
                                <h6>Lihat lebih detail</h6>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="btn-secondary rounded-4 overflow-hidden">
                        <img className="image-cover w-100" height="200" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200" alt="" />
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-6 col-md-12 col-sm-6">
                    <div className="rounded-4 h-100 d-flex align-items-center">
                        <div>
                            <h3>Temukan fasilitas kesehatan yang cocok dengan Anda</h3>
                            <p>lorem ipsum dolor sit amet</p>
                            <Link to='/registration' className="text-dark">
                                <h6>Lihat lebih detail</h6>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6">
                    <div className="btn-secondary rounded-4 overflow-hidden">
                        <img className="image-cover w-100" height="200" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
