import React from "react";
import badge from '../../assets/svg/Badge.svg'
import './header.scss'

function Header() {
  return (
    <header className="header" >
      <img className="hearder__icon" src={ badge } alt="Hapu icon" />
      <button className="header__button">Become a Nanny Share Host</button>
    </header>
  )
}

export default Header;
