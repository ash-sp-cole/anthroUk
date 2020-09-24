import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import steiner from "../../Media/blackBoard.jpg"
import FormDialog from "../Contact/email.js";
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
                                Anthroposophical Society
                </Typography>
                                <hr></hr>
                                <Typography variant="body2" gutterBottom>
                                  
                  
                                    <br></br>
                                    Rudolf Steiner House <br></br>
                                      35 Park Road <br></br>
                                        London<br></br>
                                            NW1 6XT

                </Typography>
                                <Typography variant="body2" color="textSecondary">

                                    <br></br>
                                    <hr></hr>
                                    Tel: 020 7723 4400
                                        <br></br>
                                    Email: rsh-office(+at)anth.org.uk
                                    <br></br>
                                    Website: http://www.rsh.anth.org.uk
                  <br></br>

                
                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                <FormDialog/>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                         
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}