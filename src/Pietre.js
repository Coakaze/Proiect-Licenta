import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import TopBar from './TopBar.js';
import Footer from './Footer.js';
import Loader from 'react-spinners/CircleLoader';
import img1 from './assets/img/pietre/ametist.jpeg';
import img2 from './assets/img/pietre/coral.jpeg';
import img3 from './assets/img/pietre/cuart.jpeg';
import img4 from './assets/img/pietre/turcoaz.jpeg';
import img5 from './assets/img/pietre/malakit.jpeg';
import img6 from './assets/img/pietre/tigru.jpeg';
import img7 from './assets/img/pietre/aventurin.jpeg';
import img9 from './assets/img/pietre/unakit.jpeg';
import img11 from './assets/img/pietre/soare.jpeg';
import img13 from './assets/img/pietre/carneol.jpeg';
import img14 from './assets/img/pietre/sodalit.jpeg';


export default function Pietre() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="Loader">
          <Loader
            size={50}
            color={"#123abc"}
            loading={loading}
          />
          <p className="Loader-text">Pietrele isi incarca energia</p>
        </div>
      ) : (
        <>
          <TopBar />
          <Header isActive='pietre' />
          <section id="departments" class="departments">
            <div class="container">

              <div class="section-title">
                <h2>Pietre</h2>
                <p>De-a lungul timpului pietrele semiprețioase au dovedit ca au o multitudine de proprietăți terapeutice, spirituale și emană diferite enegerii.
                  În funcție de piatră, acestea au diferite roluri care ne ajută in vindecarea spirituală, emoțională si fizică a corului nostru.
                </p>
              </div>

              <div class="row gy-4">
                <div class="col-lg-3">
                  <ul class="nav nav-tabs flex-column">
                    <li class="nav-item">
                      <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Ametist</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Aventurin</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Carneol</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Coral</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Cuart Roz</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-6">Jad</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-7">Lapis Lazuli</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-8">Malachit</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-9">Ochi de Tigru</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-10">Onix</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-11">Opal</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-12">Piatra Lunii</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-13">Piatra Soarelui</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-14">Sodalit</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-15">Turcoaz</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab-16">Unakit</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-9">
                  <div class="tab-content overflow-hidden" >
                    <div class="tab-pane active show" id="tab-1">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Ametist</h3>
                          <p class="fst-italic"> Fiind o piatră spirituală, acesta contribuie la protejarea minții de ganduri negative si stres. Oferă o minte clară si sitmulează concentrarea</p>
                          <p>Ametistul este o piatră cu rol protector și oferă o foarte mare vibrație spirituală. Protejează de energiile negative si oferă o senzație de calm. Contribuie la reducerea dependențelor.</p>
                          <button class="all-pietre mb-0">Vezi toate produsele din Ametist</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img1} alt="" class="img-fluid ametist" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-4">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Coral</h3>
                          <p class="fst-italic">Are puternic rol protector, reduce sentimentul de frustrare si stimuleaza,creativitatea, optimismul,intelepciunea </p>
                          <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img2} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-5">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Cuart Roz</h3>
                          <p class="fst-italic">Este o piatra a iubirii pure, a dragostei,aduce prietenie si fericire.Reduce stresul, depresia, frica, resentimentele, regretele, furia, esecul, gelozia, vinovatia.</p>
                          <p>Semnificația sa este, de asemenea, strâns legată de culoarea sa. Rozul reprezintă tandrețea, liniștea, feminitatea, compasiunea și dragostea. Energia sa blândă reaprinde flacăra unei relații, aducând bucurie, pasiune și mulțumire, în timp ce farmecul său subtil are un efect liniștitor. Cristalul de cuarț alb are un efect similar.</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img3} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-15">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Turcoaz</h3>
                          <p class="fst-italic">I se mai spune si piatra vietii. Are puternic rol protector. Ajuta la inceperea noilor proiecte.</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img4} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane overflow-hidden" id="tab-8">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Malachit</h3>
                          <p class="fst-italic">Malachitul aduce fidelitate in plan sentimental, iubire adevarata, echilibru, buna dispozitie, armonie, progres si schimbari  favorabile.</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img5} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-9">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Ochi de Tigru</h3>
                          <p class="fst-italic">Este o piatra a sanatatii, a fericirii,  a curajului si optimismului. Confera o atitudine pozitiva de viata  si buna dispozitie.</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img6} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-2">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Aventurin</h3>
                          <p class="fst-italic">Confera: echilibru, pace, inspiratie, energie, prosperitate, succes, noroc la jocuri, calitati de lider.Puternic rol curativ, fortifica organismul.</p>
                          <p>Aventurinul este o piatră a prosperității, promovează compasiunea, încurajează răbdarea și ameliorează nevrozele severe. Se crede, de asemenea, că sporește creativitatea, calmează furia și echilibrează energiile bărbaților și femeilor.</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img7} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-10">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Onix</h3>
                          <p class="fst-italic">Piatra a sigurantei si a stabilitatii ,protejeaza asupra dusmanilor, scade stresul si teama de necunoscut.</p>
                          <p>Onixul este o piatră cu vibrații puternice de protecție, putere, concentrare și voință. Această piatră este concepută pentru a te ajuta să mergi mai departe. Prin activarea chakrei rădăcinii, a plexului solar și a celui de-al treilea ochi, vă puteți împământa complet. Pietrele de onix nu sunt doar o sursă de energie pentru a vă ajuta să începeți să urcați spre visele voastre, ci și pentru a vă proteja pe noul vostru drum. Acesta poate crea un scut în jurul aurei tale și poate împiedica intrarea energiei negative.</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img5} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-16">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Unakit</h3>
                          <p class="fst-italic">Confera echilibru emotional, sanatate, eliberare</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img9} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-11">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Opal</h3>
                          <p class="fst-italic">Este o piatra a iubirii. Are puternic rol protector. Aduce noroc, bogatie si bani</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img5} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-13">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Piatra Soarelui</h3>
                          <p class="fst-italic">Puternic rol protector, puternic efect stimulator pentru minte, trup si suflet.</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img11} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-12">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Piatra Lunii</h3>
                          <p class="fst-italic">Este o piatra a norocului si a emotiilor, a iubirii si a sperantei</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img11} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-3">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Carneol</h3>
                          <p class="fst-italic"> Este o piatra a stabilizarii cu o energie foarte inalta , excelenta pentru reablilitarea vitalitatii si a motivatiei .</p>
                          <p>Carneolul favorizează încrederea de sine și percepția de sine, ghidându-vă către lucrurile profunde care ce vă motivează, ajutându-vă să depășiți condiționările negative și să atingeți o stare de stabilitate. Din punct de vedere mental, carneolul îmbunătățește abilitățile analitice și clarifică percepția. Alungă gândurile efemere în timpul meditației și îi ajută pe visători să rămână cu picioarele pe pământ. Îmbunătățește concentrarea și ameliorează oboseala mentală. Din punct de vedere emoțional, această piatră este un protector puternic împotriva invidiei, a mâniei și a resentimentelor din partea ta și a celorlalți. Calmează furia, alungă negativitatea emoțională și o înlocuiește cu o dorință de viață.</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img13} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="tab-14">
                      <div class="row gy-4">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Sodalit</h3>
                          <p class="fst-italic">Sodalitul aduce o atitudine deschisa fata de cei din jur, success in cariera,claritate mentala si psihica,echilibru mental,ordine,focalizare, calm, detasare, vitalitate.</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                          <button class="all-pietre">Vezi toate pietrele</button>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img src={img14} alt="" class="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}