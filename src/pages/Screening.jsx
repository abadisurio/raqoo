import {
    FormControl, FormLabel, RadioGroup, FormControlLabel, Container,
    Radio, Grid, Box, TextField, withStyles, Paper, Button
} from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {Dialog} from '../components'
import { useHistory } from "react-router-dom";

const StyledRating = withStyles({
    iconFilled: {
      color: '#002984',
    },
    iconHover: {
      color: '#757de8',
    },
})(Rating);

// const qwsyns = {
//     0: {
//         'name': 'question1',
//         'kind': 'multipleChoice',
//         'question': 'Ya atau tidak',
//         'options': [
//             {'value': '123', 'label': '123' },
//             {'value': '534543', 'label': '534543' },
//             {'value': '657765', 'label': '657765' },
//             {'value': '12312', 'label': '12312' }
//         ]
//     },
//     1: {
//         'name': 'question2',
//         'kind': 'rating',
//         'question': 'Dalam skala berapa',
//         'start': 'Tidak setuju', 'finish': 'Sangat setuju',
//         'maxValue': 5
//     },
//     2: {
//         'name': 'question3',
//         'kind': 'shortAnswer',
//         'question': 'Ceritakan pengalaman anda ...',
//     },
//     3: {
//         'name': 'question1',
//         'kind': 'multipleChoice',
//         'question': 'Ya atau tidak',
//         'options': [
//             {'value': 'true', 'label': 'Ya' },
//             {'value': 'false', 'label': 'Tidak' }
//         ]
//     },
// }

const qwsyns = [
    {
        'name': 'adapenyakitbawaan',
        'kind': 'multipleChoice',
        'question': 'Apakah Anda memiliki riwayat penyakit sebelumnya?',
        'options': [
            {'value': 'true', 'label': 'Ya' },
            {'value': 'false', 'label': 'Tidak' },
        ]
    },
    {
        'name': 'listpenyakitbawaan',
        'kind': 'shortAnswer',
        'question': 'Jika Ya, sebutkan penyakit yang Anda derita',
    },
    {
        'name': 'adaAlergiObat',
        'kind': 'multipleChoice',
        'question': 'Apakah Anda memiliki alergi terhadap obat tertentu?',
        'options': [
            {'value': 'true', 'label': 'Ya' },
            {'value': 'false', 'label': 'Tidak' },
        ]
    },
    {
        'name': 'listpenyakitbawaan',
        'kind': 'shortAnswer',
        'question': 'Jika Ya, sebutkan alergi obat yang Anda miliki',
    },
    {
        'name': 'pernahCovid',
        'kind': 'multipleChoice',
        'question': 'Apakah Anda pernah terpapar virus Covid-19 sebelumnya?',
        'options': [
            {'value': 'true', 'label': 'Ya' },
            {'value': 'false', 'label': 'Tidak' }
        ]
    },
]

const Screening = () => {


    const [isLoading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState({})
    const [isOpen, setOpen] = useState(false)
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            setQuestions(qwsyns);
            setLoading(false);
        }, 3000);
    })

    const handleSubmit = () => {
        console.log("kirim");
        history.push("/schedule");
    }

    console.log(answer)

    const formField = {
        'multipleChoice': ({options}, questionNumber) => (
            <FormControl component="fieldset">
                <FormLabel component="legend">Pilih salah satu</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={answer[questionNumber] || ''}
                    onChange={e => setAnswer({...answer, [questionNumber]: e.target.value})}
                    >
                        {options.map((item, index)=> {
                            return (
                                <FormControlLabel
                                    key={index}
                                    value={item.value}
                                    control={<Radio />}
                                    label={item.label} />
                            )
                        })}
                </RadioGroup>
            </FormControl>
        ),
        'rating': ({start, finish, maxValue}, questionNumber) => (
            <Box component="fieldset" borderColor="transparent" textAlign="center">
                <FormLabel component="legend">Pilih salah satu</FormLabel>
                <Grid container>
                    <Grid item xs={2}>{start}</Grid>
                    <Grid item xs={8}>
                        <StyledRating
                            name="customized-color"
                            max={maxValue}
                            icon={<FiberManualRecord />}
                            onChange={(e, value) => setAnswer({...answer, [questionNumber]: value})}
                            value={answer[questionNumber] || 2} />
                            <h5>{answer[questionNumber] || 2}</h5>
                    </Grid>
                    <Grid item xs={2}>{finish}</Grid>
                </Grid>
            </Box>
        ),
        'shortAnswer': (item, questionNumber) => (
            <TextField
                fullWidth
                id={"standard-basic"+questionNumber}
                label="Isi dengan singkat"
                variant="standard"
                onChange={e => setAnswer({...answer, [questionNumber]: e.target.value})}    
            />
        )
    }

    return isLoading ? <h6>is loading</h6> : (
        <Container maxWidth="md">
            <Dialog confirmAction={handleSubmit} isOpen={isOpen} setOpen={setOpen} message="Jawaban akan disimpan" />
            <Box py={3} my={3}>
                <div className="position-relative my-2 clearfix">
                    <div className="text-center my-5">
                        <h1>Temukan fasilitas kesehatan yang cocok dengan Anda</h1>
                        <h6>Your vaccination companion</h6>
                    </div>
                </div>
            </Box>
            {questions.map((item, index)=>{
                return(
                    <Box key={index} mb={3}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={5} md={6}>
                                <div className="sticky-top pt-3">
                                    <h5 className='text-muted'>Pertanyaan {parseInt(index)+1}</h5>
                                    <h3>{item.question}</h3>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={7} md={6}>
                                <Box borderRadius={16} border={1} borderColor="primary.light" p={2} height="100%">
                                    {formField[item.kind](item, index)}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                )
            })}
            <Box mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} md={6}>
                        <div className="sticky-top pt-3">
                            <h3 className='text-muted'>Konfirmasi</h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={6}>
                        <Paper elevation={3}>
                            <Box p={2}>
                                <h6><strong>Simpan jawaban screening</strong></h6>
                                <h6 className="mt-3 text-end">
                                    <Button variant="contained" color="primary" onClick={() => setOpen(!isOpen)}>
                                        Simpan
                                    </Button>
                                </h6>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            
            
        </Container>
    )
}

export default Screening
