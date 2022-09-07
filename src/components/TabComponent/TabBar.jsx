import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from './TabBar.module.css'
import { StylesContext } from '@material-ui/styles';
import Featuers from './Featuers';
import RoomAndPrice from './RoomAndPrice';

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
          <Typography>{children}</Typography>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TabBar = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Box className={style.tabContainer}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Features" {...a11yProps(1)} />
          <Tab label="Room & Price" {...a11yProps(2)} />
          <Tab label="Review" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className={style.tabDetail}>
        {props.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Featuers />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RoomAndPrice />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
}






// import React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import style from './TabBar.module.css'
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }



// export default function FullWidthTabs(props) {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <div className={style.tabContainer}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           className={style.TabHeadings}
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="Description" {...a11yProps(0)} />
//           <Tab label="Features" {...a11yProps(1)} />
//           <Tab label="Room & Price" {...a11yProps(2)} />
//           <Tab label="Review" {...a11yProps(3)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction ='y'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           {props.description}
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//         {props.description}

//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Item Three
//         </TabPanel>
//         <TabPanel value={value} index={3} dir={theme.direction}>
//           Item Three
//         </TabPanel>
//       </SwipeableViews>
//     </div>
//   );
// }
