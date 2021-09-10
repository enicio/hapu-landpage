import React from "react";
import badge from '../../assets/svg/Badge.svg'
import './header.scss'

function Header() {
  return (
    <header className="header" >
      <div className="header__section">
        <img className="hearder__icon" src={ badge } alt="Hapu icon" />
        <nav className="header__section__navlink">
          <ul>
            <li><a href="#section" >Create Your Nanny Share</a></li>
            <li><a href="#section" >Browse Shares</a></li>
            <li><a href="#section" >Our Story</a></li>
          </ul>
        </nav>
      </div>
      <div className="header__section">
        <button className="header__button">Become a Nanny Share Host</button>
        <span className="header__signin">Sign In</span>
      </div>
    </header>
  )
}

export default Header;
