import React from "react";
import calendar from '../../assets/svg/calendar.svg';
import logohapu from '../../assets/svg/Logo-hapu.svg';
import facebook from '../../assets/svg/Facebook.svg';
import instagram from '../../assets/svg/Instagram.svg';
import twitter from '../../assets/svg/Twitter.svg';

import './footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <h2>Become a nanny share host</h2>
      <h3>Takes less than 5 minutes to get started</h3>
      <div className="footer__calendar">
        <img src={calendar} alt="calendar" />
        <div>
          <h3>Create Your Nanny Share</h3>
          <h4>Takes less than 5 minutes</h4>
        </div>
      </div>
      <a href="#section" >Or browse local nanny-shares</a>
      <div className="footer__middle" >
        <img src={logohapu} alt="logotipo of hapu" />
        <div className="footer__middle__institutional" >
          <span>Share Your Nanny</span>
          <span>Our Story</span>
          <span>Blog</span>
          <span>Terms & Privacy</span>
        </div>
        <div className="footer__middle__socialmedia">
          <img src={facebook} alt="logotipo of hapu" />
          <img src={twitter} alt="logotipo of hapu" />
          <img src={instagram} alt="logotipo of hapu" />
        </div>
      </div>
      <hr/>
      <h4 className="footer__botton">Copyright © 2017 Hapu PTY Limited All rights reserved</h4>
    </footer>
  )
}

export default Footer;
