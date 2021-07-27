import { Avatar } from '@material-ui/core'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className="">
            <div className="card card-body rounded-4">
                <div className="d-flex flex-column align-items-center">
                    <Avatar>AS</Avatar>
                    <br/>
                    <h6>Abadi Suryo</h6>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
