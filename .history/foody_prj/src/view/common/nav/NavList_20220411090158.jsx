import React from 'react'
import NavItem from './NavItem'

const navList = ['Search','Sign In', 'Cart'];
export default function NavList() {

  return (
    {navList.map((item,idx) =>(

    <NavItem key={idx} name={item}></NavItem>
    
    ))}
  )
}
