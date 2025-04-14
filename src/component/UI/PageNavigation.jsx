import React from 'react'
import { NavLink } from 'react-router-dom';

const PageNavigation = ({title}) => {
  return (
    <div className='navigation'>
        <div className='navi-container'>
      <NavLink to="/" className="navi-con--a"> Home </NavLink>
      <span className='seperator '> /</span>
      <span className='title'>{title}</span>
    </div>
    </div>
  )
}

export default PageNavigation;
