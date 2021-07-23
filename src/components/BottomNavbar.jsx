import React from 'react'
import {AccessibilityNew, Schedule, Notifications, AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const BottomNavbar = () => {
    return (
        <div className="position-fixed bottom-0 w-100 d-flex justify-content-center mb-3">
            <div className="bg-transparent-50 shadow p-2 px-4 rounded-4 hover-scale transition-02">
                <div className="d-flex justify-content-center">
                    <Link to="/" className="btn btn-light rounded-4 mx-1 col-3 hover-scale transition-02">
                        <AccessibilityNew/><br/>
                        <small className="ft-tiny">Beranda</small>
                    </Link>
                    <Link to="/schedule" className="btn btn-light rounded-4 mx-1 col-3 hover-scale transition-02">
                        <Schedule/><br/>
                        <small className="ft-tiny">Schedule</small>
                    </Link>
                    <Link to="/notification" className="btn btn-light rounded-4 mx-1 col-3 hover-scale transition-02">
                        <Notifications/><br/>
                        <small className="ft-tiny">Notifikasi</small>
                    </Link>
                    <Link to="/profile" className="btn btn-light rounded-4 mx-1 col-3 hover-scale transition-02">
                        <AccountCircle/><br/>
                        <small className="ft-tiny">Profile</small>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BottomNavbar
