import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
   },
   expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
         duration: theme.transitions.duration.shortest,
      }),
   },
   expandOpen: {
      transform: 'rotate(180deg)',
   },
   avatar: {
      backgroundColor: red[500],
   },
}));


const ModalContent = (props) => {


   const classes = useStyles();
   const [expanded, setExpanded] = React.useState(false);

   const handleExpandClick = () => {
      setExpanded(!expanded);
   };


   return (
      <div>
         { props.data.map((response, index) => (
            <div>

               <Card className={classes.root}>
                  <CardHeader
                     avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                           {response.Icon}
          </Avatar>
                     }
                     action={
                        <IconButton aria-label="settings">
                           <MoreVertIcon />
                        </IconButton>
                     }
                     title={response.PlaceName}
                     subheader={response.Phone}
                  />
                 <CardMedia
          className={classes.media}
          image={response.Image}
          title={response.PlaceName}
        />
                  <CardContent>
                     <Typography variant="body2" color="textSecondary" component="p">
                       {response.About}
        </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                  <a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href="https://facebook.com">
                     <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                     </IconButton>
                     </a>
                     <a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={response.Website}>
                     <IconButton aria-label="share">
                        <ShareIcon />
                     </IconButton>
                     </a>
                     <IconButton
                        className={clsx(classes.expand, {
                           [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                     >
                        <ExpandMoreIcon />
                     </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                     <CardContent>
                        <Typography paragraph>More Info:</Typography>
                        <Typography paragraph>
                           {response.MoreInfo}
          </Typography>
                        
                     </CardContent>
                  </Collapse>
               </Card>
            </div>
         ))
         }
      </div>
   )

}

export default ModalContent;