import React, { Fragment,useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ImageGrid.module.css";

const ImageGrid = (props) => {
 
  return (
    <Fragment>
  
        <div className={styles.container}>
          <div className={styles.leftPane}>
            <img
              // src="https://algedra.ae/files/blog/minimalism/shutterstock_102801122256.jpg"
              src={`${props.links[0]}`}
              alt=""
              style={{ borderRadius: "50px 0px 0px 50px" }}
            />
          </div>
          <div className={styles.rightPane}>
            {/* <div> */}
            <img
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASmcf18-IhnOC3fI-mm9WTAxsMN72uyfjDA&usqp=CAU"
              src={`${props.links[1]}`}
              alt=""
              style={{ borderRadius: "0px 50px 0px 0px" }}
            />
            {/* </div> */}
            {/* <div> */}
            <img
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASmcf18-IhnOC3fI-mm9WTAxsMN72uyfjDA&usqp=CAU"
              src={props.links[2]}
              alt=""
              styles={{ borderRadius: "50px 0px 0px 50px " }}
            />
            {/* </div> */}
            {/* <div> */}
            <img
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASmcf18-IhnOC3fI-mm9WTAxsMN72uyfjDA&usqp=CAU"
              src={`${props.links[3]}`}
              alt=""
              style={{ borderRadius: "0px 0px 50px 0px" }}
            />
            {/* </div> */}
          </div>
        </div>
      {/* )} */}
    </Fragment>
  );
};

export default ImageGrid;
