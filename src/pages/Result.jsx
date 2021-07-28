import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core'
import { AccessTime, Event, KeyboardArrowLeft, KeyboardArrowRight, LocationOn } from '@material-ui/icons'
import React, {useState} from 'react'
import { useEffect } from 'react'

const testResultDummy = [0, 1, 2]

const Result = () => {

    const [page, setPage] = useState(true)
    const [testResults, setTestResults] = useState([0])

    useEffect(() => {
        setTestResults(testResultDummy)
    }, [setTestResults])

    console.log(page)

    const VaccineCertificate = () => {
        return (
            <div>
                <div className="btn btn-warning card-body rounded-4">
                    <h4>Kamu telah melakukan vaksinasi dosis satu<br/>👍 ❤️ </h4>
                    <Box  display="flex" alignItems="center" >
                        <Box mr={1}>
                            <LocationOn/>
                        </Box>
                        <Box mr={1} flexGrow={1}>
                            <Typography variant="overline" display="block">
                            Rumah Sakit Islam Pondok Kopi
                            </Typography>
                        </Box>
                    </Box>
                    <Box  display="flex" alignItems="center" >
                        <Box mr={1}>
                            <Event />
                        </Box>
                        <Box mr={1} flexGrow={1}>
                            <Typography variant="overline" display="block">
                            Jumat, 10 Juli 2021
                            </Typography>
                        </Box>
                    </Box>
                    <Box  display="flex" alignItems="center" >
                        <Box mr={1}>
                            <AccessTime />
                        </Box>
                        <Box mr={1} flexGrow={1}>
                            <Typography variant="overline" display="block">
                            Sesi 5 | 12.00 WIB
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </div>
        )
    }

    const TestResult = () => {
        return (
            <div className="flex-grow-1 bg-light rounded-4 card-body">
                <h6>Test result</h6>
                {testResults.map((item, index) => {
                    return (
                        <Box mb={1}>
                            <Card>
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={11}>
                                            <Box  display="flex" alignItems="center">
                                                <Box mr={1}>
                                                    <LocationOn/>
                                                </Box>
                                                <Box mr={1} flexGrow={1}>
                                                    <Typography variant="overline" display="block">
                                                    Rumah Sakit Islam Pondok Kopi
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box  display="flex" alignItems="center" >
                                                <Box mr={1}>
                                                    <Event />
                                                </Box>
                                                <Box mr={1} flexGrow={1}>
                                                    <Typography variant="overline" display="block">
                                                    Jumat, 10 Juli 2021
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box  display="flex" alignItems="center" >
                                                <Box mr={1}>
                                                    <AccessTime />
                                                </Box>
                                                <Box mr={1} flexGrow={1}>
                                                    <Typography variant="overline" display="block">
                                                    Sesi 5 | 12.00 WIB
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <div className="float-end">
                                                <div className="btn btn-danger">Negatif</div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Box>
                    )
                })}
            </div>
        )
    }


    return (
        <div className="container pt-5">
            <h1>Riwayat hasil</h1>
            <div className="d-flex p-3">
                <Button
                    variant="outlined"
                    onClick={() => setPage(!page)}
                >
                    {page ? ( <>lihat Hasil tes<KeyboardArrowRight /> </>) : <>lihat Vaksinasi<KeyboardArrowLeft /> </>}
                </Button>
            </div>
            <div className="d-flex justify-content-center">
                {page ? ( <VaccineCertificate/> ) : <TestResult/> }
            </div>
            {/* <Slide direction="left" in={!page} mountOnEnter unmountOnExit>
            </Slide> */}
        </div>
    )
}

export default Result
