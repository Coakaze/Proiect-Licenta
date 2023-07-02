import React, { useState, useEffect } from 'react';
import sol from './assets/img/ANPC/SOL.png';
import anpc from './assets/img/ANPC/anpc.png';

export default function Footer() {
  return (
    <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Mărțișoare din pietre semiprețioase</h3>
              <p>
                Județul Galați<br />
                Galați<br />
                România <br /><br />
                <strong>Telefon:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Link-uri utile</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Acasa</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/#about">Zodiac</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/pietre">Pietre</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/produse">Produse</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/#galerie">Galerie</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <div className="SOL">
                <a href="https://anpc.ro/ce-este-sal/"> <img src={sol} className="anpc"></img></a>
                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"><img src={anpc} className="img-sol"></img></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Abonațivă la newsletter-ul nostru</h4>
              <p>Introduceți adresa dumneavoastră de email</p>
              <div className="container">
                <input type="text" className="form-control form-rounded" placeholder="Email"></input>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container d-md-flex py-4">

        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>Mărțișoare din pietre semiprețioase</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://www.linkedin.com/in/caragea-theodor">Caragea Theodor</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}