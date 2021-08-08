import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    
  },
  title: {
    color: 'white',
    fontSize: '30px'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(100) 70%, rgba(0,0,0,0) 100%)',
  },
}));


export default function ActivitiesImgs() {
  const classes = useStyles();

const itemData= [
    {
        img: 'https://i.pinimg.com/originals/b6/85/04/b685043c7f27b1dd18cada0753f620ea.png',
        title: 'Natacion'
    },
    {
        img: 'https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/03/yoga-relax-1024x684.jpg',
        title: 'Yoga'
    },
    {
        img: 'https://www.verywellfit.com/thmb/s-TtQWXaXBqaXfqU8x4zp7Ut_UU=/3000x2002/filters:fill(FFDB5D,1)/zumba-fatcamera-c9d4ee824a0f4fda883484f878abc8ae.jpg',
        title: 'Zumba'
    },
    
]

const itemData2 = [
    {
        img:  'https://www.bsaspersonaltrainer.com.ar/wp-content/uploads/2014/07/Musculacion-estetica-6-metodos-infalibles-para-hipertrofiar.jpg',
        title: 'Musculacion'
    },
    {
        img:  'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/07/18/15634659732891.png',
        title: 'CrossFit'
    },
    
    {
        img:  'https://www.hola.com/imagenes//estar-bien/20191121154053/ejercicios-complementar-clases-spinning-lb/0-746-190/complementar-clases-spinning-t.jpg',
        title: 'Spinning'
    },
    
]

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList className={classes.imageList} cols={2.5}>
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}