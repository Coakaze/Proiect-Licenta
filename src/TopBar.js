import React, { useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export default function TopBar() {
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  useEffect(() => {
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.add('topbar-scrolled')
          }
        } else {
          selectHeader.classList.remove('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.remove('topbar-scrolled')
          }
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  })

  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <AiOutlineMail className="mail" /> <a href="mailto:contact@example.com">teocaragea@yahoo.com</a>
          <BsFillTelephoneFill className="phone" /> +40 752 002 841
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="#" className="facebook"><BsFacebook /></a>
          <a href="#" className="instagram"><BsInstagram /></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
}