import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import dataInput from "./contactInfo.json";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom'
import ModalContent from './modalContent';
import { Paper } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MapModal(props) {
  const [open, setOpen] = React.useState(false);


  const contactData = dataInput[props.testProp]


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let boolToggle = "";

  if (props.testProp != null) {
    boolToggle = true
  }


  return (
    <div>
      <Tooltip TransitionComponent={Zoom} title="Click for Popup">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Learn More
      </Button>
      </Tooltip>
      
<Paper style={{height:"70%",width:"95%", margin:'auto', marginTop:'5%'}} elevation={5} >
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >


        <DialogTitle id="alert-dialog-slide-title">{"Our Communities"}</DialogTitle>
     
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div>
            
                <h1> {props.testProp}</h1>
           
              {boolToggle ? <ModalContent data={contactData} /> : <p>Please select a Country </p>}



            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>

        </DialogActions>
      </Dialog>
      </Paper>
    </div>
  );
}
