import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function TitleBar() {

  return (
    <>
      <AppBar position="static" >
        <Toolbar>
          <Box sx={{ flexGrow: 1, textAlign: "center"}}>
            <img src={'storelogo.png'} alt={"this is the logo"} width={"250px"}/> 
            <Typography variant="h5" component="div" fontFamily="Courier New"> inventory </Typography>
            <InventoryIcon/> <InventoryIcon/> <InventoryIcon/>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}