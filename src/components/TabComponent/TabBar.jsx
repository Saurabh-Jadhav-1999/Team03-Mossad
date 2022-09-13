import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./TabBar.module.css";
import { Featuers } from "./Featuers";
import { RoomAndPrice } from "./RoomAndPrice";
import { Review } from "./Review";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TabBar = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const comment = `We had the most spectacular view. Beautifully appointed rooms. Awesome food & curteous staff. Highly recommend it.`;
  return (
    <Box className={styles.tabContainer}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Description"
            {...a11yProps(0)}
            className={styles.headingLabel}
          />
          <Tab
            label="Features"
            {...a11yProps(1)}
            className={styles.headingLabel}
          />
          <Tab
            label="Room & Price"
            {...a11yProps(2)}
            className={styles.headingLabel}
          />
          <Tab
            label="Review"
            {...a11yProps(3)}
            className={styles.headingLabel}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className={styles.tabDetail}>
        {props.description.description}
      </TabPanel>
      <TabPanel value={value} index={1} className={styles.tabDetail}>
        <Featuers />
      </TabPanel>
      <TabPanel value={value} index={2} className={styles.tabDetail}>
        <RoomAndPrice />
      </TabPanel>
      <TabPanel value={value} index={3} className={styles.tabDetail}>
        <Review
          userName={"Adam Grant"}
          userCountry="Ireland"
          follwers="45"
          reviews="45"
          comment={comment}
          date="15.06.2021"
        />
      </TabPanel>
    </Box>
  );
};

