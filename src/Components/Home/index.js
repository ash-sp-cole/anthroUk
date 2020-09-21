import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "../Header";
import { makeStyles } from '@material-ui/core/styles';
import LeftHomeBox from "../LeftBoxHome";
import InfoBoxMenu from "../InfoBoxMenu";
import RightHomeBox from "../RightBoxHome";
import veilPaint from "../../Media/veilpainting.jpg";
import NewsBox from "../NewsBoxProp";
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



const Home = () => {
  const classes = useStyles();
  return (
    <div >
      <Grid container spacing={3} style={{ width: '95vw', margin: "auto" }} >
        
        <Grid item xs={12}
          style={{ marginBottom: '2%', margin:'auto' }}

        >
          
          <Paper className={classes.paper} id="header" elevation={14} style={{ margin:'auto' }}>
           
          <Paper className={classes.paper} style={{width:'75vw', minHeight:'45%', margin:'auto', marginTop:'3%'}} elevation={14}><h1 style={{ fontSize: '2.em', margin:'auto',marginTop:'3%' }}>Welcome to the Anthroposophical home for England, Scotland and Wales</h1> </Paper>
          </Paper>
        </Grid>

        
        <Grid item xs={12} sm={6}>
          
          <LeftHomeBox />
          <br></br>
       <InfoBoxMenu/>

        </Grid>
        <Grid item xs={12} sm={6}>
          <RightHomeBox />

        </Grid>

      

        <Grid item xs={12}
          style={{opacity:"0.8"}}
        >
          <Paper ><NewsBox
            title="Left Left"
          /></Paper>
        </Grid>
       
      
        
      </Grid>
    </div>
  )

}

export default Home;