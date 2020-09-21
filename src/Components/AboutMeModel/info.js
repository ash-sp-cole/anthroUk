import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import steiner from "../../Media/steinerPortrait.png"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function InfoModel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
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
                Founder of the Anthroposophical movement
                </Typography>
                <hr></hr>
                <Typography variant="body2" gutterBottom>
                  Born in 1861 in what is now Croatia, Steiner studied science and philosophy in Vienna
                  and soon became a respected thinker,
                  publishing his philosophical treatise The Philosophy of Freedom in 1894.
                  <br></br>
                  <br></br>
                  Later he began to speak about his spiritual experiences and described how he was able to make use of his scientific training in such a way that his spiritual investigations could become a science in their own right.
                  <br></br>

                 
                  From 1907 onwards he became involved with a variety of artistic endeavours, writing plays,
                  designing buildings and devising a completely new art of movement called Eurythmy.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                
                  <br></br>
                  <hr></hr>
                  He called the results of this spiritual science Anthroposophy and an Anthroposophical Society
                  was founded at the Goetheanum in Switzerland in 1913. From this time until his death in 1925,
                  Steiner was fully engaged in establishing an abundance of cultural innovations, details of which
                  can be found elsewhere on this site.
                  <br></br>

                  Later, at Christmas 1923, the society was refounded and called the General Anthroposophical Society,
                  when Steiner became its President. At this event, Steiner provided a special meditation as a
                  foundation stone and established the School of Spiritual Science.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                 
                </Typography>
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