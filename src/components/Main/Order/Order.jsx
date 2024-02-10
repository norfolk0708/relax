import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Order.module.css'
import Button from '../../UI/buttons/Button/Button'
import FetchService from '../../../API/FetchService'

const Order = () => {
    const orderAmount = useSelector(state => state.orderAmount.value)
    const data = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const [categoriesObj, setCategoriesObj] = useState([])

    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])

    async function getCategoriesObject() {
        const responce = await FetchService.getCategories()

        console.log(responce.data[0], 'categories in Order')
        setCategoriesObj(responce.data[0])

        console.log(Object.keys(responce.data[0]).filter(c => c != '_id'), 'categories filter in Order')
        setCategories(Object.keys(responce.data[0]).filter(c => c != '_id'))
    }

    /* function addSub(name) {
         
         console.log(categoriesObj[name].subcategory, 'subcategories in Order')
         //console.log(categoriesObj.вина)
 
         setSubCategories(categoriesObj[name].subcategory)
     }*/

    useEffect(() => {
        getCategoriesObject()
    }, [])


    return (
        <div className={styles.container}>
            {categories.map(category =>
            (
                <div key={category}>
                    <div
                        className={styles.categories}
                        onClick={() => setSubCategories(categoriesObj[category].subcategory)}
                    >
                        {category}
                    </div>
                    {categoriesObj[category].subcategory.includes(subCategories[0]) && subCategories.map(sub => (
                        <div className={styles.categories} key={sub}>{sub}</div>
                    ))}

                </div>
            ))}

            <Button >Додати</Button>
            <Button>Видалити</Button>
        </div>
    )
}

export default Order
