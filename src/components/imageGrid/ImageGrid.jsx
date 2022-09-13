import React, { Fragment } from "react";

import styles from "./ImageGrid.module.css";

const ImageGrid = (props) => {
  // const images = [
  //   "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg",
  // ];
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
    </Fragment>
  );
};

export default ImageGrid;
