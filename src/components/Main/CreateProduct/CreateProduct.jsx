import React, { useEffect, useState } from 'react'
import FormInput from '../../UI/inputs/FormInput/FormInput'
import Button from '../../UI/buttons/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import styles from './CreateProduct.module.css'
import FetchService from '../../../API/FetchService'
import Select from '../../UI/selects/Select/Select'
import { addProduct } from './createProductSlice'

const CreateProduct = () => {
    //const data = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const [categoriesObject, setCategoriesObject] = useState({})
    const [selects, setSelects] = useState({ category: '', subcategory: '', volume: '' })
    const [options, setOptions] = useState({ category: [], subcategory: [], volume: [] })
    const [inputs, setInputs] = useState({ name: '', price: '' })

    async function getCategoriesObject() {
        const responce = await FetchService.getCategories()
        setCategoriesObject(responce.data[0])
        setOptions(setObject(responce.data[0], 'пиво'))
    }

    function setObject(categories, event) {
        const object = {
            category: Object.keys(categories).filter(c => c != '_id'),
            subcategory: categories[event].subcategory,
            volume: categories[event].volume
        }
        return object
    }

    async function submitObject(e) {
        e.preventDefault()

        const newProduct = {
            category: selects.category,
            subcategory: selects.subcategory,
            name: inputs.name,
            volume: selects.volume,
            price: inputs.price,
        }

        console.log(newProduct)

        dispatch(addProduct(newProduct))
        await FetchService.addProduct(newProduct)
        setInputs({ name: '', price: '' })
    }

    useEffect(() => {
        getCategoriesObject()
    }, [])

    console.log('CreateProduct')
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={e => submitObject(e)}>
                <Select options={options.category} value={selects.category} onChange={(e) => {
                    setSelects({ ...selects, category: e })
                    setOptions(setObject(categoriesObject, e))
                }} />
                <Select options={options.subcategory} value={selects.subcategory} onChange={e => setSelects({ ...selects, subcategory: e })} />
                <Select options={options.volume} value={selects.volume} onChange={e => setSelects({ ...selects, volume: e })} />
                <FormInput
                    placeholder='Название...'
                    type='text'
                    value={inputs.name}
                    onChange={e => setInputs({ ...inputs, name: e.target.value })} />
                <FormInput
                    placeholder='Цена...'
                    type='number'
                    value={inputs.price}
                    onChange={e => setInputs({ ...inputs, price: e.target.value })} />
                <Button type='submit' >Додати</Button>
            </form>
        </div>
    )
}

export default CreateProduct
