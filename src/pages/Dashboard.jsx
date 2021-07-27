import React from 'react'
// import { Link } from 'react-router-dom'
import {Container, Grid, Paper, Box, withStyles, Avatar, Button} from '@material-ui/core'
import {grey, blue} from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { MediaCard, ProfileCard } from '../components';

// const Dashboard = () => {
//     return (
//         <div className="container bg-white">
//             <div className="row my-2">
//                 <div className="col-md-6">
//                     <div height="300" className="rounded-4 h-100 d-flex align-items-center">
//                         <div className="text-start w-100">
//                             <h1>Raqoo</h1>
//                             <h6>Your vaccination companion</h6>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                 </div>
//             </div>
//             <div className="row my-2">
//                 <div className="col-md-6">
//                     <div className="rounded-4 h-100 d-flex align-items-center">
//                         <div className="text-center text-md-end w-100">
//                             <h3>Status vaksinasi Anda</h3>
//                             <Link to='/profile' className="text-dark">
//                                 <h6>Lihat lebih detail</h6>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="btn-danger card-body rounded-4 h-100 d-flex align-items-center">
//                         <div className="text-center w-100">
//                             <h3>Belum divaksin</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row my-2">
//                 <div className="col-md-6">
//                     <div className="btn-secondary rounded-4 overflow-hidden">
//                         <img className="image-cover w-100" height="300" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200" alt="" />
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="rounded-4 h-100 d-flex align-items-center">
//                         <div>
//                             <h1>Temukan fasilitas kesehatan yang cocok denganmu</h1>
//                             <Link to='/registration' className="text-dark">
//                                 <h6>Lihat lebih detail</h6>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             <div className="row my-2">
//                 <div className="col-md-6">
//                     <div className="rounded-4 h-100 d-flex align-items-center">
//                         <div className="text-end">
//                             <h1>Pilih sesi vaksinasi sesukamu yang kamu bisa</h1>
//                             <Link to='/registration' className="text-dark">
//                                 <h6>Lihat lebih detail</h6>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="btn-secondary rounded-4 overflow-hidden">
//                         <img className="image-cover w-100" height="300" src="https://images.pexels.com/photos/3985170/pexels-photo-3985170.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=200" alt="" />
//                     </div>
//                 </div>
//             </div>
//             <div className="position-relative my-2 clearfix">
//                 <div className="top-0 start-0 w-100 btn-secondary rounded-4 overflow-hidden">
//                     <img className="image-cover w-100" height="300" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" />
//                 </div>
//                 <div className="position-absolute top-0 start-0 w-100">
//                     <div className="row" style={{height: 300}}>
//                         <div className="col-6">
//                             <div className="btn-secondary h-100 card-body d-flex align-items-center rounded-4 rounded-end">
//                                 <div className="">
//                                     <h1>Temukan fasilitas kesehatan yang cocok dengan Anda</h1>
//                                     <h6>Your vaccination companion</h6>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-6">
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const LeftSideBox = withStyles({
    root: {
        backgroundColor: 'white',
        height: "100%",
    },

})(Box);
const CenterBox = withStyles({
    root: {
        height: "100vh"
    }
})(Box);

const Dashboard = () => {
   
    return (
        <div className="row m-0 vh-100">
            <div className="col-md-6 p-0">
                <div className="sticky-top vh-100">
                    <div className="position-absolute top-0 start-0 w-100">
                        <img className="w-100 vh-100 image-cover" alt="" src="https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=360"/>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100">
                        <div className="d-flex flex-column justify-content-center vh-100 align-items-center">
                            <ProfileCard/>

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
            <div className="col-md-6 p-0">
                <div className="sticky-top">
                    <div className="d-flex h-100 d-flex justify-content-center">
                        <div className="container">
                            <div className="py-3"></div>
                            <div className="">
                                <div class="alert alert-warning" role="alert">
                                    Anda belum mengisi formulir skrinig! Silakan isi terlebih dahulu sebelum mendaftar. <Link to='/screening'>Isi sekarang</Link>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-6">
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
                                <div className="col-6">
                                    <div className="btn-secondary rounded-4 overflow-hidden">
                                       <img className="image-cover w-100" height="200" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200" alt="" />
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

export default Dashboard
