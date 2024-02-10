import React from 'react'
import style from './FormInput.module.css'

const Input = (props) => {
	const labelName = props.placeholder.slice(0, -3)
    return (
    	<div className={style.container}>
            <input name={props.placeholder} className={style.input} {...props} required />
    		<label htmlFor={props.placeholder} className={style.label}>{labelName}</label>
  		</div>
    )
}

export default Input