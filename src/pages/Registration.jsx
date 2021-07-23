import React, {useState} from 'react'
import {TextField, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Button} from '@material-ui/core';
import {LocationOn} from '@material-ui/icons';

const Registration = () => {

    const [service, setService] = useState('');

    const facilities = [
        {
            'name': 'RS Manakek',
            'location': 'Jakarta'
        },
        {
            'name': 'RS Manakek',
            'location': 'Bekasi'
        },
        {
            'name': 'RS Manakek',
            'location': 'Bandung'
        },
        {
            'name': 'RS Manakek',
            'location': 'Jakarta'
        },
        {
            'name': 'RS Manakek',
            'location': 'Jakarta'
        },
        {
            'name': 'RS Manakek',
            'location': 'Jakarta'
        },
    ]

    const forms = [
        {
            'name': 'Pilih jenis layanan',
            'content': (
                <div className="bg-white rounded-4 card-body border">
                    <FormControl className='w-100' component="fieldset">
                        <FormLabel component="legend">Jenis layanan</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={service} onChange={e => setService(e.target.value)} >
                            <FormControlLabel value="vaksinasi" control={<Radio />} label="Vaksinasi" />
                            <FormControlLabel value="tes_covid" control={<Radio />} label="Test Covid-19" />
                        </RadioGroup>
                    </FormControl>
                    {service === 'tes_covid' && (
                        <FormControl className='w-100 mt-3' component="fieldset">
                            <FormLabel component="legend">Jenis test</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="rapid" control={<Radio />} label="Rapid" />
                                <FormControlLabel value="swab" control={<Radio />} label="Swab" />
                                <FormControlLabel value="pcr" control={<Radio />} label="Polymerase Chain Reaction (PCR)" />
                            </RadioGroup>
                        </FormControl>
                    )}
                </div>
            )
        },
        {
            'name': 'Pilih lokasi fasilitas kesehatan',
            'content': (
                <div className="bg-white rounded-4 card-body border">
                    <div >
                        <TextField className='w-100' id="standard-search" label="Search field" type="search" />
                    </div>
                    <div className="mt-3 row mx-0">
                        {facilities.map((item, index)=>{
                            return (
                                <Button variant="text" className='mt-1' startIcon={<LocationOn />} >
                                    {item.name} | {item.location}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            )
        },
        {
            'name': 'Pilih tanggal layanan',
            'content': (
                <div className="bg-white rounded-4 card-body border">
                    <h1>hehe</h1>
                    <h1>hehe</h1>
                </div>
            )
        },
        {
            'name': 'Pilih sesi layanan',
            'content': (
                <div className="bg-white rounded-4 card-body border">
                    <h1>hehe</h1>
                    <h1>hehe</h1>
                </div>
            )
        },
    ]

    return (
        <div className="container">
            <div className="py-5 my-5">
                <div className="position-relative my-2 clearfix">
                    <div className="top-0 start-0 w-100 btn-secondary rounded-4 overflow-hidden">
                        <img className="image-cover w-100" height="300" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="" />
                    </div>
                    <div className="text-center my-5">
                        <h1>Temukan fasilitas kesehatan yang cocok dengan Anda</h1>
                        <h6>Your vaccination companion</h6>
                    </div>
                </div>
            </div>
            {forms.map((item, index)=> {
                return (
                    <div key={index} className="row mb-3">
                        <div className="col-md-6">
                            <div className="sticky-top pt-3 mb-3">
                                <h3 className='text-muted'>Langkah {index+1}</h3>
                                <h1>{item.name}</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {item.content}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Registration
