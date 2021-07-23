import React from 'react'

const Dashboard = () => {
    return (
        <div className="position-relative vw-100 vh-100">
            <div className="position-absolute top-0 start-0 w-100">
                <img className="w-100 vh-100 image-cover" alt="" src="https://images.pexels.com/photos/6984989/pexels-photo-6984989.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=550"/>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle w-100 h-100">
                <div className="d-flex flex-column container h-100 p-3 px-md-5">
                    {/* <h1 className="text-center text-white py-3" >Dashboard Raqoo</h1> */}
                    <div className="bg-white shadow rounded-4 p-4 overflow-auto flex-fill">
                        <div className="d-block">
                            {/* <div className="progress my-2">
                                <div className="progress-bar" role="progressbar" style={{width: `${(page+1)*(100/forms.length)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                        </div>
                        <div className="row">
                            {/* <h2 className="text-muted my-3">{forms[page].name} {isLoading && <CircularProgress size={15} /> }</h2> */}
                            {/* {forms[page].content} */}
                        </div>
                    </div>
                    {/* <div className="p-4 d-flex justify-content-evenly"> */}
                        {/* <Button variant="contained" onClick={() => page > 0 && setPage(page-1)} >prev</Button> */}
                        {/* <Button variant="contained" onClick={() => page < 2 && setPage(page+1)} >next</Button> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
