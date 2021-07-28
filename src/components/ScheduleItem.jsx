import React from 'react'
import { Box, Card, Typography, CardContent, Grid } from '@material-ui/core'
import {LocationOn, AccessTime, PlaylistAddCheck, Event} from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';

const ScheduleItem = ({type, location, date, session, isLoading}) => {
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

export default ScheduleItem
