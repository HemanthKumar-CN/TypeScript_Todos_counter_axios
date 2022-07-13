import React from 'react'

interface IButtonProps {
    label: string,
    handleClick: ()=> void
}

const Button = ({label, handleClick}: IButtonProps) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Button