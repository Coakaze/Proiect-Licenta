import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import AuthenticationModal from './Components/Authentication/AuthenticationModal';
import { useAuth } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CartButton from './Components/Cart/CartButton';
import './App.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { currentUser, logout } = useAuth();

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  function handleClick() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    function toggleMenu() {
      const navbarToggle = select('.mobile-nav-toggle');
      navbarToggle.removeEventListener('click', handleClick);
      navbarToggle.addEventListener('click', handleClick);

      function handleClick(e) {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      }
    }

    toggleMenu()
  }, [])

  return (
    <><header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">

        <h1 className="logo me-auto"><a href="/acasa">Mărțișoare din pietre semiprețioase</a></h1>

        <nav id="navbar" className="navbar order-last order-lg-0" onClick={handleClick}>
          <ul>
            {/* <li><a className={"nav-link scrollto" + (props.isActive === 'home' ? ' active' : '')} href="/acasa">Acasă</a></li> */}
            <li><Link className={"nav-link scrollto" + (props.isActive === 'home' ? ' active' : '')} to="/acasa">Acasă</Link></li>
            <li><Link className={"nav-link scrollto" + (props.isActive === 'pietre' ? ' active' : '')} to="/pietre">Pietre</Link></li>
            <li><Link className={"nav-link scrollto" + (props.isActive === 'produse' ? ' active' : '')} to="/produse">Brațări</Link></li>
            <li><Link className={"nav-link scrollto" + (props.isActive === 'pandantive' ? ' active' : '')} to="/pandantive">Pandantive</Link></li>
            {!currentUser && <li><AuthenticationModal></AuthenticationModal></li>}
            {currentUser && <li id="disabledHover"><Link to="/profil">
              <span className="disableDisplay"><iconify-icon icon="healthicons:ui-user-profile" width="28" height="28"></iconify-icon></span>

              <span className="ms-2">Contul meu</span>
            </Link></li>}
            {currentUser && <li id="disabledHover"><CartButton></CartButton></li>}
          </ul>
          <RxHamburgerMenu className="mobile-nav-toggle" />
        </nav>

      </div>
      {props.isProfile &&
        <div style={{ borderTop: "1px solid #d7dbe0" }} className="container d-flex align-items-center profile-navbar">
          <nav id="navbar" className="navbar navbar-expand">
            <div className="pt-2">
              <button onClick={async e => {
                e.preventDefault();
                logout();
                navigate(0);

              }} style={{ color: "#4f4f4f", borderRight: "1px solid #bec2bf", borderRadius: "0%", paddingRight: "20px" }} className="btn btn-sm">Delogheaza-te</button>
              <button onClick={() => { navigate('/istoric-comenzi') }} style={{ color: "#4f4f4f", borderRadius: "0%", marginLeft: "20px" }} className="btn btn-sm">Comenzile dumneavoastra</button>
            </div>
          </nav>

        </div>}
    </header>
      {!props.isHome && <div style={{ height: "100px" }}></div>}
      {
        props.isProfile && <div style={{ height: "120px" }}></div>
      }
    </>

  );
}