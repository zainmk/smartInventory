import '../App.js';
import React, { useState, useEffect } from "react";

import TitleBar from '../components/TitleBar.js';
import CardList from '../components/CardList.js';
import Box from '@mui/material/Box';

import { getProductList } from '../helpers/database.js'


function MainPage({ app }) {

  const [productList, setProductList] = useState({})

  useEffect(()=> {
    getProductList().then(res => setProductList(res ? res : {}))
  }, [])

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height:"100vh" }}>
        <TitleBar  />
        <Box sx={{ flex: 1, backgroundSize: "100%", backgroundImage:"url('falling-money.gif')" }}>
          <CardList productList={productList} setProductList={setProductList} />
        </Box>
      </Box>
  );
}

export default MainPage;