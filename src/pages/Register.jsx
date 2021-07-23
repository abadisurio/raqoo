import { Button, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Register = () => {

    const [isLoading, setLoading] = useState(true);
    const [listProvinsi, setListProvinsi] = useState([]);
    const [listKota, setListKota] = useState([]);
    const [listKecamatan, setListKecamatan] = useState([]);
    const [listKelurahan, setListKelurahan] = useState([]);

    const [NIK, setNIK] = useState('');
    const [nama, setNama] = useState('');
    const [ponsel, setPonsel] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');
    const [provinsi, setProvinsi] = useState(0);
    const [kota, setKota] = useState(0);
    const [kecamatan, setKecamatan] = useState(0);
    const [kelurahan, setKelurahan] = useState(0);

    const baseURL = 'https://dev.farizdotid.com/api/daerahindonesia';
    const [page, setPage] = useState(0);

    const submitData = () => {
        console.log(NIK, nama, ponsel, email, alamat, provinsi, kota, kecamatan, kelurahan);
    }
    
    useEffect(() => {
        const loadProvinsi = () => {
            setLoading(true);
            axios.get(`${baseURL}/provinsi`)
                .then((response)=>{
                    // console.log(response.data.provinsi)
                    // console.log(isLoading)
                    setListProvinsi(response.data.provinsi)
                    setLoading(false);
                });
        }
        loadProvinsi();
    }, [])

    useEffect(() => {
        
        const loadKota = () => {
            setLoading(true);
            axios.get(`${baseURL}/kota?id_provinsi=${provinsi}`)
                .then((response)=>{
                    console.log(response.data.kota_kabupaten)
                    // console.log(isLoading)
                    setListKota(response.data.kota_kabupaten)
                    setLoading(false);
                });
        }
        const loadKecamatan = () => {
            setLoading(true);
            axios.get(`${baseURL}/kecamatan?id_kota=${kota}`)
                .then((response)=>{
                    console.log(response.data.kecamatan)
                    // console.log(isLoading)
                    setListKecamatan(response.data.kecamatan)
                    setLoading(false);
                });
        }
        const loadKelurahan = () => {
            setLoading(true);
            axios.get(`${baseURL}/kelurahan?id_kecamatan=${kecamatan}`)
                .then((response)=>{
                    console.log(response.data.kelurahan)
                    // console.log(isLoading)
                    setListKelurahan(response.data.kelurahan)
                    setLoading(false);
                });
        }

        (provinsi !== 0) && loadKota();
        (kota !== 0) && loadKecamatan();
        (kecamatan !== 0) && loadKelurahan();
        // kelurahan != 0 && loadKota();
        // console.log('hehe')
    }, [provinsi, kota, kecamatan, kelurahan])

    const forms = [
        {
            'name': 'Informasi Sederhana',
            'content': (
                <>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="NIK" className="form-label">Nomor Induk Kependudukan (NIK)</label>
                        <input type="number" className="form-control" id="NIK" placeholder="1234567890123456" onChange={e => setNIK(e.target.value) } value={NIK}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nama" className="form-label">Nama Lengkap</label>
                        <input type="text" className="form-control" id="nama" placeholder="Will Smith" onChange={e => setNama(e.target.value) } value={nama}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="no_hp" className="form-label">Nomor Ponsel</label>
                        <input type="number" className="form-control" id="no_hp" onChange={e => setPonsel(e.target.value) } value={ponsel}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value) } value={email}/>
                    </div>
                </>
            ),
        },
        {
            'name': 'Informasi Alamat',
            'content': (
                <>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="alamat" className="form-label">Alamat</label>
                        <input type="text" className="form-control" id="alamat" value={alamat} onChange={e => setAlamat(e.target.value)}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="alamat" className="form-label">Provinsi</label>
                        <select value={provinsi} className="form-select" aria-label="provinsi" onChange={event => setProvinsi(event.target.value)}>
                            <option value={0} >Pilih terlebih dahulu</option>
                            {listProvinsi.map((item, index)=> {
                                // console.log(item);
                                return <option key={index} value={item.id}>{item.nama}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="alamat" className="form-label">Kota/Kabupaten</label>
                        <select value={kota} className="form-select" aria-label="provinsi" onChange={event => setKota(event.target.value)}>
                            {provinsi===0 && <option>Pilih provinsi terlebih dahulu</option>}
                            {listKota.map((item, index)=> {
                                // console.log(item);
                                return <option key={index} value={item.id}>{item.nama}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="alamat" className="form-label">Kecamatan</label>
                        <select value={kecamatan} className="form-select" aria-label="provinsi" onChange={event => setKecamatan(event.target.value)}>
                            {kota === 0 && <option>Pilih kota/kabupaten terlebih dahulu</option>}
                            {listKecamatan.map((item, index)=> {
                                // console.log(item);
                                return <option key={index} value={item.id}>{item.nama}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="alamat" className="form-label">Kelurahan</label>
                        <select value={kelurahan} className="form-select" aria-label="provinsi" onChange={event => setKelurahan(event.target.value)}>
                            {kecamatan === 0 && <option>Pilih kelurahan terlebih dahulu</option>}
                            {listKelurahan.map((item, index)=> {
                                // console.log(item);
                                return <option key={index} value={item.id}>{item.nama}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="kodepos" className="form-label">Kode Pos</label>
                        <input type="number" className="form-control" id="kodepos"/>
                    </div>
                </>
            )
        },
        {
            'name': 'Sudah siap semua!',
            'content': (
                <>
                <h1>Sip</h1>
                <Button variant="contained" onClick={submitData} >Selesai</Button>
                </>
            )
        }
    ]


    return (
        <div className="position-relative vw-100 vh-100">
            <div className="position-absolute top-0 start-0 w-100">
                <img className="w-100 vh-100 image-cover" alt="" src="https://images.pexels.com/photos/6984984/pexels-photo-6984984.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=550"/>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle w-100 h-100">
                <div className="d-flex flex-column container h-100 px-3 px-md-5">
                    <h1 className="text-center text-white py-3" >Registrasi Raqoo</h1>
                    <div className="card rounded-4 p-4 overflow-auto flex-fill">
                        <div className="d-block">
                            <div className="progress my-2">
                                <div className="progress-bar" role="progressbar" style={{width: `${(page+1)*(100/forms.length)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="row">
                            <h2 className="text-muted my-3">{forms[page].name} {isLoading && <CircularProgress size={15} /> }</h2>
                            {forms[page].content}
                        </div>
                    </div>
                    <div className="p-4 d-flex justify-content-evenly">
                        <Button variant="contained" onClick={() => page > 0 && setPage(page-1)} >prev</Button>
                        <Button variant="contained" onClick={() => page < 2 && setPage(page+1)} >next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
