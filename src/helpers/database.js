
export const getProductList = async() => fetch(`${process.env.REACT_APP_DATABASE_URL}/products.json`).then(res => res.json())
// export const updateProductList = async(newProductList) => fetch(`${process.env.REACT_APP_DATABASE_URL}/products`, { method: 'PUT', body: JSON.stringify(newProductList)})
