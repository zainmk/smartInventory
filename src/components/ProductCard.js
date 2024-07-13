import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { getStorage, ref, getDownloadURL } from "firebase/storage";

import LibraryTools from './LibraryTools'


function ProductCard({ data, title }){

    const [imageURL, setImageURL] = useState()

    useEffect(()=> {
      const storage = getStorage();
      getDownloadURL(ref(storage, `${title}.png`)).then((url) => setImageURL(url))
    }, [title])

    return ( 
        <Box sx={{ display: "flex", gap:"20px", flexDirection: "row" }}>
            <Box>
                <Paper elevation={24} sx={{ width :"250px" }}> 
                    { imageURL && <img alt={''} src={imageURL} style={{ width:"100%" }} /> }
                </Paper>
            </Box>
            <Box>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ fontSize: 24 }} color="text.secondary">
                    $ {data.Price} 
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.Description}
                </Typography>
                <LibraryTools />
            </Box>
        </Box>
    )
}
export default ProductCard;