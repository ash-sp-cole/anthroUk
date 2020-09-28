import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import steiner from "../../Media/steinerPortrait.png"
import AboutMeModal from '../AboutMeModel';
import ModalRightBox from '../RightHomeBox/ModalRightBoxHome';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'auto'
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
    borderRadius:'20px'
  },
}));

export default function BotRightBoxHome() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{margin:'auto'}}>
     <ModalRightBox/>
    </div>
  );
}
