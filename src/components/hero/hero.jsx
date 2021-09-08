import React from "react";
import { Header } from "..";
import play_button from '../../assets/svg/Play_button.svg';
import './hero.scss'

function Hero() {
  return (
    <section className="hero">
      <Header />
      <h1>
        Easily create or join a local nanny share with Hapu
      </h1>
      <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
      <div>
        <img src={play_button} alt="play button" />
        <a href="#section" >See hapu in action (27 seconds)</a>
      </div>
    </section>
  )
}

export default Hero;