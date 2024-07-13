import * as React from 'react'
import { IconButton } from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';


function LibraryTools(){

    return (
        <>
            <IconButton> <SellIcon/> </IconButton>
            <IconButton> <StorefrontIcon/> </IconButton>
            <IconButton> <FacebookIcon/> </IconButton>
            <IconButton> <LanguageIcon/> </IconButton>
        </>
        
    )

}
export default LibraryTools;