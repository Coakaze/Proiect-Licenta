import img1 from './assets/img/4100742.jpg';
import img2 from './assets/img/pendant.png';
import img3 from './assets/img/martisor.png';

export default function Why() {
  return (
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div id="purpleGradient" class="content">
              <h3>De ce noi?</h3>
              <p>
                Pentru că activăm de câțiva ani pe piață, iar produsele oferite de noi sunt de o calitate superioară, reprezentând o amintire plăcută care persistă în timp.
              </p>
              <div class="text-center">
                <a href="#about" class="more-btn buttonHover">Descopera mai mult! <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <img class="image-icon mx-auto mb-3" src={img1} alt="Bracelet Icon"></img>
                    <h4>Brățări din pietre</h4>
                    <p>Avem atat bratari din cipsuri cat si din pietre rotund finisate. Marimile pietrelor sunt variabile</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <img class="image-icon mx-auto mb-3" src={img2} alt="Pendant Icon"></img>
                    <h4>Pandantive din pietre</h4>
                    <p>Acestea au diferite forme si marimi.</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <img class="image-icon mx-auto mb-3" src={img3} alt="Pendant Icon"></img>
                    <h4>Alte Mărțișoare</h4>
                    <p>Va invitam sa descoperiti toata gama de martisoare oferita de noi!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section >
  );
}