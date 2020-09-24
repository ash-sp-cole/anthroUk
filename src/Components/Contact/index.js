import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import MapChart from "../Map";
import ContactModal from "./ModalTrigger.js";
import ReactTooltip from "react-tooltip";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto'
  },
  paper: {
    marginTop: '5%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Contact = () => {
  const classes = useStyles();
  const [content, setContent] = useState("");
  return (
    <div >
      <Grid container spacing={3}>



        <Grid item xs={12} style={{ margin: 'auto' }} >
          <Paper elevation={7} className={classes.paper} style={{width:'75vw',margin:'auto'}}>
            <h1 style={{fontSize:'4em'}}>Our movement</h1>
            <ContactModal />
            <br></br>

            <Typography variant="body2" color="textSecondary">

              <br></br>
              <hr></hr>
Hover on the map below to find groups and information for your region
    <br></br>
    -Scroll or swipe on map to Zoom-




</Typography>

            <MapChart

              setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>

          </Paper>
        </Grid>

       
      </Grid>
    </div>
  )

}

export default Contact;