import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from "@material-ui/core/IconButton";
import Promo from "../../Media/Promo2.JPG";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height:'80%'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}   elevation={7} style={{margin:'auto', borderRadius:'25px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={Promo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography     style={{margin:'auto'}}gutterBottom variant="h5" component="h2">
            Rudolf Steiner House
          </Typography>
          <Typography    style={{margin:'auto'}}  variant="body2" color="textSecondary" component="p">
            Download our latest program
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
