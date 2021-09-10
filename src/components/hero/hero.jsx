import React, { useEffect, useState } from "react";
import { Header } from "..";
import play_button from '../../assets/svg/Play_button.svg';
import './hero.scss'

function Hero() {
  const [userCase, setUserCase ] = useState(parseInt(localStorage.getItem('userCase')));
  console.log(userCase);

  useEffect(() => {
    if( isNaN(userCase)) {
      console.log('ops')
      const number = Math.random() * 2;
      localStorage.setItem('userCase', number.toFixed() );
      setUserCase(parseInt(localStorage.getItem('userCase')))
      console.log(number.toFixed())
    }
  },[userCase]);

  return (
    <section className="hero">
      <Header />
      <div className="hero__content">
        {(userCase)
          ? <h1>Easily create or join a local nanny share with Hapu</h1>
          : <h1>Create the childcare you need at a price you can afford</h1>
        }
        {(userCase)
          ? <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
          : <p>Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
        }
        <div className="hero__content__playbutton">
          <img src={play_button} alt="play button" />
          <a href="#section" >See hapu in action (27 seconds)</a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
