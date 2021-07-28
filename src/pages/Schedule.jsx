import React, { useState } from 'react'
import { useEffect } from 'react';
import { ScheduleItem } from '../components';

const itemData = [
    {'type': 'tes_covid', 'location': 'Rumah Sakit Islam Pondok Kopi', 'date': 'Jumat, 10 Juli 2021', 'session': 'Sesi 5 | 12.00 WIB'},
    {'type': 'vaksinasi', 'location': 'Stadion Utama Gelora Bung Karno', 'date': 'Rabu, 21 Juli 2021', 'session': 'Sesi 7 | 14.00 WIB'},
    {'type': 'tes_covid', 'location': 'Stadion Utama Gelora Bung Karno', 'date': 'Senin, 8 Agustus 2021', 'session': 'Sesi 1 | 7.00 WIB'},
    {'type': 'tes_covid', 'location': 'Rumah Sakit Islam Pondok Kopi', 'date': 'Jumat, 10 Juli 2021', 'session': 'Sesi 5 | 12.00 WIB'},
    {'type': 'vaksinasi', 'location': 'Stadion Utama Gelora Bung Karno', 'date': 'Rabu, 21 Juli 2021', 'session': 'Sesi 7 | 14.00 WIB'},
    {'type': 'tes_covid', 'location': 'Stadion Utama Gelora Bung Karno', 'date': 'Senin, 8 Agustus 2021', 'session': 'Sesi 1 | 7.00 WIB'},
]


const Schedule = () => {

    const [items, setItems] = useState([0, 1, 2]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setItems(itemData);
            setLoading(false);
        }, 500)
    })

    return (
        <div>
            <div className="container pt-5">
                <div className="bg-light card-body rounded-4">
                    <h3>Riwayat registrasi</h3>
                    {items.map((item, index)=>{
                        return (
                            <ScheduleItem key={index} {...item} isLoading={isLoading}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Schedule
