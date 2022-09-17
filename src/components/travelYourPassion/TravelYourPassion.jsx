// Static Component for Landing Page
import { Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import styles from "./TravelYourPassion.module.css";
import {StarOutlined} from "@mui/icons-material/StarOutlined";
function srcset(image, size, rows = 2, cols = 4) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const TravelYourPassion = () => {
  return (
    <Grid
      container
      direction="column"
      className={styles.travelYourPassionImageContainer}
    >
      <Box display="flex" justifyContent="flex-start" marginLeft="-54vw">
        <Grid item className={styles.imgGridHeaderContainer}>
          <Grid item>
            <Typography className={styles.imgGridHeader}>
        Travel Your Passion
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={styles.imgGridDesc}>
                 Destinations & Resorts according to your hobby
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid item style={{marginTop:"2%",marginLeft:"-10vw",overflowY:"hidden",width:"auto"}}>
        <ImageList
          sx={{ width: "70vw", height: "40vh" }}
          variant="quilted"
          cols={4}
          rowHeight={160}
          className={`${styles.imgListItem}`}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              title={item.title}
              cols={item.cols || 1}
              rows={item.rows || 1}
              style={{marginLeft:"3vw"}}
            >
              <img
                className={styles.travelYourPassionImages}
                {...srcset(item.img, 120, item.rows, item.cols)}
                alt={item.title}
                style={{overflowY:"hidden"}}
                loading="lazy"
              />
              <ImageListItemBar
              style={{marginTop:"-10%",marginLeft:"5%"}}
                title={item.title}
                subtitle={item.title2}
                sx={{overflowY:"hidden",borderRadius: "10px", width: "97%",backgroundColor:"transparent",fontWeight:"700" }}
               
              />
              
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

//Image Data to be rendered on screen
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1536308037887-165852797016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80",
    title: `Village Tours`,
    title2: "4.19 (123 reviews)",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1440186347098-386b7459ad6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Hiking Tours",
    title2: "4.19 (123 reviews)",
  },
  {
    img: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Wildlife Tours",
    title2: "4.19 (123 reviews)",
  },

  {
      img: 'https://images.unsplash.com/photo-1541368819296-5ae140d454b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Boating Tours',
      title2: "4.19 (123 reviews)",
   
  },

];
