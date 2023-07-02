import React, { useState, useEffect } from 'react';
import img1 from './assets/img/4100742.jpg'
import img2 from './assets/img/pendant.png'
import img3 from './assets/img/product.png'

export default function Produse() {
  return (
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Categorii de produse</h2>
          <p>Vă prezentăm gama noastră de produse pe categorii. Pe site-ul nostru puteți găsi atât brățări cât și pandantive din pietre semiprețioase. Apăsați pe o categorie pentru a vedea toate produsele din aceasta.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box homeCard">
              <div class="icon"><img class="image-icon" src={img1} alt="Bracelet Icon" /></div>
              <h4><a href="">Brățări</a></h4>
              <p>Atât din cipsuri cât și din pietre finisate rotund, pe diferite dimensiuni.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box homeCard">
              <div class="icon"><img class="image-icon" src={img2} alt="Bracelet Icon" /></div>
              <h4><a href="">Pandantive</a></h4>
              <p>Pe diferite forme, în formă de glonț, lacrimă sau inimă, pentru a vă arăta iubirea!</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box homeCard">
              <div class="icon"><img class="image-icon" src={img3} alt="Bracelet Icon" /></div>
              <h4><a href="">Alte Produse</a></h4>
              <p>În curând, vă vom prezenta și alte produse din gama noastră.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}