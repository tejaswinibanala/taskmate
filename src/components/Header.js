import React from 'react'
import Logo from '../assets/logo.svg'
const Header = ({theme, setTheme}) => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt=''></img>
        <span>Taskmate</span>
      </div>
      <span className='themeSelector'>
        <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
        <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
        <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
        <span onClick={() => setTheme("gOne")} className={ theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
        <span onClick={() => setTheme("gTwo")} className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
        <span onClick={() => setTheme("gThree")} className={ theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
      </span>
    </header>
  )
}

export default Header