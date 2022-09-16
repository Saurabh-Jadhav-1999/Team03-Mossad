import React, { Fragment } from "react";
import styles from "./ImageGrid.module.css";
import { useState} from "react";
import { setImageLoadStatus } from "../../slices/getHotelDetailsSlice";
import { useDispatch } from "react-redux";

const ImageGrid = (props) => {
  const [imgsLoaded, setImgsLoaded] = useState(0);
  const dispatch = useDispatch();

  const imgLoadHandler = () => {
   
    let imgLoadCount = imgsLoaded + 1;

    setImgsLoaded(imgLoadCount);
    if (imgLoadCount == 4) {
    
      dispatch(setImageLoadStatus(true));
    }
  }
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <img
            src={`${props.links[0]}`}
            alt=""
            style={{ borderRadius: "50px 0px 0px 50px" }}
            onLoad={imgLoadHandler}
          />
        </div>
        <div className={styles.rightPane}>
          <img
            src={`${props.links[1]}`}
            alt=""
            style={{ borderRadius: "0px 50px 0px 0px" }}
            onLoad={imgLoadHandler}
          />
          <img
            src={props.links[2]}
            alt=""
            styles={{ borderRadius: "50px 0px 0px 50px " }}
            onLoad={imgLoadHandler}
          />
          <img
            src={`${props.links[3]}`}
            alt=""
            style={{ borderRadius: "0px 0px 50px 0px" }}
            onLoad={imgLoadHandler}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ImageGrid;
