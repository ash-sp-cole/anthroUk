import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function BookListModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{margin:'auto'}}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen} style={{margin:'auto'}}>
        View 
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Bookshops
          <h5>The following shops stock many of the published books:</h5>
        </DialogTitle>
        <DialogContent dividers>
        <Card  variant="outlined">
      <CardContent>
      <CardHeader
                avatar={
                    <Avatar aria-label="recipe" style={{backgroundColor:'red'}} >
                        A
          </Avatar>
                }
               
                title="East Sussex,"
                subheader="01342 824422
                "
            />
        
        <Typography variant="h5" component="h2">
        Al Fine
        </Typography>
        <Typography  color="textSecondary">
        26 Hartfield Road, Forest Row,
East Sussex, RH18 5DY
        </Typography>
        <Typography variant="body2" component="p">
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Site</Button>
      </CardActions>
    </Card>
{/*     
////////----------------------------------- */}



<br></br>
<Card  variant="outlined">
      <CardContent>
      <CardHeader
                avatar={
                    <Avatar aria-label="recipe" style={{backgroundColor:'red'}} >
                        B
          </Avatar>
                }
               
                title="Whitby,"
                subheader="01287 661279
                "
            />
        
        <Typography variant="h5" component="h2">
        Botton Bookshop
        </Typography>
        <Typography  color="textSecondary">
        Botton Village, Danby, Whitby,
N Yorks YO21 2NJ
        </Typography>
        <Typography variant="body2" component="p">
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Site</Button>
      </CardActions>
    </Card>
{/*     
////////----------------------------------- */}

<br></br>

<Card  variant="outlined">
      <CardContent>
      <CardHeader
                avatar={
                    <Avatar aria-label="recipe" style={{backgroundColor:'red'}} >
                        C
          </Avatar>
                }
               
                title="Aberdeen"
                subheader="01224-867611
                "
            />
        
        <Typography variant="h5" component="h2">
        Camphill Bookshop
        </Typography>
        <Typography  color="textSecondary">
        199 North Deeside Road, Bieldside,
Aberdeen AB15 9EN
        </Typography>
        <Typography variant="body2" component="p">
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Site</Button>
      </CardActions>
    </Card>
{/*     
////////----------------------------------- */}




        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
