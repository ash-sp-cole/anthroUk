import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import NewsBox from "../../NewsBoxProp";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from "react-router-dom";
import Window from "../../../Media/windows.webp";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: '5%',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontFamily: 'anthrop'
    },
}));



const School = () => {
    const classes = useStyles();
    return (
        <div >
            <Grid container spacing={3} style={{ width: '95vw', margin: "auto" }} >
                <Grid item xs={12}
                    style={{ marginBottom: '%' }}

                >
                    <Paper className={classes.paper} elevation={14}><h1 style={{ fontSize: '2.em' }}> The School of Spritual Science</h1> </Paper>
                </Grid>
                <Grid item xs={12}
                    style={{ marginBottom: '%' }}

                >
                    <Paper className={classes.paper} elevation={14}>

                        <div className={classes.root}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={2}>


                                    <img
                                      
                                            style={{
                                                margin: "auto",
                                                width: '45%',
                                                height:'75%',
                                                maxHeight:'70vh',
                                                maxWidth:'60vh'
    
                                            }}
                                     
                                        alt="complex" src={Window} />


                                    <Grid item xs={12} sm container
                                       
                                    >
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                   <h3> The School is centred at the Goetheanum, but is also active in the UK.</h3>
                </Typography>
                                                <Typography variant="body2" gutterBottom
                                                    style={{ fontSize: '2.em' }}
                                                >
                                                    At the heart of the Society is the School of Spiritual Science,
                                                    which aims to assist members in their striving for spiritual development
                                                    and inner freedom and to provide a forum and a focus for spiritual research.
                                                    It is also concerned with how the results of this spiritual research can be put to practical use in the various fields of cultural endeavour
                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    With this in mind, the school is divided into sections - Education, Medicine, Social Science, etc.
                                                    There is also a General Section, to which all members of the School belong, and which concerns itself with the
                                                    fundamental questions of human existence that all human beings share,
                                                    irrespective of country, race or religion.
                </Typography>
                                            </Grid>
                                            <Grid item>


                                                <IconButton aria-label="delete" className={classes.margin}
                                                    component={Link} to={"/"}
                                                >
                                                    <KeyboardBackspaceIcon fontSize="large" />
                                                </IconButton>

                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                           
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>



                    </Paper>
                </Grid>
               
            </Grid>
        </div>
    )

}

export default School;