import Cards from './Cards.js';
import Box from '@mui/material/Box';
import SearchCard from './SearchCard.js';
import ProductCard from './ProductCard.js';


function CardList({ productList }){

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px", alignItems: "center", }}>
        <Cards type={<SearchCard />} />
        {Object.keys(productList)?.map((product) => (
            <Cards 
                type={<ProductCard data={productList[`${product}`]} title={product}/>}
            />
        ))}
    </Box>
    )
}
export default CardList;