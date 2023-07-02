import React, { useState, useEffect } from 'react';
import sol from './assets/img/ANPC/SOL.png';
import anpc from './assets/img/ANPC/anpc.png';
import img from './assets/img/zodiac.jpeg'

export default function Footer() {
  return (

    <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img src={img} class="img-zodiac"></img>
          </div>

          <div id="pietre" class="col-sm-12 col-md-6">
            <h3>Pietre în funcție de zodii</h3>
            <p>Daca esti pasionat de astrologie, lasa-ne sa te conducem printr-o lista de pietre semipretioase recomandate pentru fiecare zodie.</p>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-aries" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Berbec</a></h4>
              <p class="description">Cuarț Roz, Opal, Coral, Ametist, Jad, Jasp, Acvamarin, Aventurin, Sodalit, Piatra Lunii, Onix, Ochi de Tigru, Malachit, Lapis Lazuli, Carneol.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-taurus" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Taur</a></h4>
              <p class="description">Cuarț roz, Agata, Acvamarin, Ametist, Carneol, Citrin, Unakit, Jad, Jasp, Lapis Lazuli, Coral Ochi de Tigru, Malachit, Aventurin, Turcoaz, Sodalit.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-gemini" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Gemeni</a></h4>
              <p class="description">Ametist, Agată, Acvamarin, Carneol, Jasp, Unakit, Ochi de Tigru, Jad, Onix, Opal, Turcoaz, Lapis Lazuli, Malachit, Citrin.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-cancer" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Rac</a></h4>
              <p class="description">Piatra Lunii, Cuarț roz, Acvamarin, Onix, Carneol, Opal, Aventurin, Ochi de Tigru, Coral, Lapis Lazuli, Turcoazm Jad, Jasp, Agată.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-leo" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Leu</a></h4>
              <p class="description">Acvamarin, Agată, Ametist, Carneol, Citrin, Onix, Piatra Soarelui, Turcoaz, Jad, Jasp, Ochi de Tigru.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-virgo" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Fecioara</a></h4>
              <p class="description">Agată, Angelit, Cuarț Roz, Opal, Ochi de Tigru, Piatra Lunii, Jad, Malachit, Carneol, Citrin, Ametist, Jasp Roșu, Jasp Verde, Onix, Lapis Lazuli.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-libra" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Balanta</a></h4>
              <p class="description">Opal, Lapis Lazuli, Carneol, Jad, Jasp, Piatra, Coral Soarelui,Unakit, Malachit, Piatra Lunii, Ametist, Cuarț Roz, Ochi de Tigru, Acvamarin, Citrin.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-scorpio" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Scorpion</a></h4>
              <p class="description">Coral, Angelit, Acvamarin, Ametist, Carneol, Jad, Topaz, Turcoaz, Unakit, Sodalit, Piatra Lunii, Ochi de Tigru, Malachit, Onix.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-sagittarius" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Sagetator</a></h4>
              <p class="description">Acvamarin, Agată, Angelit, Sodalit, Lapis Lazuli, Ametist, Coral, Aventurin, Citrin, Cuarț Roz, Onix, Topaz, Piatra Lunii, Malachit.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-capricorn" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Capricorn</a></h4>
              <p class="description">Agat, Acvamarin, Ametist, Onix, Sodalit, Cuarț Roz, Citrin, Carneol, Turcoaz, Piatra Lunii, Opal, Ochi de Tigru, Jad, Jasp.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-aquarius" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Varsator</a></h4>
              <p class="description">Angelit, Acvamarin, Ametist, Cuarț Roz, Jasp, Lapis Lazuli, Malachit, Ochi de Tigru, Onix, Opal, Piatra Lunii, Turcoaz, Topaz.</p>
            </div>

            <div class="icon-box">
              <div id="zodiacSigns" class="icon"><iconify-icon icon="mdi:zodiac-pisces" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Pesti</a></h4>
              <p class="description">Angelit, Acvamarin, Ametist, Citrin, Carneol, Jad, Jasp, Malachit, Piatra Lunii, Piatra Soarelui, Turcoaz, Sodalit, Opal, Lapis Lazuli, Coral.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}