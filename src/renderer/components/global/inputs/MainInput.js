import React from 'react'
import { BiSearch } from 'react-icons/bi';

export const MainInput = ({value,onChange,onClick,placeholder,type}) => {
  return (
    <div className='main-input-container'>
    <BiSearch className='search-icon'  />
    <input
        value={value}
        onChange={onChange}
        onClick={onClick}
        className='main-input'
        placeholder={placeholder ?? "Search for your game..."}
        type={type}
        />
    </div>
)
}
