import React, { useState, useEffect } from 'react';
import hero1 from './assets/img/hero1.jpeg';
export default function Hero() {
  return (
    <section id="hero" style={{ backgroundImage: `url(${hero1})` }} class="d-flex align-items-center">
      <div class="container">
        <h1>Intrați în universul cristalelor</h1>
        <h2>Descoperiți produsele noastre din pietre semiprețioase!</h2>
        <a id="purpleGradient" href="#about" class="btn-get-started scrollto">Explorează</a>
      </div>
    </section>
  );
}