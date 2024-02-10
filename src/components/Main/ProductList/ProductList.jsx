import React from 'react'
import styles from '../ProductList/ProductList.module.css'
import FetchService from '../../../API/FetchService'
import { useDispatch } from 'react-redux'
import { deleteProduct, updateProduct } from '../CreateProduct/createProductSlice'
import ProductRow from './ProductRow/ProductRow'

const ProductList = ({ data }) => {
    const dispatch = useDispatch()

    function removeProduct(id) {
        console.log(id, 'delete id')
        FetchService.deleteProduct(id)
        dispatch(deleteProduct(id))
    }

    function updateCell(id, value, newName) {
        console.log(id)
        console.log(value)
        console.log(newName)
        dispatch(updateProduct({ value: [value], id: [id], newName: (newName) }))
        FetchService.updateProduct(id, { [value]: newName })
    }

    return (
        <div className={styles.list}> Cписок товаров
            {data.length > 0 && data.map(product =>
                <ProductRow product={product} updateCell={updateCell} removeProduct={removeProduct} key={product._id} />
            )}
        </div>
    )
}
export default ProductList