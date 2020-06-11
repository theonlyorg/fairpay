import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuIcon, Tab, Tabs } from '@material-ui/core';
import { PersonRounded, GraphicEqRounded } from '@material-ui/icons';

const Header = () => {
  return (
    <AppBar position="static" id="appBar">
      <Toolbar>
        <Typography variant="h4">
          Fairpay
        </Typography>
        {/* <Typography variant="h6">
          Dashboard
        </Typography> */}
        <Tab label="Profile" icon={<PersonRounded />} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

/* Value property should be added to the Tabs component -> https://material-ui.com/components/tabs/ */
// <Tabs variant="fullWidth">
// <Tab label="FairPay" icon={<GraphicEqRounded />} />
// 
// </Tabs>