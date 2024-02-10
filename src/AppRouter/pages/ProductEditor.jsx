import React, { useEffect } from 'react'
import CreateProduct from '../../components/Main/CreateProduct/CreateProduct'
import ProductList from '../../components/Main/ProductList/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../components/Main/CreateProduct/createProductsAsync'

const ProductEditor = () => {
    const dispatch = useDispatch()
    const productsState = useSelector(state => state.products)

    useEffect(() => {
        productsState.products.length === 1 && dispatch(fetchAllProducts())
    }, [])

    return (
        <>
            {
                productsState.status
                    ? productsState.error

                        ? <h1>{productsState.error}</h1>
                        : <>
                            <CreateProduct />
                            <ProductList data={productsState.products} />
                        </>

                    : <h1>Loading..........</h1>
            }
        </>
    )
}

export default ProductEditor
/*<CreateProduct />
                    <ProductList data={allProducts} />*/

/*const content = () => {
let result
switch (productsState.status) {
case 'loading':
console.log(productsState.status, 'loading')
result = <h1>Loading..........</h1>
case 'failed':
console.log(productsState.status, 'failed')
result = <h1>{error}</h1>
case 'succeeded':
console.log(allProducts)
console.log(productsState.status, 'succeeded')
case 'idle':
console.log(productsState.status, 'idle')

default:
(<h1>Dont work</h1>)
}
return result




let content

    switch (productsState.status) {
        case 'loading':
            content = <h1>Loading..........</h1>
            break;

        case 'succeeded':
            content =
                <>
                    <CreateProduct />
                    <ProductList data={productsState.products} />
                </>
            break;

        case 'failed':
            content = <h1>{productsState.error}</h1>
            break;

        default:
            break;
    }

    return (<>{content}</>)
}*/