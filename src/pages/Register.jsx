import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Register = () => {

    const [isLoading, setLoading] = useState(true);
    const [listProvinsi, setListProvinsi] = useState([]);
    const [listKota, setListKota] = useState([]);
    const [listKecamatan, setListKecamatan] = useState([]);
    const [listKelurahan, setListKelurahan] = useState([]);
    const [provinsi, setProvinsi] = useState(0);
    const [kota, setKota] = useState(0);
    const [kecamatan, setKecamatan] = useState(0);
    const [kelurahan, setKelurahan] = useState(0);

    const baseURL = 'https://dev.farizdotid.com/api/daerahindonesia';

    const loadProvinsi = async () => {
        setLoading(true);
        await axios.get(`${baseURL}/provinsi`)
            .then((response)=>{
                // console.log(response.data.provinsi)
                // console.log(isLoading)
                setListProvinsi(response.data.provinsi)
                setLoading(false);
            });
    }

    useEffect(() => {
        loadProvinsi();
    }, [])

    useEffect(() => {
        
        const loadKota = async () => {
            setLoading(true);
            await axios.get(`${baseURL}/kota?id_provinsi=${provinsi}`)
                .then((response)=>{
                    console.log(response.data.kota_kabupaten)
                    // console.log(isLoading)
                    setListKota(response.data.kota_kabupaten)
                    setLoading(false);
                });
        }
        const loadKecamatan = async () => {
            setLoading(true);
            await axios.get(`${baseURL}/kecamatan?id_kota=${kota}`)
                .then((response)=>{
                    console.log(response.data.kecamatan)
                    // console.log(isLoading)
                    setListKecamatan(response.data.kecamatan)
                    setLoading(false);
                });
        }
        const loadKelurahan = async () => {
            setLoading(true);
            await axios.get(`${baseURL}/kelurahan?id_kecamatan=${kecamatan}`)
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

    return (
        <div>
            <div className="container">
                <h1>Ini Register {isLoading && "Loading"} </h1>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="NIK" className="form-label">Nomor Induk Kependudukan (NIK)</label>
                        <input type="number" className="form-control" id="NIK" placeholder="1234567890123456"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nama" className="form-label">Nama Lengkap</label>
                        <input type="text" className="form-control" id="nama" placeholder="Will Smith"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="no_hp" className="form-label">Nomor Ponsel</label>
                        <input type="number" className="form-control" id="no_hp"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="alamat" className="form-label">Alamat</label>
                        <input type="text" className="form-control" id="alamat"/>
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
                </div>
            </div>
        </div>
    )
}

export default Register
