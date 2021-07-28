import React from 'react'
import { Box, Card, Typography, CardContent, Grid } from '@material-ui/core'

const Profile = () => {
    return (
        <div className="container pt-5">
            <div className="bg-light card-body rounded-4">
                <h3>Profile</h3>
                <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box mb={3}>
                                <h6><strong>Nama</strong></h6>
                                <span>Abadi Suryo</span>
                            </Box>
                            <Box mb={3}>
                                <h6><strong>NIK</strong></h6>
                                <span>3276513874692343</span>
                            </Box>
                            <Box mb={3}>
                                <h6><strong>Email</strong></h6>
                                <span>abadisuryo@gmail.com</span>
                            </Box>
                            <Box mb={3}>
                                <h6><strong>Nomor Ponsel</strong></h6>
                                <span>082139012349</span>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box mb={3}>
                                <h6><strong>Alamat</strong></h6>
                                <span>Jl. KH. Noer Ali, RT.08/RW.02, Pekayon Jaya</span>
                            </Box>
                            <Box mb={3}>
                                <h6><strong>Kelurahan</strong></h6>
                                <span>Pekayon Jaya</span>
                            </Box>
                            <Box mb={3}>
                                <h6><strong>Kecamatan</strong></h6>
                                <span>Bekasi Selatan</span>
                            </Box>
                            <Box mb={3}>
                                <h6><strong>Kota/Kabupaten</strong></h6>
                                <span>Kota Bekasi</span>
                            </Box>
                            <Box mb={3}>
                                <h6><strong>Provinsi</strong></h6>
                                <span>Jawab Barat</span>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Profile
