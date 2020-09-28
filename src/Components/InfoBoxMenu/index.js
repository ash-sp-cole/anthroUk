import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SchoolIcon from '@material-ui/icons/School';
import GroupIcon from '@material-ui/icons/Group';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EcoIcon from '@material-ui/icons/Eco';
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={14}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}

        {...props}
    />
));


const StyledMenuItem = withStyles((theme) => ({



}))(MenuItem);

export default function FadeMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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
            borderRadius: '25px'
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: '20px'
        },
    }));


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={7}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm container elevation={14}>
                        <Grid item xs container direction="column" spacing={2} elevation={14}>

                            <Grid item xs style={{ marginRight: '1%' }}>
                                <Typography gutterBottom variant="subtitle1">
                                    About the Anthroposophical Society
                  </Typography>

                                <Typography variant="body2" color="textSecondary">
                                    The Society is a worldwide organisation with its headquarters in Switzerland.
                                    Its main aim is to develop
                                    the spiritual science started by Steiner
                                    and to demonstrate how
                                    it can be a valuable,
                                    consciousness-raising and healing power,
                                    for both individual and cultural development.        </Typography>
                            </Grid>
                            <Grid item>

                                <div>
                                    <Button
                                        aria-controls="customized-menu"
                                        aria-haspopup="true"
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleClick}
                                    >
                                        Our Activities
      </Button>
                                    <StyledMenu
                                        id="customized-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        variant="contained"
                                        color="secondary"
                                    >
                                        <StyledMenuItem component={Link} to={"/school-of-spiritual-science"}>
                                            <ListItemIcon>
                                                <SchoolIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="School of Spirtual Science" />
                                        </StyledMenuItem>

                                        <StyledMenuItem component={Link} to={"/rudolf-steiner-house"}>
                                            <ListItemIcon>
                                                <LocalLibraryIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Rudolf Steiner House" />
                                        </StyledMenuItem>

                                        <StyledMenuItem>
                                            <ListItemIcon>
                                                <GroupIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Local Groups" />
                                        </StyledMenuItem>

                                        <StyledMenuItem>
                                            <ListItemIcon>
                                                <EmojiObjectsIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Goetheanum" />
                                        </StyledMenuItem>

                                        <StyledMenuItem>
                                            <ListItemIcon>
                                                <EcoIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Anthroposophical Initiatives" />
                                        </StyledMenuItem>

                                    </StyledMenu>
                                </div>

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




