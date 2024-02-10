import React, { useState } from 'react'
import styles from '../ProductCell/ProductCell.module.css'
import check from '../../../../icons/check.png'

const ProductCell = ({ name, updateCell, id, value }) => {
    const [activeCell, setActiveCell] = useState(false)
    const [inputValue, setInputValue] = useState(name)

    function update(e) {
        e.preventDefault()
        setActiveCell(prev => !prev)
        if (name !== inputValue) {
            updateCell(id, value, inputValue)
        }
    }
    return activeCell
        ? <div>
            <input
                className={styles.input}
                placeholder={name}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <img
                src={check}
                alt={'check'}
                className={styles.img}
                onClick={(e) => update(e)}
            />
        </div>
        : <div
            style={{ padding: '0 1rem' }}
            onClick={() => setActiveCell(prev => !prev)}
        >
            {name}
        </div>
}

export default ProductCell
