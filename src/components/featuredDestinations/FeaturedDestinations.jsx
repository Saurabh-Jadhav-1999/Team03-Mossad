import { Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/system';
import styles from './FeaturedDestinations.module.css'

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const FeaturedDestinations = () => {
    return (
        <Grid container direction="column" className={styles.featuredDestinationsImageContainer}>

            <Box display="flex" justifyContent="flex-start" marginLeft='-105vh'>
                <Grid item className={styles.imgGridHeaderContainer}>
                    <Grid item>
                        <Typography className={styles.imgGridHeader}>Featured Destinations</Typography>
                    </Grid>

                    <Grid item>
                        <Typography className={styles.imgGridDesc}>
                            Popular destinations open to visitors from India
                        </Typography>
                    </Grid>
                </Grid>
            </Box >
            <Grid item>
                <ImageList
                    sx={{ width: '150vh', height: '100vh' }}
                    variant="quilted"
                    cols={5}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} title={item.title} cols={item.cols || 1} rows={item.rows || 1} >
                            <img className={styles.featuredDestinationsImages}
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                sx={{borderRadius:'10px', width:'97%'}}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >   
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Grid >
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        title: 'L.A.',
        rows: 2,
        cols: 4,
    },
    {
        img: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzdGluYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        title: 'Mantua',
    },
    {
        img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Tokyo',
    },
    {
        img: 'https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80',
        title: 'New York',
        cols: 2,
        rows: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
        title: 'Sydney',
        author: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1592345279419-959d784e8aad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc3RpbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        title: 'Miami',
    },
    {
        img: 'https://images.unsplash.com/photo-1518787289325-94c6917b88ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3RpbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        title: 'Seoul',
    }
];
