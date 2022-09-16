// // import { Container } from '@material-ui/core'
// // import { Typography } from '@mui/material'
// // import React, { Fragment } from 'react'
// // import styles from "./TravelYourPassion.module.css"
// // const TravelYouPassion = () => {
// //   return (
// //  <Fragment>
// //     <Container>
// //         <Container className={styles.Container}>
// //             <Typography variant='h4' className={styles.heading}>
// //                 Travel Your Passion
// //             </Typography>
// //             <Typography variant="body1" className={`${styles.subHeading}`}>
// //                 Destinations & Resorts according to your hobby
// //             </Typography>
// //         </Container>
      
// //     </Container>

// //  </Fragment>
// //   )
// // }

// // export default TravelYouPassion




// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

// function srcset(image, width, height, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${width * cols}&h=${
//       height * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// export default function TravelYourPassion() {
//   return (
//     <ImageList
//     sx={{ width: '150vh', height: '100vh' }}
//     variant="quilted"
//     cols={5}
//     rowHeight={121}
// >
//     {itemData.map((item) => (
//         <ImageListItem key={item.img} title={item.title} cols={item.cols || 1} rows={item.rows || 1} >
//             <img className={styles.featuredDestinationsImages}
//                 {...srcset(item.img, 121, item.rows, item.cols)}
//                 alt={item.title}
//                 loading="lazy"
//             />
//             <ImageListItemBar
//                 title={item.title}
//                 subtitle={item.author}
//                 sx={{borderRadius:'10px', width:'97%'}}
//                 actionIcon={
//                     <IconButton
//                         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                         aria-label={`info about ${item.title}`}
//                     >   
//                     </IconButton>
//                 }
//             />
//         </ImageListItem>
//     ))}
// </ImageList>
//   );
// }

// const itemData = [
// //   {
// //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
// //     title: 'Breakfast',
// //     author: '@bkristastucchio',
// //     featured: true,
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
// //     title: 'Burger',
// //     author: '@rollelflex_graphy726',
// //   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     featured: true,
//   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
// //     title: 'Basketball',
// //     author: '@tjdragotta',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
// //     title: 'Fern',
// //     author: '@katie_wasserman',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
// //     title: 'Mushrooms',
// //     author: '@silverdalex',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
// //     title: 'Tomato basil',
// //     author: '@shelleypauls',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
// //     title: 'Sea star',
// //     author: '@peterlaster',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
// //     title: 'Bike',
// //     author: '@southside_customs',
// //   },
// ];
