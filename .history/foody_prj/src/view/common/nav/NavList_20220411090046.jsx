import React from 'react'
import NavItem from './NavItem'

export default function NavList() {
    const navList = ['Search','Sign In', 'Cart'];

  return (
    {navList.map(item =>(<NavItem></NavItem>))}
  )
}
