import React, { Fragment } from "react";
import styles from "./ImageGrid.module.css";

const ImageGrid = (props) => {

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <img
            src={`${props.links[0]}`}
            alt=""
            style={{ borderRadius: "50px 0px 0px 50px" }}
          />
        </div>
        <div className={styles.rightPane}>
          <img
            src={`${props.links[1]}`}
            alt=""
            style={{ borderRadius: "0px 50px 0px 0px" }}
          />
          <img
            src={props.links[2]}
            alt=""
            styles={{ borderRadius: "50px 0px 0px 50px " }}
          />
          <img
            src={`${props.links[3]}`}
            alt=""
            style={{ borderRadius: "0px 0px 50px 0px" }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ImageGrid;
