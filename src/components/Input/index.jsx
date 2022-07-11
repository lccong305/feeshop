import React from 'react'
import './input.scss'

const Input = (props) => {
    const { type, placeholder, className, handleOnChange, onChange, onPassword, id,
        name,
        value } = props
    return (
        <input id={id} value={value} name={name} onChange={type === 'text' ? onChange : onChange} className={className} placeholder={placeholder} type={type} />
    )
}

export default Input