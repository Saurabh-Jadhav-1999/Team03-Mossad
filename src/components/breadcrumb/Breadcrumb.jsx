import React from "react";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const Breadcrumb = (props) => {
  return (
    <div style={{margin: "2%"}}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {props.links}
      </Breadcrumbs>
    </div>
  );
};


export default Breadcrumb;
