import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import NewsBox from "../../NewsBoxProp";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SteinerHouse from "../../../Media/SteinerHouse.jpg"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'anthrop'
    

    },
    paper: {
        marginTop: '2%',
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
                  

                >
                    <Paper className={classes.paper} elevation={14}><h1 style={{ fontSize: '2.em' }}> The Rudolf Steiner House</h1> </Paper>
                </Grid>
                <Grid item xs={12}
                 

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
                                        alt="complex" src={SteinerHouse} />


                                    <Grid item xs={12} sm container

                                    >
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    <h3> The Rudolf Steiner House</h3>
                                                </Typography>
                                                <Typography variant="body2" gutterBottom
                                                    style={{ fontSize: '2.em' }}
                                                >
                                                    Thousands of people come through the doors of Rudolf Steiner House every year.
                                                    Some come to take part in the anthroposophically inspired seminars, conferences and events that are on offer.
                                                    Others come to the bookshop for a warm welcome by our knowledgeable staff and others come to peruse the library and archive,
                                                    using the study space for research.
                                                    Still others come to see exhibitions and experience the unique ambience and organic architecture. All are welcome.
                                             </Typography>
                                                <br></br>

                                                <a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://www.rsh.anth.org.uk/">
                                                    <Button variant="contained" color="secondary">
                                                        View Website
                                                    </Button>
                                                </a>

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