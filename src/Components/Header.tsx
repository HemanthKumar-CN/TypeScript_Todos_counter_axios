import React from 'react'


interface IHeaderProps { //can use types or interface
    label?: string,
    color?: string,
    children?: JSX.Element | JSX.Element[];
}

const Header = ({label = "app", children} : IHeaderProps) => {
  return (
    <div>
        <div>{label}</div>
    {children}
    </div>
    
  )
}

export default Header