import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LeftHomeBox from "../LeftBoxHome";
import InfoBoxMenu from "../InfoBoxMenu";
import RightBoxHome from "../RightHomeBox";
import NewsBox from "../NewsBoxProp";
import MapChart from "../Map";
import CenterBoxHome from "../CenterBoxHome";
import { Typography } from "@material-ui/core";
import BotRightBoxHome from "../BotRightBox";
import PromotionBox from "../PromotionBox";

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
      <Grid container spacing={3} style={{ width: '95%', margin: "auto" }} >

        <Grid item xs={12}
          style={{ marginBottom: '2%', margin: 'auto' }}

        >

          <Paper className={classes.paper} id="header" elevation={14} style={{ margin: 'auto' }}>

            <Paper className={classes.paper}
              style={{ width: '75%', minHeight: '45%', fontFamily: 'anthrop', borderRadius: '15px', margin: 'auto', opacity: '0.8' }}
              elevation={14}>
              <Typography variant="h9" variant='subtitle1'>
                <h1 style={{ margin: 'auto', opacity: '1', fontFamily: 'anthrop', }}>
                  The home of</h1>

              </Typography>
              <Typography variant="h7" style={{ margin: 'auto' }}>
                <h1 style={{ margin: 'auto', opacity: '1', fontFamily: 'anthrop' }}>
                  Anthroposophy</h1>

              </Typography>
              <Typography variant="h9"   >
                <h1 style={{ margin: 'auto', opacity: '1' }}>
                  England , Scotland & Wales</h1>

              </Typography>
            </Paper>
          </Paper>
        </Grid>


        <Grid item xs={12} sm={3}  style={{margin:'auto'}}>

          <LeftHomeBox />
          <br></br>
          <InfoBoxMenu />
          <br></br>
          <PromotionBox/>
        </Grid>
        <Grid item xs={12} sm={6} id="header" >
          <RightBoxHome />

        </Grid>
        < Grid item xs={12} sm={3} style={{margin:'auto'}}>

          <CenterBoxHome />
          <br></br>
          <BotRightBoxHome />

        </Grid>



      </Grid>
    </div>
  )

}

export default Home;