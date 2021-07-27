import { Avatar } from '@material-ui/core'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className="">
            <div className="card card-body rounded-4">
                <div className="d-flex flex-column align-items-center">
                    <Avatar>AS</Avatar>
                    <br/>
                    <h6>Abadi Suryo Setiyo</h6>
                    <h6 className='text-muted' >1232456765786</h6>
                    <div className="btn-danger card-body rounded-4 h-100 d-flex align-items-center mt-2 w-100">
                        <div className="text-center w-100">
                            <span className='h6'>Belum divaksin</span>
                        </div>
                    </div>
                    <div className="btn-warning card-body rounded-4 h-100 d-flex align-items-center mt-2 w-100">
                        <div className="text-center w-100">
                            <span className='h6'>Sudah divaksin dosis 1</span>
                        </div>
                    </div>
                    <div className="btn-success card-body rounded-4 h-100 d-flex align-items-center mt-2 w-100">
                        <div className="text-center w-100">
                            <span className='h6'>Sudah divaksin dosis 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
