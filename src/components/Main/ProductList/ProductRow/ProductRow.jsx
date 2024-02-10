import React from 'react'
import ProductCell from '../ProductCell/ProductCell'
import basket from '../../../../icons/basket.png'
import styles from '../ProductRow/ProductRow.module.css'

const ProductRow = ({ product, updateCell, removeProduct }) => {
    return (
        <>
            <li className={styles.row} key={product._id} id={product._id}>
                <ProductCell
                    value={'name'}
                    id={product._id}
                    name={product['name']}
                    updateCell={updateCell}
                />
                <ProductCell
                    value={'volume'}
                    id={product._id}
                    name={product['volume']}
                    updateCell={updateCell}
                />
                <ProductCell
                    value={'price'}
                    id={product._id}
                    name={product['price']}
                    updateCell={updateCell}
                />
                <img
                    src={basket}
                    alt={'basket'}
                    onClick={e => removeProduct(e.target.parentNode.id)}
                />
            </li>
        </>
    )
}
//
export default ProductRow


/*{['name', 'volume', 'price'].map(e => {
                    <ProductCell
                        value={e}
                        id={product._id}
                        name={product[e]}
                        onClickT={update}
                    />
                })}*/