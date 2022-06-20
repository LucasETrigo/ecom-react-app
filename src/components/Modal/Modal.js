import { DialogTitle } from '@mui/material';
import { Dialog } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';


const Modal = ({handleClose, open, children, title}) => {

    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal