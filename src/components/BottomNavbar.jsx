import React from 'react'
import {AccessibilityNew, Schedule, Notifications, AccountCircle, AddToQueue } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const BottomNavbar = () => {

    const items = [
        {
            'name': 'Beranda',
            'path': '/',
            'icon': <AccessibilityNew/>
        },
        {
            'name': 'Registrasi',
            'path': '/registration',
            'icon': <AddToQueue/>
        },
        {
            'name': 'Antrian',
            'path': '/schedule',
            'icon': <Schedule/>
        },
        {
            'name': 'Profile',
            'path': '/profile',
            'icon': <AccountCircle/>
        }
    ]

    return (
        <div className="position-fixed zindex-super bottom-0 w-100 d-flex justify-content-center mb-3 px-3">
            <div className="bg-transparent-50 shadow p-2 px-3 rounded-4 hover-scale transition-02">
                <div className="d-flex justify-content-center row">
                    {items.map((item, index)=>{
                        return (
                            <Link key={index} to={item.path} className="btn btn-light rounded-4 mx-1 mb-1 col hover-scale transition-02 width-4">
                                {item.icon}<br/>
                                <small className="ft-tiny">{item.name}</small>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BottomNavbar
