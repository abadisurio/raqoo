import React from 'react'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core'

const Dialog2 = ({isOpen, setOpen, confirmAction, message}) => {

    return (
        <Dialog
            open={isOpen}
            onClose={()=>setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Apakah Anda sudah yakin?"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {message}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>setOpen(false)} color="primary">
                Batal
            </Button>
            <Button onClick={confirmAction} color="primary" autoFocus>
                OK
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Dialog2
