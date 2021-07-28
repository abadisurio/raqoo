import { Box, Card, Paper, Typography, CardActions, CardContent, Button, Grid } from '@material-ui/core'
import {LocationOn, AccessTime, PlaylistAddCheck, Event} from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FlatCard } from '../components';

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

    const ScheduleItem = ({type, location, date, session}) => {
        return (
            <Box mb={1}>
                <Card>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box  display="flex" alignItems="center">
                                    <Box mr={1}>
                                        <PlaylistAddCheck/>
                                    </Box>
                                    <Box mr={1} flexGrow={1}>
                                        <Typography variant="overline" display="block">
                                            {isLoading
                                                ?(<Skeleton animation="wave" width="100%"/>)
                                                :type === "vaksinasi" ? "Vaksinasi" : "Tes"}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box  display="flex" alignItems="center" >
                                    <Box mr={1}>
                                        <LocationOn/>
                                    </Box>
                                    <Box mr={1} flexGrow={1}>
                                        <Typography variant="overline" display="block">
                                            {isLoading
                                                ? (<Skeleton variant="text" animation="wave"/>)
                                                : location}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box  display="flex" alignItems="center" >
                                    <Box mr={1}>
                                        <Event/>
                                    </Box>
                                    <Box mr={1} flexGrow={1}>
                                        <Typography variant="overline" display="block">
                                            {isLoading
                                                ? (<Skeleton variant="text" animation="wave"/>)
                                                : date}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box  display="flex" alignItems="center" >
                                    <Box mr={1}>
                                        <AccessTime/>
                                    </Box>
                                    <Box mr={1} flexGrow={1}>
                                        <Typography variant="overline" display="block">
                                            {isLoading
                                                ? (<Skeleton variant="text" animation="wave"/>)
                                                : session}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        )
    }

    return (
        <div>
            <div className="container pt-5">
                <div className="bg-light card-body rounded-4">
                    <h3>Riwayat registrasi</h3>
                    {items.map((item, index)=>{
                        return (
                            <ScheduleItem key={index} {...item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Schedule
