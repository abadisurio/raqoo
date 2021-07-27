import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 12,
    marginBottom: '1rem'
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({imageSource = null, title = null, caption = null, actions = []}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {imageSource && (
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
        )}
        <CardContent>
          {title && (
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          )}
          {caption && (
            <Typography variant="body2" color="textSecondary" component="p">
              {caption}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}