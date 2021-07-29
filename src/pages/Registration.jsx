import React, { useState } from 'react'
import {format} from 'date-fns';
import idLocale from 'date-fns/locale/id';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Container, Button,
    TextField, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Paper,
} from '@material-ui/core';
import {LocationOn} from '@material-ui/icons';
import { useHistory } from "react-router-dom";
import {Dialog} from '../components';

const Registration = () => {

    const [service, setService] = useState('');
    const [test, setTest] = useState('');
    const [selectedFacility, setFacility] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSession, setSession] = useState('');
    const [isOpen, setOpen] = useState(false);
    const sessionStarted = 6;
    const sessions = [1, 2, 3, 4, 5, 0, 7, 8, 9, 10, 11, 12]

    const history = useHistory();

    const handleSubmit = () => {
        console.log("kirim");
        history.push("/screening");
    }

    const services = {
        'vaksinasi': 'Vaksinasi',
        'tes_covid': 'Test Covid-19'
    }
    const testkind = {
        'rapid': 'Rapid',
        'swab': 'Swab',
        'pcr': 'Polymerase Chain Reaction (PCR)',
    }

    const facilities = [
        {
            'name': 'Rumah Sakit Ibu dan Anak Selasih medika',
            'location': 'Bekasi'
        },
        {
            'name': 'Rumah Sakit Islam Pondok Kopi',
            'location': 'Jakarta'
        },
        {
            'name': 'Stadion Utama Gelora Bung Karno',
            'location': 'Bandung'
        },
        {
            'name': 'Rumah Sakit Omni Pekayon',
            'location': 'Bekasi'
        },
        {
            'name': 'Rumah saSakit Primaya',
            'location': 'Bekasi'
        },
    ]

    const forms = [
        {
            'name': 'Pilih jenis layanan',
            'content': (
                <Box borderRadius={16} border={1} borderColor="primary.light" p={2}>

                    <FormControl className='w-100' component="fieldset">
                        <FormLabel component="legend">Jenis layanan</FormLabel>
                        <RadioGroup row 
                            aria-label="service" 
                            name="row-radio-buttons-group" 
                            value={service} 
                            onChange={e => setService(e.target.value)} >
                            <FormControlLabel value="vaksinasi" control={<Radio />} label="Vaksinasi" />
                            <FormControlLabel value="tes_covid" control={<Radio />} label="Test Covid-19" />
                        </RadioGroup>
                    </FormControl>
                    {service === 'tes_covid' && (
                        <FormControl className='w-100 mt-3' component="fieldset">
                            <FormLabel component="legend">Jenis test</FormLabel>
                            <RadioGroup row 
                                aria-label="testkind" 
                                name="row-radio-buttons-group"
                                onChange={e => setTest(e.target.value)} >
                                <FormControlLabel value="rapid" control={<Radio />} label="Rapid" />
                                <FormControlLabel value="swab" control={<Radio />} label="Swab" />
                                <FormControlLabel value="pcr" control={<Radio />} label="Polymerase Chain Reaction (PCR)" />
                            </RadioGroup>
                        </FormControl>
                    )}
                </Box>
            )
        },
        {
            'name': 'Pilih lokasi fasilitas kesehatan',
            'content': (
                <Box borderRadius={16} border={1} borderColor="primary.light" p={2}>
                    <Box mb={3} textAlign="center">
                        <Typography variant="h6"><LocationOn /> {facilities[selectedFacility].name}</Typography>
                    </Box>
                    <Box mb={3}>
                        <TextField width="100%" id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
                    </Box>
                    <List component="nav" aria-label="main mailbox folders">
                        {facilities.map((item, index)=>{
                            // <button variant="text" className='btn btn-light text-start' >
                            // </button>
                            return (
                                <ListItem
                                    selected={selectedFacility === index}
                                    key={index}
                                    button
                                    onClick={() => setFacility(index)}>
                                    <ListItemIcon>
                                        <LocationOn />
                                    </ListItemIcon>
                                    <ListItemText primary={item.location + " | " + item.name} />
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            )
        },
        {
            'name': 'Pilih tanggal layanan',
            'content': (
                <Box borderRadius={16} border={1} borderColor="primary.light" p={2}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="EEEE, dd MMM yyyy"
                                value={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </Box>
            )
        },
        {
            'name': 'Pilih sesi layanan',
            'content': (
                <Box borderRadius={16} border={1} borderColor="primary.light" p={2}>
                    <Grid container spacing={1}>
                        {sessions.map((item, index)=>{
                            return(
                                <Grid item key={index} xs={4}>
                                    <Box textAlign="center" height="100%">
                                        <Button
                                            style={{height : "100%"}}
                                            variant="contained"
                                            disabled={item===0}
                                            fullWidth
                                            color={(selectedSession === item) ? "primary" : "default" }
                                            onClick={() => setSession(item)}>
                                            {(item+sessionStarted)+".00 - " + (item+sessionStarted+1) + ".00"}
                                        </Button>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            )
        },
        {
            'name': 'Konfirmasi reservasi',
            'content': (
                <>
                {/* <Dialog/> */}
                <Dialog confirmAction={handleSubmit} isOpen={isOpen} setOpen={setOpen} message="Registrasi akan disimpan" />
                <Paper elevation={3}>
                    <Box p={2}>
                        <h6><strong>Jenis pelayanan</strong></h6>
                        <h6>{services[service]}</h6>
                        {service === 'tes_covid' && (<>
                            <h6 className="mt-3"><strong>Jenis tes</strong></h6>
                            <h6>{testkind[test]}</h6>
                        </>)}
                        <h6 className="mt-3"><strong>Lokasi</strong></h6>
                        <h6>{facilities[selectedFacility].name}</h6>
                        <h6 className="mt-3"><strong>Tanggal</strong></h6>
                        <h6>{format(selectedDate, "EEEE, dd MMMM yyyy", {locale: idLocale })}</h6>
                        <h6 className="mt-3"><strong>Sesi</strong></h6>
                        <h6>{selectedSession}</h6>
                        <h6 className="mt-3 text-end">
                            <Button variant="contained" color="primary" onClick={() => setOpen(!isOpen)}>
                                Konfirmasi
                            </Button>
                        </h6>
                    </Box>
                </Paper>
                </>
            )
        },
    ]

    return (
        <Container maxWidth="md">
            <Box mb={5} pb={5}>
                <Box py={3} my={3}>
                    <div className="position-relative my-2 clearfix">
                        <div className="text-center my-5">
                            <h1>Temukan fasilitas kesehatan yang cocok dengan Anda</h1>
                            <h6>Your vaccination companion</h6>
                        </div>
                    </div>
                </Box>
                {forms.map((item, index)=> {
                    return (
                        <Box key={index} mb={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={5}>
                                    <div className="sticky-top pt-3">
                                        <h5 className='text-muted'>Langkah {index+1}</h5>
                                        <h3>{item.name}</h3>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={7} height="100%">
                                    {item.content}
                                </Grid>
                            </Grid>
                        </Box>
                    )
                })}
            </Box>

        </Container>
    )
}

export default Registration
