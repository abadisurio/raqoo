import React from 'react'

const Register = () => {

    const province = [
        
    ]


    const forms = [
        {
            name: 'One',
            title: 'Informasi Dasar',
            content: (
                <>
                    <div class="mb-3">
                        <label for="NIK" class="form-label">Nomor Induk Kependudukan (NIK)</label>
                        <input type="number" class="form-control" id="NIK" placeholder="1234567890123456"/>
                    </div>
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama Lengkap</label>
                        <input type="text" class="form-control" id="nama" placeholder="Will Smith"/>
                    </div>
                    <div class="mb-3">
                        <label for="no_hp" class="form-label">Nomor Ponsel</label>
                        <input type="number" class="form-control" id="no_hp"/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Alamat Email</label>
                        <input type="text" class="form-control" id="email"/>
                    </div>
                    <div class="mb-3">
                        <label for="alamat" class="form-label">Alamat</label>
                        <input type="text" class="form-control" id="alamat"/>
                    </div>
                </>
            )
        },
        {
            name: 'One',
            title: 'Informasi Dasar',
            content: (
                <>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </>
            )
        },
    ]

    return (
        <div>
            <div className="container">
                <h1>Ini Register</h1>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushForm">
                    {forms.map((item, index)=> {
                        return (
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={`flush-heading${item.name}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.name}`} aria-expanded="false" aria-controls={`flush-collapse${item.name}`}>
                                    {item.title}
                                </button>
                                </h2>
                                <div id={`flush-collapse${item.name}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.name}`} data-bs-parent="#accordionFlushForm">
                                    <div className="accordion-body">{item.content}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Register
