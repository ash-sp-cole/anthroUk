import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import steiner from "../../Media/steinerPortrait.png"
import AboutMeModal from '../AboutMeModel';
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function LeftBoxHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={7}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={steiner} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rudolf Steiner
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Founder of the Anthroposophical movement
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Anthroposophy is a modern spiritual path that cherishes and respects the freedom of each individual.
                </Typography>
              </Grid>
              <Grid item>
             
           
                    <AboutMeModal/>
              
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">1861 - 1925</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
