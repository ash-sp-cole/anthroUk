import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "../Header";
import { makeStyles } from '@material-ui/core/styles';
import LeftHomeBox from "../LeftBoxHome";
import RightHomeBox from "../RightBoxHome";
import NewsBox from "../NewsBoxProp";
import MapChart from "../Map";
import ContactModal from "./ModalTrigger.js";
import ReactTooltip from "react-tooltip";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={9}><h2>Our movement , part of a larger Whole</h2></Paper>
        </Grid>


        <Grid item xs={12} >
          <Paper elevation={7}>
            <ContactModal tyle={{ margin: 'auto' }} />
            <br></br>
            <MapChart

              setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper ><NewsBox
            title="Left Left"
          /></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper ><NewsBox
            title="mid Left"
          /></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper ><NewsBox
            title="mid Right"

          /></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper ><NewsBox
            title="Right Right"
          /></Paper>
        </Grid>
      </Grid>
    </div>
  )

}

export default Contact;