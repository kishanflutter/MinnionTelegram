import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import levelConfig from "@/config/level-config";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ReportScreen() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
    className="flex-1 px-5 pb-20 bg-center bg-cover"

    style={{
      backgroundImage: `url(${levelConfig.bg[1]})`,
    }}>
      <AppBar position="static"
      sx={{
        borderRadius: '16px', // Border radius ko yahan customize kar sakte hain
        overflow: 'hidden', // Rounded corners ke effect ko maintain karne ke liye
        margin: '10px', // AppBar ko screen ke edge se thoda andar rakhne ke liye
      }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
         
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          <Tab label="Sponser" {...a11yProps(0)} style={{backgroundColor : '#12588b'}} />
          <Tab label="Level" {...a11yProps(1)} style={{backgroundColor : '#12588b'}}/>
          <Tab label="Salary" {...a11yProps(2)} style={{backgroundColor : '#12588b'}} />
          <Tab label="Claim" {...a11yProps(2)} style={{backgroundColor : '#12588b'}} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}  >
        
        <div style={{color:'white'}}>
        Sponser Reward Details will Shows in Comming Soon
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      <div style={{color:'white'}}>
      Level Reward Details will Shows in Comming Soon

        </div>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
      <div style={{color:'white'}}>
      Salary Reward Details will Shows in Comming Soon

        </div>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
      <div style={{color:'white'}}>
      Claim Reward Details will Shows in Comming Soon

        </div>
              </TabPanel>
              </div>

              
  );
}
