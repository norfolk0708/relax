import React from 'react'
import style from './Select.module.css'

const Select = ({ options, value, onChange }) => {

	return (
		<div className={style.box}>
			<select
				className={style.select}
				value={value}
				onChange={e => onChange(e.target.value)}
			>
				{options.length > 0 && options.map(option => 
					<option 
						
						value={option} 
						key={option}
					>
						{option}
					</option>
				)}
			</select>
		</div>
			
	)
}

export default Select

